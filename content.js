console.log('My chrome extension');
setTimeout(() => {
  console.log('My chrome extension: Inside timeout');
  if (button) {
    // Like the video
    button.click()
    // Take a screenshot of the video
    chrome.runtime.sendMessage({ action: 'takeScreenshot' }, function (response) {
      console.log('Screenshot taken:', response.data);
    });
  } else {
    console.log('Button not found');
  }
}, 3000);
