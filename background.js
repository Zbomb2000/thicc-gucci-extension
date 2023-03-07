var toggle = 0;
var numVar = 0;
const colorlist = ["red", "orange", "yellow", "green", "blue", "purple"];
var gangster_variable = false;
var lettise = false;

function mainFunc(bg_color, toggle, gangster_variable, lettise) {
  document.body.style.backgroundColor = bg_color;
  if (toggle == 1) {
    if (!gangster_variable) {
      document.write("<p style='text-align: center; font-size: 50px;'>i can smell you</p>");
      console.log("teeth")
      gangster_variable = true;
    }
  }
}

chrome.action.onClicked.addListener((tab) => {
  clearInterval();
  if (toggle == 0) {
    toggle = 1;
    console.log(toggle);
  } else if (toggle == 1) {
    toggle = 2;
    console.log(toggle);
  }
  var myfunc = setInterval(function() {
    if (toggle == 1) {
      numVar = Math.floor(Math.random() * 6);
      bgcolor = colorlist[numVar];
    } else if (toggle == 0) {
      bgcolor = "white";
    } else if (toggle == 2) {
      lettise = true;
    }
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: mainFunc,
      args: [bgcolor, toggle, gangster_variable, lettise],
    });
  }, 50);
});
