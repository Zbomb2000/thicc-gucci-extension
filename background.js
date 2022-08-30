var toggle = 0;
var numVar = 0;
const colorlist = ["red", "orange", "yellow", "green", "blue", "purple"];

function mainFunc(bg_color) {
  document.body.style.backgroundColor = bg_color;
}

chrome.action.onClicked.addListener((tab) => {
  clearInterval();
  if (toggle == 0) {
    toggle = 1;
    console.log(toggle);
  } else if (toggle == 1) {
    toggle = 0;
    console.log(toggle);
  }
  var myfunc = setInterval(function() {
    if (toggle == 1) {
      numVar = Math.floor(Math.random() * 6);
      bgcolor = colorlist[numVar];
    } else if (toggle == 0) {
      bgcolor = "white";
    }
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: mainFunc,
      args: [bgcolor],
    });
  }, 50);
});
