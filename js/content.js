chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.message === 'clicked_browser_action') {
    var inject = document.createElement('div');
    var rnd = parseInt(Math.random() * 1000);
    inject.innerHTML = '<a id="ext_sprtzlnk_' + rnd + '" style="display: none;" href="javascript:(function(){function loadScript()%7Bvar script=document.createElement(%27script%27);script.setAttribute(%27type%27,%27text/javascript%27);script.setAttribute(%27charset%27,%27UTF-8%27);script.setAttribute(%27async%27,%27true%27);script.setAttribute(%27src%27,%27https://sdk.spritzinc.com/js/1.2/bookmarklet/js/SpritzletOuter.js%3F%27+(new Date().getTime()).toString().substring(0,7));document.documentElement.appendChild(script);script.onload=script.onreadystatechange=function()%7Bvar rs=script.readyState;if(!rs || rs===%27loaded%27 || rs===%27complete%27)%7Bscript.onload=script.onreadystatechange=null;Spritzlet.init();}};}if(window.Spritzlet)%7BSpritzlet.activate();}else%7Bwindow.Spritzlet=window.Spritzlet ||%7B};window.Spritzlet=%7Borigin:window.location.protocol+%27//%27+window.location.host,loaderVersion:1.0};loadScript();}})();">spritz</a>';
    document.body.insertBefore(inject, document.body.firstChild);
    document.getElementById('ext_sprtzlnk_' + rnd).click();
  }
});