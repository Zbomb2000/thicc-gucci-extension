var delayVar = 0;
var numVar = 0;
var bg = document.body.style;
const colorlist = ["red", "orange", "yellow", "green", "blue", "purple"];
document.write("i can smell you");

var myfunc = setInterval(function() {
	numVar = Math.floor(Math.random() * 6);
	bg.backgroundColor = colorlist[numVar]
	// No delay on open
	if (delayVar == 0) {
		delayVar = 1000;
	}

}, delayVar)
