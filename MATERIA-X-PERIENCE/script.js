var enabled = true;

var req = new XMLHttpRequest();
req.open('GET', chrome.runtime.getURL('elcreative-materiaxperience.css'));
req.onload = function() {
  if (req.readyState === 4)
    if (req.status === 200) {
      var oNew = document.createElement('style');
      oNew.rel = 'stylesheet';
      oNew.type = 'text/css';
      oNew.media = 'screen';
      oNew.id = 'elcreative-materiaxperience';
      oNew.textContent = req.responseText;
      document.documentElement.appendChild(oNew);
    }
  }
  req.send(null);

  var mutation = new MutationObserver(() => {
    if (enabled) {
      document.documentElement.appendChild(oNew);
    }
    mutation.disconnect();
  });

  chrome.storage.local.get({
    enabled: true
  }, prefs => {
    enabled = prefs.enabled;
    if (enabled) {
      document.documentElement.appendChild(oNew);
    }
    mutation.observe(document, { childList: true, subtree: true });
  });