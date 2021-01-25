function saveOptions() {
  chrome.storage.sync.set({
    buzzfeed: document.getElementById('buzzfeed').checked,
    huffpost: document.getElementById('huffpost').checked,
    bunshun: document.getElementById('bunshun').checked,
    fnn: document.getElementById('fnn').checked,
    toyokeizai: document.getElementById('toyokeizai').checked
  }, () => {
    const status = document.getElementById('status');
    status.textContent = '保存しました！';
    setTimeout(() => {
      status.textContent = '';
    }, 1750);
  });
}

function restoreOptions() {
  chrome.storage.sync.get({
    buzzfeed: true,
    huffpost: true,
    bunshun: false,
    fnn: false,
    toyokeizai: false
  }, (items) => {
    document.getElementById('buzzfeed').checked = items.buzzfeed;
    document.getElementById('huffpost').checked = items.huffpost;
    document.getElementById('bunshun').checked = items.bunshun;
    document.getElementById('fnn').checked = items.fnn;
    document.getElementById('toyokeizai').checked = items.toyokeizai;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);