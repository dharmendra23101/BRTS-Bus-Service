// script.js

function searchRoute() {
    const input = document.getElementById('route-search').value;
    if (input) {
        alert('Searching route: ' + input);
    } else {
        alert('Please enter a starting point.');
    }
}



const messages = [
    "Welcome to the Bus Tracker",
    "Track Your Bus in Real-Time",
    "Experience the Best BRT Service",
    "Stay Informed About Routes & Fares",
    "Plan Your Commute with Ease",
  ];
  
  let messageIndex = 0;
  const overlayText = document.getElementById("overlay-text");
  
  function updateText() {
    overlayText.style.opacity = "0"; 
    setTimeout(() => {
      overlayText.textContent = messages[messageIndex]; 
      overlayText.style.animation = "none"; 
      overlayText.offsetHeight; 
      overlayText.style.animation = "slideIn 1s ease forwards"; 
      overlayText.style.opacity = "1"; 
      messageIndex = (messageIndex + 1) % messages.length; 
    }, 500); 
  }
  
  setInterval(updateText, 3000); 
  
