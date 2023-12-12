chrome.tabs.onCreated.addListener(function() {
    chrome.history.search({
        'text': 'google.com/search'
        },
        function(searchResults) {deleteResults(searchResults)}
    );
    chrome.history.search({
        'text': 'duckduckgo.com'
        },
        function(searchResults) {deleteResults(searchResults)}
    );
});

function deleteResults(searchResults) {
    for(var i =0; i < searchResults.length; i++) {
        // console.log(searchResults[i].url);
        chrome.history.deleteUrl({
            url: searchResults[i].url
        });
    }
}
