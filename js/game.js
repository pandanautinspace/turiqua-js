// Create the canvas
var ustop = false;
var dstop = false;
var rstop = false;
var lstop = false;
var matrix;
var hurtflag = 0;
var thinglist = [];
var maxhp;
var state = 3;
var netp;
var dragflag;
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var stuffNum = 0;
var inputString = "player";
var inv = [];
var spawnflag;
canvas.width = 712;
canvas.height = 500;
document.body.appendChild(canvas);
// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";
// Grass image
var grass1Ready = false;
var grass1Image = new Image();
grass1Image.onload = function () {
	grass1Ready = true;
};
grass1Image.src = "images/grass_1.png";
// Grass image
var grass2Ready = false;
var grass2Image = new Image();
grass2Image.onload = function () {
	grass2Ready = true;
};
grass2Image.src = "images/grass_2.png";
// Grass image
var grass3Ready = false;
var grass3Image = new Image();
grass3Image.onload = function () {
	grass3Ready = true;
};
grass3Image.src = "images/grass_3.png";
// minor hp potion
var mihpReady = false;
var mihpImage = new Image();
mihpImage.onload = function () {
	mihpReady = true;
};
mihpImage.src = "images/minorhppotion.png";
// upnet image
var unetReady = false;
var unetImage = new Image();
unetImage.onload = function () {
	unetReady = true;
};
unetImage.src = "images/upnet.png";
// downnet
var dnetReady = false;
var dnetImage = new Image();
dnetImage.onload = function () {
	dnetReady = true;
};
dnetImage.src = "images/downnet.png";
// rightnet
var rnetReady = false;
var rnetImage = new Image();
rnetImage.onload = function () {
	rnetReady = true;
};
rnetImage.src = "images/rightnet.png";
// leftnet
var lnetReady = false;
var lnetImage = new Image();
lnetImage.onload = function () {
	lnetReady = true;
};
lnetImage.src = "images/leftnet.png";
// Option image
var optReady = false;
var optImage = new Image();
optImage.onload = function () {
	optReady = true;
};
optImage.src = "images/reset.png";
// Toolbar image
var tbReady = false;
var tbImage = new Image();
tbImage.onload = function () {
	tbReady = true;
};
tbImage.src = "images/toolbar.png";
// Speed image
var spdReady = false;
var spdImage = new Image();
spdImage.onload = function () {
	spdReady = true;
};
spdImage.src = "images/speed.png";
// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/mage1.png";
// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/goblin.png";
// Koopa image
var shellReady = false;
var shellImage = new Image();
shellImage.onload = function () {
	shellReady = true;
};
shellImage.src = "images/koopa-shell.png";
// inventory image
var invReady = false;
var invImage = new Image();
invImage.onload = function () {
	invReady = true;
};
invImage.src = "images/inventory.png";
var TitleReady = false;
var TitleImage = new Image();
TitleImage.onload = function () {
	TitleReady = true;
};
TitleImage.src = "images/title.png"
var nameReady = false;
var nameImage = new Image();
nameImage.onload = function () {
	nameReady = true;
};
nameImage.src = "images/name.png";
var map = [];
// Game objects
var hero = {
	speed: 100 // movement in pixels per second
	
};
var roomlist = [0, 0];
function room(x,y,mx,my){
	this.x = x;
	this.y = y;
	this.mx = mx;
	this.my = my;
	
}
var generatemap = function(){
	roomlist.splice(0,roomlist.length);
	for	(var index = 0; index < 50; index++) {
		var r = [];
		map.push(r);
		for	(var jindex = 0; jindex < 100; jindex++) {
			map[index][jindex] = 0;
		}
	}
	
	for (var index = 0; index < 10; index++){
		var notgood = true;
		var randomx;
		var randomy;
		var randommx;
		var randommy;
		while(notgood){
			notgood = false;
			randomx = Math.round(Math.random() * (50));
			randomy = Math.round(Math.random() * (100));
			randommx = randomx + Math.round(Math.random() * (50-randomx));
			randommy = randomy + Math.round(Math.random() * (100-randomy));

			if(randommy <= randomy){
				randomy + 5 = randommy;
			}
			if(randommx <= randomx){
				randomx + 5 = randommx;
			}
			for(var jindex = randomx; jindex < randommx; jindex++){
				for(var lindex = randomy; lindex < randommy; lindex++){
					if(map[jindex][lindex] == 0){
						notgood = true;
						
					}
				}
			}
			
		}
		
	
		
		for(var rindex = randomx; rindex < randommx; rindex++){
			for(var yindex = randomy; yindex < randommy; yindex++){
				console.log("Hi");
				map[rindex][yindex] = 1;
					
			}
		}
		roomlist.push(new room(randomx,randomy,randommx,randommy));
	}

	for (var index = 1; index < roomlist.length; index++){
		var px = Math.round(Math.random() * (roomlist[index].mx - roomlist[index].x) + roomlist[index].x);
		var py = Math.round(Math.random() * (roomlist[index].my - roomlist[index].y) + roomlist[index].y);
		var pmx = Math.round(Math.random() * (roomlist[index - 1].mx - roomlist[index - 1].x) + roomlist[index - 1].x);
		var pmy = Math.round(Math.random() * (roomlist[index - 1].my - roomlist[index - 1].y) + roomlist[index - 1].y);
		if(pmx < px){
			var tx = pmx;
			pmx = px;
			px = tx;
		}
		if(pmy < py){
			var tx = pmy;
			pmy = py;
			py = tx;
		}
		for(var jindex = py; jindex < pmy; jindex++){
			map[px][jindex] = 1;
		}
		for(var jindex = px; jindex < pmx; jindex++){
			map[jindex][pmy] = 1;
		}
	}
	

}
function monster(x,y,speed){
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.name = "monster";
};
var bulletlist = [];
function potion(x,y){
	this.x = x;
	this.y = y;
	this.name = "potion";
	}
function shell(x,y){
	this.x = x;
	this.y = y;
	this.name = "shell";
	}

//localStorage.speed = 100;
//localStorage.monstersCaught = 0;
// Handle keyboard controls
var keysDown = {};
canvas.addEventListener("mousedown", function (e) {
	canvas_x = event.x;
	canvas_y = event.y; 
	canvas_x -= canvas.offsetLeft;
	canvas_y -= canvas.offsetTop;
	if (state==3){
		state = 2;		
	}
	if (state==2 && localStorage.name != "player"){
		state = 1;
	}
	if (state==1){
		if(canvas_x >= 516 && canvas_x <= 606 && canvas_y >= 10 && canvas_y <= 42){
			reset();
			
			
		}
		if(canvas_x >= 515 && canvas_x <=547 && canvas_y >= 240 && canvas_y <= 272 ){
		if(Number(localStorage.mihps) != 0){
		localStorage.mihps = Number(localStorage.mihps) - 1;
		if(Number(localStorage.hp)+50 < maxhp){
		localStorage.hp = Number(localStorage.hp) + 50
		}
		else{
			localStorage.hp = maxhp
		}
		}
		}
		
	}
	dragflag = 1;
}, false);
canvas.addEventListener("mouseup", function (e) {
	canvas_x = event.x;
	canvas_y = event.y; 
	canvas_x -= canvas.offsetLeft;
	canvas_y -= canvas.offsetTop;
	dragflag = 0;
}, false);
canvas.addEventListener("dblclick", function (e) {
	canvas_x = event.x;
	canvas_y = event.y; 
	canvas_x -= canvas.offsetLeft;
	canvas_y -= canvas.offsetTop;
	alert("DoubleClick X: " + canvas_x + " Y: " + canvas_y);

	if (state==1){
		if(canvas_x >= 515 && canvas_x <=483 && canvas_y >= 158 && canvas_y <= 158 ){
		if(Number(localStorage.mihps) != 0){
		localStorage.mihps = Number(localStorage.mihps) - 1;
		if(Number(localStorage.hp)+50 < maxhp){
		localStorage.hp = Number(localStorage.hp) + 50
		}
		else{
			localStorage.hp = maxhp
		}
		}
		}
		
	}
}, false);
addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
        if (state == 2) {
            e.preventDefault();
            console.log(e.keyCode);
        }
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
	stuffNum = 0;
}, false);

// initiates localstorage variables

    if(typeof(Storage) !== "undefined") {
        if (localStorage.speed) {
        	hero.speed = localStorage.speed;
        } else {
            localStorage.speed = 100;
        }
    } else {
    }
	   if(typeof(Storage) !== "undefined") {
        if (localStorage.mihps) {
        	hero.mihps = localStorage.mihps;
        } else {
            localStorage.mihps = 3;
        }
    } else {
    }
	if(typeof(Storage) !== "undefined") {
        if (localStorage.hp) {
        	hero.hp = localStorage.hp;
        } else {
            localStorage.hp = 100;
        }
    } else {
    }
   if(typeof(Storage) !== "undefined") {
        if (localStorage.monstersCaught) {
        	
        } else {
            localStorage.monstersCaught = 0;
        }
    } else {
    }

    if(typeof(Storage) !== "undefined") {
        if (localStorage.remort) {
        	
        } else {
            localStorage.remort = 0;
        }
    } else {
    }
    if(typeof(Storage) !== "undefined") {
        if (localStorage.caught) {
        	
        } else {
            localStorage.caught = 0;
        }
    } else {
    }    
	if(typeof(Storage) !== "undefined") {
        if (localStorage.exp) {
        	
        } else {
            localStorage.exp = 0;
        }
    } else {
    }
    if(typeof(Storage) != "undefined") {
	if (localStorage.name) {
        		// Throw the monster somewhere on the screen randomly
	var monsterp = new monster(32 + (Math.random() * (430)),32 + (Math.random() * (430)),20*Number(localStorage.caught)/50);
	thinglist.push(monsterp);
        } else {
            localStorage.name = "player";
        }
    } else {
	}
    if(typeof(Storage) != "undefined") {
	if (localStorage.things) {
        	thinglist = JSON.parse(localStorage.things);
        } else {
            
        }
    } else {
	}
	
    
// Reset the game when the player catches a monster

var reset = function () {
	localStorage.things = JSON.stringify(thinglist);

	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
	for	(var index = 0; index < thinglist.length; index++) {
			if (thinglist[index].name == "monster"){
				thinglist.splice(index,1);
				
			}
	}
	for(var i = 0; i < Math.floor(Number(localStorage.remort)/4)+1; i++ ){
		    var monsterp = new monster(32 + (Math.random() * (430)),32 + (Math.random() * (430)),20*Number(localStorage.caught)/50);
		thinglist.push(monsterp);
		
	}

	hero.speed = localStorage.speed;
};
var resets = function () {

	if (!hurtflag){
	localStorage.speed = Number(localStorage.speed) + 10 + Number(localStorage.remort);
	localStorage.exp = Number(localStorage.exp) + 10 + Number(localStorage.remort);
}else{
	hurtflag = 0;
}


	// Throw the monster somewhere on the screen randomly
		if (Number(localStorage.exp)>1900){
		localStorage.remort = Number(localStorage.remort) + 1;
		localStorage.caught=0;
		localStorage.exp=0;
		localStorage.speed=100;
		localStorage.hp = 100 + Number(localStorage.remort) * 10;
		if (Math.random() * (4)==1){
		var monsterp = new monster(32 + (Math.random() * (430)),32 + (Math.random() * (430)),25*Number(localStorage.caught)/50);
		thinglist.push(monsterp);
		}
	}
    var monsterp = new monster(32 + (Math.random() * (430)),32 + (Math.random() * (430)),20*Number(localStorage.caught)/50);
	thinglist.push(monsterp);
	hero.speed = localStorage.speed;
	
};

// Update game objects
var update = function (modifier) {
	if (Number(localStorage.hp) <= 0){

		localStorage.hp = maxhp;
		if (Number(localStorage.remort) !=0){
		localStorage.remort = Number(localStorage.remort) - 1;
		}
	}
	
	if (65 in keysDown) {
		netp=1;
	}
	else if (68 in keysDown) {
		netp=2;
	}
	else if (87 in keysDown) {
		netp=3;
	}
	else if (83 in keysDown) {
		netp=4;	
	}
	for(i = 0; i < map.length; i++){
		for(j = 0; j < map[i].length; j++){
			if(map[i][j] == 0){
				var px = i*64;
				var py = i*64;
				if(
				py <= hero.y &&
				px <= hero.x + 32 &&
				px + 64 >= hero.x){
					dstop = true;
				}
				if(
				py + 64 >= hero.y &&
				px <= hero.x + 32 &&
				px + 64 >= hero.x)
				{
					ustop = true;
				}
				if(
				px <= hero.x &&
				py <= hero.y + 32 &&
				py + 64 >= hero.y
				){
					rstop = true;
				}
				if(
				px + 64 >= hero.x &&
				py <= hero.y + 32 &&
				py + 64 >= hero.y
				){
					lstop = true;
				}
			}
		}
	}
	if (38 in keysDown) { // Player holding up
		if (!ustop){
		hero.y -= 2*hero.speed/3 * modifier;
		dstop = false;
		}
		
	}
	if (40 in keysDown) { // Player holding down
		if (!dstop){
		hero.y += 2*hero.speed/3 * modifier;
		ustop = false;
		}
	}
	if (37 in keysDown) { // Player holding left
	 	if (!lstop){
		hero.x -= 2*hero.speed/3 * modifier;
		rstop = false;
		}
	}
	if (39 in keysDown) { // Player holding right
		if (!rstop){
		hero.x += 2*hero.speed/3 * modifier;
		lstop = false;
		}
	}
	if (13 in keysDown && localStorage.name == "player") { //player pressed enter
		state = 1;
		localStorage.name = inputString;
	}


	
	for	(var index = 0; index < thinglist.length; index++) {
			if (thinglist[index].name == "potion"&&
		hero.x <= (thinglist[index].x + 32)
		&& thinglist[index].x <= (hero.x + 32)
		&& hero.y <= (thinglist[index].y + 32)
		&& thinglist[index].y <= (hero.y + 32)
	){
		thinglist.splice(index,1);
		localStorage.mihps = Number(localStorage.mihps) + 1;
	}
		if (thinglist[index].name == "monster"
	){
		var random = Math.floor((Math.random() * 4) + 1);
		var mflag = 0;
		switch(netp){
		case 1:
		if (
		hero.x <= (thinglist[index].x + 64)
		&& thinglist[index].x + 64<= (hero.x + 32)
		&& hero.y <= (thinglist[index].y + 32)
		&& thinglist[index].y <= (hero.y + 32)) {
		var random = Math.floor((Math.random() * 30) + 1);
		if (random == 1){
		thinglist.push(new potion(thinglist[index].x,thinglist[index].y));
		}
		localStorage.monstersCaught=Number(localStorage.monstersCaught) + 1;
		localStorage.caught=Number(localStorage.caught) + 1;
		thinglist.splice(index,1);
		mflag = 1;
		resets();
	}
		break;
		
		case 2:
		if (
		hero.x + 64 <= (thinglist[index].x + 32)
		&& thinglist[index].x <= (hero.x + 64)
		&& hero.y <= (thinglist[index].y + 32)
		&& thinglist[index].y <= (hero.y + 32)) {
		var random = Math.floor((Math.random() * 30) + 1);
		if (random == 1){
		thinglist.push(new potion(thinglist[index].x,thinglist[index].y));
		}	
		localStorage.monstersCaught=Number(localStorage.monstersCaught) + 1;
		localStorage.caught=Number(localStorage.caught) + 1;
		thinglist.splice(index,1);
		mflag = 1;
		resets();
	}
		break;
		
		case 3:
				if (
		hero.x <= (thinglist[index].x + 32)
		&& thinglist[index].x <= (hero.x + 32)
		&& hero.y - 32  <= (thinglist[index].y + 32)
		&& thinglist[index].y <= (hero.y - 32)) {
		var random = Math.floor((Math.random() * 30) + 1);
		if (random == 1){
		thinglist.push(new potion(thinglist[index].x,thinglist[index].y));
		}	
		localStorage.monstersCaught=Number(localStorage.monstersCaught) + 1;
		localStorage.caught=Number(localStorage.caught) + 1;
		thinglist.splice(index,1);
		mflag = 1;
		resets();
	}
		break;
		
		case 4:
		if (
		hero.x <= (thinglist[index].x + 32)
		&& thinglist[index].x <= (hero.x + 32)
		&& hero.y + 64 <= (thinglist[index].y + 32)
		&& thinglist[index].y <= (hero.y + 64)) {
		var random = Math.floor((Math.random() * 30) + 1);
		if (random == 1){
		thinglist.push(new potion(thinglist[index].x,thinglist[index].y));
		}			
		localStorage.monstersCaught=Number(localStorage.monstersCaught) + 1;
		localStorage.caught=Number(localStorage.caught) + 1;
		thinglist.splice(index,1);
		mflag = 1;
		resets();
	}		break;
	}
	if(mflag == 0){
	if (hero.x <= (thinglist[index].x + 32)
		&& thinglist[index].x <= (hero.x + 32)
		&& hero.y <= (thinglist[index].y + 32)
		&& thinglist[index].y <= (hero.y + 32)) {
		localStorage.hp = localStorage.hp - 5;
		hurtflag = 1;
		thinglist.splice(index,1);
		mflag = 1;
		resets();
	}}
	if(mflag == 0){
	if (random == 1){
	if (thinglist[index].x <=440){
		thinglist[index].x += thinglist[index].speed;
		}
	}
	else if (random == 2){
	if (thinglist[index].y <=430){
		thinglist[index].y += thinglist[index].speed;
		}
	}
	else if (random == 3){
	if (thinglist[index].x >=30){
		thinglist[index].x -= thinglist[index].speed;
		}
	}
	else if (random == 4){
	if (thinglist[index].y >= 50){
		thinglist[index].y -= thinglist[index].speed;
		}
		
	}
	}
	} // end of if name is monster
	
	
	}
	if (stuffNum == 0 && inputString.length < 7 && state==2 && localStorage.name == "player"){
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

};

// Bullets
var moveBullets = function () {
	
	
}

// Draw everything
var render = function () {
	var xdifference = 256 - hero.x;
	var ydifference = 260 - hero.y;
	ctx.fillStyle="#000000";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	for(var index = 0; index < map.length; index++){
		for(var jindex = 0; jindex < map[index].length; jindex++){
		if(map[index][jindex] == 1){
			ctx.drawImage(grass1Image, index * 32 + xdifference, jindex * 32 + ydifference);				
		}
			
		}
	}
	/*
	if (bgReady) {
		ctx.drawImage(bgImage, 0 + xdifference, 20 + ydifference);
	}
	
	for	(var index = 0; index < thinglist.length; index++) {
			if(thinglist[index].name == "potion"){
			ctx.drawImage(mihpImage, thinglist[index].x + xdifference, thinglist[index].y + ydifference);				
		}
			else if(thinglist[index].name == "shell"){
				ctx.drawImage(shellImage, thinglist[index].x + xdifference, thinglist[index].y + ydifference);	
			}
			else if(thinglist[index].name == "monster"){
				ctx.drawImage(monsterImage, thinglist[index].x + xdifference, thinglist[index].y + ydifference);	
			}
	}
	
	*/
	switch(netp){
		case 1:
		ctx.drawImage(lnetImage, hero.x-32 + xdifference, hero.y + ydifference);
		break;
		
		case 2:
		ctx.drawImage(rnetImage, hero.x+32 + xdifference, hero.y + ydifference);
		break;
		
		case 3:
		ctx.drawImage(unetImage, hero.x + xdifference, hero.y-32 + ydifference);
		break;
		
		case 4:
		ctx.drawImage(dnetImage, hero.x + xdifference, hero.y+32 + ydifference);
		break;
	}
	if (tbReady) {
		ctx.drawImage(tbImage, 512, 0);
	}
	
	if (tbReady) {
		ctx.drawImage(tbImage, 612, 0);
	}
	
	if (spdReady) {
		ctx.drawImage(spdImage, 515, 150);
	}
	 
	if (heroReady) {
		ctx.drawImage(heroImage, 256, 260);
	}
	
	if (monsterReady) {
		ctx.drawImage(monsterImage, 515, 190);
	}
	
	if (mihpReady) {
		ctx.drawImage(mihpImage, 515, 240);
	}
	
	if (optReady) {
		ctx.drawImage(optImage, 516, 10);
	}
	
	if (invReady) {
		ctx.drawImage(invImage, 630, 30);
	}
	
	if (invReady) {
		ctx.drawImage(invImage, 630, 100);
	}

	if (invReady) {
		ctx.drawImage(invImage, 630, 170);
	}

	if (invReady) {
		ctx.drawImage(invImage, 630, 240);
	}

	if (invReady) {
		ctx.drawImage(invImage, 630, 310);
	}

	if (invReady) {
		ctx.drawImage(invImage, 630, 380);
	}	

	// Score


	var health=Number(localStorage.exp);
	ctx.fillStyle="#a3a3c2";
	ctx.fillRect(0,0,512,20);
	ctx.fillStyle="#008ae6";
	ctx.fillRect(0,0,(health/1900)*512,20);
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Arial";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillStyle="#b30000";
	ctx.fillRect(517,100,90,30);
	ctx.fillStyle="#00cc00";
        maxhp = 100 + Number(localStorage.remort)*10;
	ctx.fillRect(517,100,(Number(localStorage.hp)/maxhp)*90,30);
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "20px Arial";
	maxhp = 100 + Number(localStorage.remort)*10;
	ctx.fillText(localStorage.name.toUpperCase(), 517, 50);
	ctx.textAlign = "right";
	ctx.textBaseline = "top";
	ctx.fillStyle = "#000000";
	ctx.font = "20px Arial";
	ctx.fillText("" + localStorage.remort, 256, 0);
	ctx.fillText("" + hero.speed, 600, 160);
	ctx.fillText("" + localStorage.monstersCaught, 600, 210);
	ctx.fillText("" + localStorage.mihps, 600, 250);
	ctx.font = "10px Arial";
	ctx.fillText(localStorage.hp + "/" + maxhp, 590, 110);
};
var renderx = function () {
	ctx.fillStyle="#558000";
	ctx.drawImage(TitleImage,0,0);
};
var renderN = function() {
	if (nameReady) {
        ctx.drawImage(nameImage,0, 0);
        }
	ctx.fillStyle='black';
	ctx.font = "48px Arial";
	ctx.textAlign = "center";
	ctx.fillText(inputString.toUpperCase(),356,225);
};

// The main game loop
var main = function () {
	netp = 0;
	switch(state){
	case 1:
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;
	
	// Request to do this again ASAP
	requestAnimationFrame(main);
	
	break;
	case 2:
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	renderN();

	then = now;
	
	// Request to do this again ASAP
	requestAnimationFrame(main);
	
	break;
	case 3:
	
	renderx();

	// Request to do this again ASAP
	requestAnimationFrame(main);
	break;
	
	
	}
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
generatemap();
var then = Date.now();
reset();
main();

