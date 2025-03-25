[CmdletBinding()]
param(
    # Path to the package.json file to examine the licenses for.
    [Parameter()]
    [string]
    $Path,

    [Parameter()]
    [string]
    $OutFile = "$PSScriptRoot/CREDITS.md",

    [Parameter()]
    [switch]
    $InstallPrerequisites,

    [Parameter()]
    [string]
    $ProductName = 'choco-theme'
)

function Get-WebRequest {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]
        $Uri
    )

    $result = $null

    do {
        try {
            $result = Invoke-RestMethod -Uri $Uri -ErrorAction Stop -Verbose:$false
        }
        catch {
            $code = $_.Exception.Response.StatusCode
            if ($code -eq [System.Net.HttpStatusCode]::TooManyRequests) {
                $wait = $_.Exception.Response.Headers['Retry-After']
                Write-Verbose "Received TooManyRequest response, waiting $wait seconds (API rate-limiting)."
                Start-Sleep -Seconds $wait
                continue
            }
            else {
                Write-Error "Unhandled error accessing '$Uri'"
                $PSCmdlet.WriteError($_)
                return
            }
        }
    } until ($result)

    $result
}

function Get-NuGetPackageLicense {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]
        $Package,

        [Parameter(Mandatory)]
        [string]
        $Version
    )

    $packageLicenseUrl = "https://www.nuget.org/packages/$($Package)/$($Version)/license"

    $page = Get-WebRequest -Uri $packageLicenseUrl -ErrorAction Ignore

    if ($page -match '<div class="common-licenses">[\s\S]+?</div>') {
        [PSCustomObject]@{
            Text = [System.Web.HttpUtility]::HtmlDecode(($matches[0] -replace '<[^>]+?>').Trim())
            Url = $packageLicenseUrl
        }
    }
}

function Get-NuGetPackageRepositoryUrl {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]
        $Package,

        [Parameter(Mandatory)]
        [string]
        $Version
    )

    if ($Package -eq 'Rhino.Licensing') {
        "https://github.com/chocolatey/rhino-licensing"
        return
    }

    $url = "https://api-v2v3search-0.nuget.org/query?q=packageid:$Package"
    $result = Get-WebRequest -Uri $url
    $packageInfoUrl = $result.data.versions | Where-Object version -eq $Version | Select-Object -ExpandProperty '@id'

    if (-not $packageInfoUrl) {
        Write-Verbose "Did not find package on NuGet.org with id '$($package.name)' and version '$($package.version)'"
        $result.data.versions | Out-String | Write-Verbose
        return
    }

    $result = Get-WebRequest -Uri $packageInfoUrl
    $catalogUrl = $result.catalogEntry
    $catalogInfo = Get-WebRequest -Uri $catalogUrl

    $catalogInfo.repository
}

function Get-LicenseKind {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [AllowEmptyString()]
        [string]
        $Text
    )

    if ([string]::IsNullOrWhiteSpace($Text)) {
        'Other'
        return
    }

    $LicensePatterns = @(
        @{ Name = 'Apache-2.0'; Pattern = 'Apache License[\S\s]+?Version 2\.0' }
        @{ Name = 'MIT'; Pattern = 'MIT License' }
    )

    foreach ($licenseType in $LicensePatterns) {
        if ($Text -match $licenseType.Pattern) {
            $licenseType.Name
            return
        }
    }

    # If we get here, it's not recognised
    'Other'
}

function Get-GithubRawLink {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]
        $Url
    )

    # Pre-check to find target URLs from shortlinks
    try {
        $null = Invoke-WebRequest -Uri $Url -MaximumRedirection 0 -ErrorAction Stop
    }
    catch {
        if ([int]$_.Exception.Response.StatusCode -in 301, 302) {
            $Url = $_.Exception.Response.Headers.Location
        }
    }

    if ($Url -match '//raw\.github') {
        $Url
    }
    elseif ($Url -match 'github\.com.+?blob/') {
        ($Url -replace 'blob/') -replace 'github\.com', 'raw.github.com'
    }
}

if ($InstallPrerequisites) {
    yarn install --immutable

    if (-not $?) {
        throw "yarn failed to install with exit code: $LASTEXITCODE."
    }
}

$excludedNpmDirectories = @(
    'node_modules'
    'wwwroot'
    'bin'
    'temp'
    'test'
) -join '|'

Write-Host "Finding package.json files"
$packageJsonFiles = if ($Path -match 'package\.json$') {
    $Path
}
else {
    Get-ChildItem -Path $Path -Filter 'package.json' |
        Where-Object FullName -notmatch $excludedNpmDirectories
}

Write-Host "Retrieving licensing information for NPM dependencies"
$npmData = foreach ($file in $packageJsonFiles) {
    $nodeModules = $file.FullName | Split-Path -Parent | Join-Path -ChildPath 'node_modules'
    if (-not (Test-Path $nodeModules -PathType Container)) {
        Write-Warning "node_modules folder for file $($file.FullName) seems to be missing; some dependencies may not be present."
        continue
    }

    while (-not (Get-Command license-report -ErrorAction Ignore)) {
        ${/} = [System.IO.Path]::DirectorySeparatorChar
        ${;} = [System.IO.Path]::PathSeparator
        $npmPath = "$env:AppData${/}npm"
        if (-not ($env:PATH -split ${;} -match [regex]::Escape($npmPath))) {
            $env:PATH = $npmPath + ${;} + $env:PATH
        }
        else {
            $message = @(
                "Could not locate license-report tool to generate NPM package license report."
                "Install the tool with 'npm install license-report --location=global',"
                "or pass '-InstallPrerequisites' to this script"
            ) -join ' '

            throw $message
        }
    }

    Push-Location ($file | Split-Path -Parent)
    license-report --only="prod,peer" --package="$($file.FullName)" | ConvertFrom-Json
    Pop-Location
}

$Dependencies = @{ Other = [System.Collections.Generic.List[psobject]]::new() }

###############################
## YARN / NPM DEPENDENCIES
###############################

Write-Host "Processing yarn / NPM dependency licensing information"
foreach ($package in $npmData) {
    $url = ($package.link -replace '^git\+|\.git$').Replace('git://', 'https://') -replace '^ssh:[^@]+@', 'https://'
    $licenseInfo = @{
        Package = $package.name + "@" + $package.installedVersion
        RepositoryUrl = $url
    }

    if ($package.name -eq 'block-ui') {
        # No license file in repository. Refer to information at https://github.com/malsup/blockui?tab=readme-ov-file#copyright-and-license.
        $licenseType = 'MIT'
    }
    elseif (-not $package.licenseType -or $package.licenseType -eq 'n/a') {
        $licenseType = 'Other'
    }
    elseif ($package.licenseType -match 'see Gridstack') {
        $licenseType = 'Other'
        $licenseInfo.LicenseText = $package.licenseType
    }
    elseif ($package.licenseType.Trim() -eq 'MIT, GPL') {
        # Only used by easy-pie-chart; this project's main license seems to be MIT
        $licenseType = 'MIT'
    }
    else {
        $licenseType = $package.licenseType -replace '^\(|\)$'
        $licenseInfo.LicenseText = [string]::Empty
    }

    if ($null -eq $Dependencies.$licenseType) {
        $Dependencies.$licenseType = [System.Collections.Generic.List[psobject]]::new()
    }

    $Dependencies.$licenseType.Add([PSCustomObject]$licenseInfo)
}

###############################
## FORMATTING / TEMPLATING
###############################

Write-Host "Constructing licensing document"

$DocumentTemplate = @"

## $ProductName Third-Party Licenses

$ProductName uses a number of 3rd-party components.
Their details are below.

__TOC__
__BODY__
"@.Trim()

$TocTemplate = "- [__NAME__](#__LINK__)"

$PackageTemplate = @'
#### __HEADER__

__INFO__
'@.Trim()
$toc = [System.Text.StringBuilder]::new()
$body = [System.Text.StringBuilder]::new()

$missingLicenses = [System.Collections.Generic.List[psobject]]::new()

$licenseTypeList = $Dependencies.Keys | Sort-Object

# Suppress noisy output of AppendLine() on StringBuilders
$null = foreach ($type in $licenseTypeList) {
    $packageList = $Dependencies.$type | Sort-Object -Property Package

    $name = $type
    $licenseTexts = @()

    if ($type -notin 'Other', 'Microsoft Software License') {
        $urlFormat = "https://github.com/spdx/license-list-data/raw/main/json/details/{0}.json"

        $multiple = $false
        $types = if ($type -match ' AND | OR |,') {
            $multiple = $true
            ($type -split ' (?:AND|OR) |,').Trim()
        }
        else {
            $type
        }

        $licenseTexts = foreach ($licenseType in $types) {
            Write-Verbose "Getting license information for $licenseType"
            $url = $urlFormat -f $licenseType
            $licenseData = Get-WebRequest -Uri $url -ErrorAction Ignore
            if ($licenseData) {
                Write-Verbose "Located license type with name '$($licenseData.name)'"
                if (-not $multiple) {
                    # Set the section name to the full license name
                    $name = $licenseData.name
                }

                # Drop license text to $licenseTexts collection
                $licenseData.licenseText
            }
            elseif ($licenseType -ne 'ASP.NET ZERO') {
                Write-Warning "License data was not found for identifier '$licenseType'."
            }
        }
    }

    $tocLinkTarget = ($name.ToLower() -replace '[^a-z0-9 -]') -replace ' +', '-'
    $tocLink = $TocTemplate.
        Replace('__NAME__', $name).
        Replace('__LINK__', $tocLinkTarget)

    $toc.AppendLine($tocLink)

    $body.AppendLine("### $name")
    $body.AppendLine()

    if ($type -ne 'Other') {
        $body.AppendLine("The following components are licensed under the $name licence(s).")
        $body.AppendLine("Additional information or modified licenses will be listed below for each dependency.")
        $body.AppendLine()
    }

    switch ($type) {
        'Microsoft Software License' {
            # This is one of the few packages that allows us to get at a plaintext copy of this license,
            # but the content is the same as the web link for this one.
            $licenseText = (Get-NuGetPackageLicense -Package 'Microsoft.Data.SqlClient.SNI.runtime' -Version '2.1.1').Text

            $body.AppendLine('```txt')
            $body.AppendLine($licenseText)
            $body.AppendLine('```')
            $body.AppendLine()

            break
        }
        # "default" branch if none of the specific 'break' branches above are taken
        { $_ -ne 'Other' } {
            foreach ($text in $licenseTexts) {
                $body.AppendLine('```txt')
                $body.AppendLine($text)
                $body.AppendLine('```')
                $body.AppendLine()
            }
        }
    }

    foreach ($package in $packageList) {
        $licenseInfo = [System.Text.StringBuilder]::new()
        if ($package.RepositoryUrl) {
            $licenseInfo.AppendLine("[Repository Link]($($package.RepositoryUrl))")
            $licenseInfo.AppendLine()
        }

        if ($package.LicenseText -and ($licenseTexts.Count -eq 0 -or $package.LicenseText.Trim() -notin $licenseTexts.Trim())) {
            $licenseInfo.AppendLine('```txt')
            $licenseInfo.AppendLine($package.LicenseText)
            $licenseInfo.AppendLine('```')
        }
        else {
            if ($type -ne 'Other') {
                $licenseInfo.AppendLine("No additional license information is available for this package.")
            }

            if ($package.LicenseUrl) {
                $licenseInfo.Append("Refer to the [online license information]($($package.LicenseUrl))")
                if ($type -ne 'Other') {
                    $licenseInfo.AppendLine(" and the license text above, listed under [$name](#$tocLinkTarget)")
                }
                else {
                    $licenseInfo.AppendLine('.')
                }
            }
            else {
                if ($type -eq 'Other') {
                    $licenseInfo.AppendLine("License information missing!")
                    $missingLicenses.Add($package)
                }
                else {
                    $licenseInfo.AppendLine("Refer to the license text above, listed under [$name](#$tocLinkTarget).")
                }
            }
        }

        $header = if ($package.LicenseUrl) {
            "[{0}]({1})" -f $package.Package, $package.LicenseUrl
        }
        elseif ($package.RepositoryUrl) {
            "[{0}]({1})" -f $package.Package, $package.RepositoryUrl
        }
        else {
            $package.Package
        }

        $text = $PackageTemplate.
            Replace('__HEADER__', $header).
            Replace('__INFO__', $licenseInfo.ToString().Trim())

        $body.AppendLine($text)
        $body.AppendLine()
    }
}

$finalDocument = $DocumentTemplate.
    Replace('__TOC__', $toc.ToString()).
    Replace('__BODY__', $body.ToString())

$finalDocument | Set-Content -Path $OutFile -Encoding utf8

$file = Get-Item -Path $OutFile

Write-Host "Licensing document created at: $($file.FullName)"
Write-Warning "License information for block-ui is missing and has been manually added. Refer to https://github.com/malsup/blockui?tab=readme-ov-file#copyright-and-license for more information."

if ($missingLicenses.Count -gt 0) {
    $list = $missingLicenses |
        Select-Object -ExpandProperty Package |
        Out-String
    Write-Warning "Could not find license information for the following packages. Please manually check their license information.`n`n$list"
    Write-Warning "You can locate these entries by searching for 'License information missing!' in the generated file."
}

Write-Warning "Verify the file contents before distributing: $($file.FullName)"
