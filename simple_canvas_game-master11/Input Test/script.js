var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');
canvas.width = 712;
canvas.height = 500;
document.body.appendChild(canvas);
var inputString = 'hi ';
var keysDown = {};
var keyNum = 0;
var stuffNum = 0;
addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
	keyNum += 1;
	console.log(keysDown);
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
	stuffNum = 0;
}, false);

var update = function() {
	if (stuffNum == 0 && inputString.length < 7){
	if (65 in keysDown){
		inputString += 'a';
		stuffNum += 1;
	}
	else if (66 in keysDown){
		inputString += 'b';
		stuffNum += 1;
	}
	else if (67 in keysDown){
		inputString += 'c';
		stuffNum += 1;
	}
	else if (68 in keysDown){
		inputString += 'd';
		stuffNum += 1;
	}
	else if (69 in keysDown){
		inputString += 'e';
		stuffNum += 1;
	}
	else if (70 in keysDown){
		inputString += 'f';
		stuffNum += 1;
	}
	else if (71 in keysDown){
		inputString += 'g';
		stuffNum += 1;
	}
	else if (72 in keysDown){
		inputString += 'h';
		stuffNum += 1;
	}
	else if (73 in keysDown){
		inputString += 'i';
		stuffNum += 1;
	}
	else if (74 in keysDown){
		inputString += 'j'
	}
	else if (75 in keysDown){
		inputString += 'k';
		stuffNum += 1;
	}
	else if (76 in keysDown){
		inputString += 'l';
		stuffNum += 1;
	}
	else if (77 in keysDown){
		inputString += 'm';
		stuffNum += 1;
	}
	else if (78 in keysDown){
		inputString += 'n';
		stuffNum += 1;
	}
	else if (79 in keysDown){
		inputString += 'o';
		stuffNum += 1;
	}
	else if (80 in keysDown){
		inputString += 'p';
		stuffNum += 1;
	}
	else if (81 in keysDown){
		inputString += 'q';
		stuffNum += 1;
	}
	else if (82 in keysDown){
	inputString += 'r';
		stuffNum += 1;
	}
	else if (83 in keysDown){
		inputString += 's';
		stuffNum += 1;
	}
	else if (84 in keysDown){
		inputString += 't';
		stuffNum += 1;
	}
	else if (85 in keysDown){
		inputString += 'u';
		stuffNum += 1;
	}
	else if (86 in keysDown){
		inputString += 'v';
		stuffNum += 1;
	}
	else if (87 in keysDown){
		inputString += 'w';
		stuffNum += 1;
	}
	else if (88 in keysDown){
		inputString += 'x';
		stuffNum += 1;
	}
	else if (89 in keysDown){
		inputString += 'y';
		stuffNum += 1;
	}
	else if (90 in keysDown){
		inputString += 'z';
		stuffNum += 1;
	}
	else if (8 in keysDown){
		inputString = inputString.slice(0,-1)
		stuffNum += 1;
	}
	}
}

var render = function() {
	ctx.fillStyle='orange';
	ctx.fillRect(0,0,712,50);
	ctx.fillStyle='blue';
	ctx.fillText(inputString.toUpperCase(), 50, 50);
}
var main = function() {
	update();
	render();
	requestAnimationFrame(main);
}

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
main();