param(
    [Parameter(Mandatory = $true)]
    [int]$IssueNumber
)

$filesToCommit = @("package.json", "yarn.lock")

yarn audit --json |
    ConvertFrom-Json |
    ForEach-Object value |
    Sort-Object -Unique |
    ForEach-Object {
        $package = $_

        Write-Host -ForegroundColor Cyan $package

        yarn up -R $package
        if ($LASTEXITCODE -ne 0) {
            Write-Warning "Failed to update $package"
            return
        }

        git add $filesToCommit

        git commit -m "(#$IssueNumber) Update $package"
    }

yarn audit
