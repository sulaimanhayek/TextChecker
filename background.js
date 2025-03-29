chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.verdict) {
      chrome.runtime.sendMessage({ verdict: request.verdict });
    }
  });