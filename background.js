
function getTabs() {
    chrome.windows.getCurrent({populate: true}, function(currentWindow) {
        tabs = currentWindow.tabs;
    });
};

function closeGoogleTabs() {
    chrome.windows.getCurrent({populate: true}, function(currentWindow) {
        tabs = {};
        tabs = currentWindow.tabs;

        re = /^https?\:\/\/(www\.)?google\..*(webhp|search).*/;
        for (var i = 0; i < tabs.length; i++) {
            if (re.test(tabs[i].url)) {
                chrome.tabs.remove(tabs[i].id);
            }
        }
    });
}

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "close-google-tabs":
            closeGoogleTabs();
        break;
    }
    return true;
});