// Define the distractionList as a global variable
let distractionList = ["facebook.com", "twitter.com", "newswebsite.com","instagram.com","tiktok.com","pinterest.com"];
// Define an array of distracting websites


// Get the current URL
const currentURL = window.location.hostname;

// Check if the current URL is in the distraction list
if (distractionList.includes(currentURL)) {
  // Create a container div for the overlay
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
  overlay.style.zIndex = "9999";
  
  // Create a message div
  const message = document.createElement("div");
  message.textContent = "This website is distracting. Stay focused!";
  message.style.fontSize = "24px";
  message.style.color = "#fff";
  message.style.textAlign = "center";
  message.style.position = "absolute";
  message.style.top = "50%";
  message.style.left = "50%";
  message.style.transform = "translate(-50%, -50%)";
  
  // Append the message to the overlay
  overlay.appendChild(message);
  
  // Append the overlay to the body
  document.body.appendChild(overlay);
}



// Function to update the distraction list in the popup
function updatePopupDistractionList() {
  const distractionListElement = document.getElementById('distractionList');
  distractionListElement.innerHTML = '';

  distractionList.forEach((site, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = site;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      distractionList.splice(index, 1);
      chrome.storage.sync.set({ distractionList });
      updatePopupDistractionList();
    });

    listItem.appendChild(removeButton);
    distractionListElement.appendChild(listItem);
  });
}

// Function to add a website to the distraction list
function addWebsiteToDistractionList() {
  const websiteInput = document.getElementById('websiteInput');
  const website = websiteInput.value.trim();

  if (website && !distractionList.includes(website)) {
    distractionList.push(website);
    chrome.storage.sync.set({ distractionList });
    websiteInput.value = '';
    updatePopupDistractionList();
  }
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get the distraction list from storage
  chrome.storage.sync.get(['distractionList'], function (result) {
    if (result.distractionList) {
      distractionList = result.distractionList;
      updatePopupDistractionList();
    }
  });
  chrome.storage.sync.get(['distractionList'], function (result) {
    // Check for errors and use result.distractionList here
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
      return;
    }
    const distractionList = result.distractionList;
    // Handle the distractionList
  });

  // Add a click event listener for the "Add" button
  const addButton = document.getElementById('addButton');
  addButton.addEventListener('click', addWebsiteToDistractionList);
});
