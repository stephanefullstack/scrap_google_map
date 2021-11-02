// Usage

function appendScript(url) {
  var head = document.getElementsByTagName('head')[0];
  var theScript = document.createElement('script');
  theScript.type = 'text/javascript';
  theScript.src = url;
  theScript.onreadystatechange = copy;
  theScript.onload = copy;
  head.appendChild(theScript);
}

appendScript("https://raw.githubusercontent.com/stephanefullstack/scrap_google_map/master/scraper.js");
