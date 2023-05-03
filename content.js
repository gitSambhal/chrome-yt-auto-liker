console.log('My chrome extension');
setTimeout(() => {
  console.log('My chrome extension: Inside timeout');
  const button = document.querySelector('#segmented-like-button > ytd-toggle-button-renderer:nth-child(1) button')
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
}, 2000);
