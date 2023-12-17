# FocusGuard Chrome Extension

FocusGuard is a Chrome browser extension designed to help users stay focused and productive by managing distracting websites.

## Features

- **Distraction List Management:** Add, remove, and manage a personalized list of distracting websites.
- **Overlay Display:** Display a customizable overlay message when visiting distracting websites.
- **Chrome Storage Sync:** Store the distraction list in Chrome's storage for persistence across sessions.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your_username/your_repository.git
## steps
1. Open Chrome and go to `chrome://extensions/`.
2. Enable Developer mode (toggle switch).
3. Click on "Load unpacked" and select the cloned folder.

## Usage
- **Popup UI:** Click on the extension icon in the Chrome toolbar to open the popup UI.
- **Add Sites:** Enter the URLs of distracting websites and click "Add" to include them in the distraction list.
- **Manage List:** View, remove, or modify websites in the distraction list via the UI.
- **Stay Focused:** When visiting a distracting website, an overlay message will remind you to stay focused.
## Directory Structure
FocusGuard-Chrome-Extension/
│
├── manifest.json            
│
├── popup.html               
├── popup.js                 
├── popup.css                
│
├── content.js               
│
├── background.js            
│
├── images/                  
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
│
└── LICENSE                 

## Contributing
Contributions are welcome! Feel free to open issues for feature requests or bug reports.

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature/your-feature).
5. Create a new Pull Request.

