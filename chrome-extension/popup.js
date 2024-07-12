 
document.getElementById('openApp').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://web.vectordb.app/' });
  });
  