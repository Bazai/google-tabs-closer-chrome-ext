document.addEventListener('DOMContentLoaded', function () {
    chrome.extension.sendMessage({
        type: "close-google-tabs"
    });
});