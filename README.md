# Extension
Create the Directory Structure:-
mkdir chrome-extension\images
cd chrome-extension
--------------------------------------------
Create the Manifest File:-
echo. > manifest.json
--------------------------------------------

Create the Popup HTML File:-
echo. > popup.html
--------------------------------------------

Create the Popup JavaScript File:-
echo. > popup.js
--------------------------------------------

Create the Background Script File:-
echo. > background.js
--------------------------------------------

Create the Icon Files
You can create placeholder files for the icons:
echo. > images\icon16.png
echo. > images\icon48.png
echo. > images\icon128.png
--------------------------------------------

manifest.json:
{
  "manifest_version": 3,
  "name": "My Web App Extension",
  "version": "1.0",
  "description": "A Chrome extension for my web app",
  "permissions": [
    "activeTab",
    "storage"
  ],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "images/icon16.png",
      "48": "images/icon48.png",
      "128": "images/icon128.png"
    }
  },
  "background": {
    "service_worker": "background.js"
  }
}
-----------------------------------------------
popup.html:
<!DOCTYPE html>
<html>
<head>
  <title>My Web App Extension</title>
  <style>
    body {
      width: 300px;
      padding: 10px;
    }
  </style>
</head>
<body>
  <h1>My Web App</h1>
  <button id="openApp">Open App</button>
  <script src="popup.js"></script>
</body>
</html>
------------------------------------------------------------------------------------------------------
popup.js:
document.getElementById('openApp').addEventListener('click', () => {
  chrome.tabs.create({ url: 'https://your-web-app-url.com' });
});

background.js:
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});
--------------------------------------------------------------------------------------------------
 Add Icons:-
Add icons for your extension in the images directory. The manifest.json refers to icon16.png, icon48.png, and icon128.png. Make sure these files exist in the specified directory.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Load Your Extension in Chrome:-
1.Open Chrome and go to chrome://extensions/.
2.Enable "Developer mode" using the toggle in the top right.
3.Click "Load unpacked" and select your project directory.
