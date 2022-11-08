const blockedHosts = [
    "example.com",
];

const blockRequest = ({ url }) => {
    if (blockedHosts.some(host => url.includes(host))) {
        return { cancel: true };
    }
}

chrome.webRequest.onBeforeRequest.addListener(blockRequest, {
    urls: ["<all_urls>"]
}, ['blocking']);

