chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.active) {
      // Check the tab's URL and compare it with your distraction list
      const distractionList = ["distracting.com", "anotherdistractingsite.com"];
      const currentURL = new URL(tab.url);
      const hostname = currentURL.hostname;
  
      if (distractionList.includes(hostname)) {
        // Display a notification to the user
        chrome.action.setBadgeText({ text: 'Blocked' });
        chrome.action.setBadgeBackgroundColor({ color: '#FF0000' });
      } else {
        chrome.action.setBadgeText({ text: '' }); // Clear the badge
      }
    }
  });
  