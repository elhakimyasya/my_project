let themeSwitch = document.getElementById('theme-switch');

themeSwitch.onchange = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function() {
        if(themeSwitch.checked){
            chrome.tabs.executeScript(
                {code: 'document.querySelector("#elcreative-materiaxperience").textContent = req.responseText;'
            });
            localStorage.setItem('toggle-theme', 'on');
        }
        else{
            chrome.tabs.executeScript(
                {code: 'document.querySelector("#elcreative-materiaxperience").textContent = "";'
            });
            localStorage.setItem('toggle-theme', 'off');
        }
    });
};

window.onload = function(){
	themeSwitch.checked = localStorage.getItem('toggle-theme')!='off';
    themeSwitch.onchange();
};