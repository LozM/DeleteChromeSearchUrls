chrome.tabs.onCreated.addListener(function() {
    chrome.history.search({
        'text': 'google.com/search'
        // 'startTime': EPOCH_VALUE  // Add this if you want to specify a time frame other than the default of last 24 hours. 
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
