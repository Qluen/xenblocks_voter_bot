// content.js

// Funkcja do klikania przycisku 'Start voter'
function clickStartVoterButton() {
  // Wyszukujemy przycisk za pomocą selektora, np. po klasie lub ID
  const button = document.querySelector("button:contains('Start voter')");  // Można także użyć odpowiedniego selektora, jeśli jest dostępny

  if (button) {
    button.click();
  }
}

// Nasłuchiwanie na wiadomości z background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'clickStartVoterButton') {
    clickStartVoterButton();
  }
});
