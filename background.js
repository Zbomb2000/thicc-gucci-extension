var toggle = 0;

function reddenPage() {
  var delayVar = 0;
  var numVar = 0;
  var bg = document.body.style;
  const colorlist = ["red", "orange", "yellow", "green", "blue", "purple"];

  var myfunc = setInterval(function() {
  	numVar = Math.floor(Math.random() * 6);
  	bg.backgroundColor = colorlist[numVar];
  	// No delay on open
  	if (delayVar == 0) {
  		delayVar = 1000;
  	}
    if (toggle == 1) {
      clearInterval();
      console.log("Cleared thing");
    }

  }, delayVar);
}

function whittenPage() {
  clearInterval();
  document.body.style.backgroundColor = "white";
}

chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("chrome://")) {
    if (toggle == 0) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: reddenPage
      });
      toggle = 1;
      console.log("toggle = 1");
      console.log(toggle)
    } else if (toggle == 1) {
      console.log("whittenPage");
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: whittenPage
      });
      toggle = 0;
      console.log("toggle = 0");
      console.log(toggle);
    }
  }
});
