// Define an array of distracting websites
const distractionList = ["distracting.com", "anotherdistractingsite.com"];

// Get the current URL
const currentURL = window.location.hostname;

if (distractionList.includes(currentURL)) {
  
  window.location.href = "https://www.google.com";
}
