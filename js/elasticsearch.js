$(function() {
    var typeAheadOptions = {
        hint: true,
        highlight: true,
        minLength: 1
    };

    var remoteHandler = function (query, process) {
        return $.ajax(
            {
                cache: false,
                type: "POST",
                url: window.location.protocol + "//" + window.location.host + "/json/JsonApi?invoke&action=GetSuggestions",
                data: JSON.stringify({ SearchTerm: query }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (suggestions) {
                    process(suggestions);
                }
            });
    };

    $('#query').typeahead(typeAheadOptions,
    {
        displayKey: "PackageId",
        templates: {
            empty: [
                '<div class="bg-theme no-results d-flex justify-content-between align-items-center p-3">',
                '<h5 class="text-theme mb-0">',
                'No suggestions found.',
                '</h5>',
                '</div>'
            ].join('\n'),
            header: function () {
                return [
                    '<div class="bg-theme no-results d-flex justify-content-between align-items-center p-3 text-center">',
                    '<p class="mb-0 small"><strong>id:searchValue</strong><br />search by id</p>',
                    '<p class="mb-0 small mx-5"><strong>tag:searchValue</strong><br />search by tag</p>',
                    '<p class="mb-0 small"><strong>author:searchValue</strong><br />search by author</p>',
                    '</div>'
                ].join('\n');
            },
            suggestion: function (suggestion) {
                return [
                    '<div class="bg-theme d-flex justify-content-between align-items-center p-3">',
                    '<h5 class="text-theme mb-0 me-5">',
                    suggestion.PackageId,
                    '</h5>',
                    '<p class="text-theme mb-0">',
                    suggestion.DownloadCount + ' downloads',
                    '</p>',
                    '</div>'
                ].join('\n');
            }
        },
        source: remoteHandler
    })
    .on('typeahead:selected', function (e, o) {
        window.location.href = window.location.protocol + "//" + window.location.host + "/packages/" + o.PackageId;
    })
    .on('typeahead:selected', function (e, o) {
        $("#query").focus().select();
    });

    $("#query").focus().select();
});


