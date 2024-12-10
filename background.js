// background.js

let refreshInterval;

// Funkcja do rozpoczęcia odświeżania i klikania przycisku
function startRefreshing(tabId) {
  refreshInterval = setInterval(() => {
    // Odświeżenie strony
    chrome.tabs.reload(tabId);

    // Wysłanie wiadomości do content.js, aby kliknął przycisk 'Start voter'
    chrome.tabs.sendMessage(tabId, { action: 'clickStartVoterButton' });
  }, 5000);  // Odświeżanie co 5 sekund
}

// Funkcja do zatrzymania odświeżania
function stopRefreshing() {
  if (refreshInterval) {
    clearInterval(refreshInterval);
  }
}

// Nasłuchiwanie na kliknięcia przycisku rozszerzenia
chrome.action.onClicked.addListener((tab) => {
  if (tab.url === "https://xbvoter.x1app.fyi/") {
    if (refreshInterval) {
      stopRefreshing();
    } else {
      startRefreshing(tab.id);
    }
  }
});
