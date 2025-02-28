# kellokortti-event-highlighter-chrome-extension
Highlight Kellokortti project events with the desired color.

## Setup extension

Modify `content.js`
- Set the customer name in the `projectToFind` constant to highlight the desired project. 
Example: `"Customer: UB Rahoitus Oy"`

Modify `content.css`
- Change the `background-color` value to your preference.

You can create additional highlight functions and classes if you want to highlight multiple projects.

## How to install in Chrome
1. Open chrome://extensions/
2. Enable Developer mode
3. Click "Load unpacked" and select the extension folder
4. The extension will be loaded and will work automatically on the https://app.kellokortti.fi/app/viikko website

**NOTE:** You need to refresh the extension if you make any changes.


