// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log({ request });
  if (request.action === 'takeScreenshot') {
    // Take a screenshot of the current tab
    chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataUrl) {
      // Send the screenshot data URL back to the content script
      sendResponse({ data: dataUrl });
    });
  }
  return true;
});
