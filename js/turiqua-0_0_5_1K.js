// Create the canvas
/**
 * Last worked on:
 * ###### Thurs Jan 5 09:06:40 PST 2016
 * By nautknth
 */
var walkable = [12000,12001,12002,12003,12004,11000,11001,11002,11003,11004,11005,11006];
var unwalkable = [12500,12501,12502,12503,12504,12505,0];
var map = new Array(50); 
var rstop = false;
var lstop = false;
var ustop = false;
var dstop = false;
var atinv = false;
var invvalue = 0;
var ded = false;
var selcarmor = false;
var realthinglist = [];
var herosetx = 450;
var herosety = 274;
var px;
var clicked; //used to see if canvas has been clicked at all
var py;
var matrix;
var hurtflag = 0;
var thinglist = [];
var monsterlist = []
var maxhp;
var state = 3;
var netp;
var dragflag;
var bulletlist = [];
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var stuffNum = 0;
var invselect = 0;
var inv = [];
var spawnflag;
var hpcode = 80;
canvas.width = 1100;
canvas.height = 600;
document.body.appendChild(canvas);
//---------------------------------------
//KENNY'S EXTRAS!!!----------------------
//making sure of support for Object.keys()
if (!Object.keys) {
    Object.keys = function (object) {
        var keys = [];

        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
    }
}
//quickly generate an array:

/**
 * kne is a set of kne's extra stuff which isn't too useful.
 */
var kne = {
    /**
     * Returns an array from (from) to (to)
     * @param {integer} from the number to start the array with
     * @param {integer} to the number to end the array with
     */
    arrayFromTo: function (from, to) {if(from>to)return kne.arrayFromTo(to, from);for(var a=[],b=(to-from);b>0;a[--b]=b+from);return(a);},
    /**
     * Returns an array from 0 to (to)
     * @param {integer} to the number to end the array with
     */
    arrayTo: function (to) {for(var a=[],b=(to);b>0;a[--b]=b);return(a);},
    /**
     * Does absolutely nothing
     */
    doNothing: function () {},
    /**
     * Returns whether a value is in an array
     * @param {String} val the value to search for
     * @param {Array} array the array to be searched in
     */
    inArray: function (val, array){return array.indexOf(val) == -1 ? false: true;},
    canvasButton: function(x,y,width,height,onClick){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.left = this.x;
        this.right = this.x + this.width;
        this.top = this.y;
        this.bot = this.y+this.height;
        this.onClick = onClick;
    }
}


// LOADING STUFF

//ORCS
var orc1Ready = false;
var orc1Image = new Image();
orc1Image.onload = function () {
	orc1Ready = true;
};
orc1Image.src = "images/orc_1.png";

var orc2Ready = false;
var orc2Image = new Image();
orc2Image.onload = function () {
	orc2Ready = true;
};
orc2Image.src = "images/orc_0.png";

var orc3Ready = false;
var orc3Image = new Image();
orc3Image.onload = function () {
	orc3Ready = true;
};
orc3Image.src = "images/orc_2.png";


var troll1Ready = false;
var troll1Image = new Image();
troll1Image.onload = function () {
	troll1Ready = true;
};
troll1Image.src = "images/troll_1.png";

var troll2Ready = false;
var troll2Image = new Image();
troll2Image.onload = function () {
	troll2Ready = true;
};
troll2Image.src = "images/troll_0.png";

var troll3Ready = false;
var troll3Image = new Image();
troll3Image.onload = function () {
	troll3Ready = true;
};
troll3Image.src = "images/troll_2.png";



//MONSTER BULLETS
var mbullet1Ready = false;
var mbullet1Image = new Image();
mbullet1Image.onload = function () {
	mbullet1Ready = true;
};
mbullet1Image.src = "images/orcbullet_0.png";
var mbullet2Ready = false;
var mbullet2Image = new Image();
mbullet2Image.onload = function () {
	mbullet2Ready = true;
};
mbullet2Image.src = "images/orcbullet_1.png";
var mbullet3Ready = false;
var mbullet3Image = new Image();
mbullet3Image.onload = function () {
	mbullet3Ready = true;
};
mbullet1Image.src = "images/trollbullet_0.png";
var mbullet4Ready = false;
var mbullet4Image = new Image();
mbullet4Image.onload = function () {
	mbullet4Ready = true;
};
mbullet4Image.src = "images/trollbullet_1.png";

//UR BULLETS
var sword1Ready = false;
var sword1Image = new Image();
sword1Image.onload = function () {
	sword1Ready = true;
};
sword1Image.src = "images/sword_00.png";

var sword2Ready = false;
var sword2Image = new Image();
sword2Image.onload = function () {
	sword2Ready = true;
};
sword2Image.src = "images/sword_01.png";

var sword3Ready = false;
var sword3Image = new Image();
sword3Image.onload = function () {
	sword3Ready = true;
};
sword3Image.src = "images/sword_02.png";
var sword4Ready = false;
var sword4Image = new Image();
sword4Image.onload = function () {
	sword4Ready = true;
};
sword4Image.src = "images/sword_03.png";

var sword5Ready = false;
var sword5Image = new Image();
sword5Image.onload = function () {
	sword5Ready = true;
};
sword5Image.src = "images/sword_04.png";

var sword6Ready = false;
var sword6Image = new Image();
sword6Image.onload = function () {
	sword6Ready = true;
};
sword6Image.src = "images/sword_05.png";
var sword7Ready = false;
var sword7Image = new Image();
sword7Image.onload = function () {
	sword7Ready = true;
};
sword7Image.src = "images/sword_06.png";

var sword8Ready = false;
var sword8Image = new Image();
sword8Image.onload = function () {
	sword8Ready = true;
};
sword8Image.src = "images/sword_07.png";

var sword9Ready = false;
var sword9Image = new Image();
sword9Image.onload = function () {
	sword9Ready = true;
};
sword9Image.src = "images/sword_08.png";
var sword10Ready = false;
var sword10Image = new Image();
sword10Image.onload = function () {
	sword10Ready = true;
};
sword10Image.src = "images/sword_09.png";

var sword11Ready = false;
var sword11Image = new Image();
sword11Image.onload = function () {
	sword11Ready = true;
};
sword11Image.src = "images/sword_10.png";

var sword12Ready = false;
var sword12Image = new Image();
sword12Image.onload = function () {
	sword12Ready = true;
};
sword12Image.src = "images/sword_11.png";
var sword13Ready = false;
var sword13Image = new Image();
sword13Image.onload = function () {
	sword13Ready = true;
};
sword13Image.src = "images/sword_12.png";
var sword14Ready = false;
var sword14Image = new Image();
sword14Image.onload = function () {
	sword14Ready = true;
};
sword14Image.src = "images/sword_13.png";
var sword15Ready = false;
var sword15Image = new Image();
sword15Image.onload = function () {
	sword15Ready = true;
};
sword15Image.src = "images/sword_14.png";
var sword16Ready = false;
var sword16Image = new Image();
sword16Image.onload = function () {
	sword16Ready = true;
};
sword16Image.src = "images/sword_15.png";
var sword17Ready = false;
var sword17Image = new Image();
sword17Image.onload = function () {
	sword17Ready = true;
};
sword17Image.src = "images/sword_16.png";
var sword18Ready = false;
var sword18Image = new Image();
sword18Image.onload = function () {
	sword18Ready = true;
};
sword18Image.src = "images/sword_17.png";
var sword19Ready = false;
var sword19Image = new Image();
sword19Image.onload = function () {
	sword19Ready = true;
};
sword19Image.src = "images/sword_18.png";
var sword20Ready = false;
var sword20Image = new Image();
sword20Image.onload = function () {
	sword20Ready = true;
};
sword20Image.src = "images/sword_19.png";
var sword21Ready = false;
var sword21Image = new Image();
sword21Image.onload = function () {
	sword21Ready = true;
};
sword21Image.src = "images/sword_20.png";
var sword22Ready = false;
var sword22Image = new Image();
sword22Image.onload = function () {
	sword22Ready = true;
};
sword22Image.src = "images/sword_21.png";
var sword23Ready = false;
var sword23Image = new Image();
sword23Image.onload = function () {
	sword23Ready = true;
};
sword23Image.src = "images/sword_22.png";
var sword24Ready = false;
var sword24Image = new Image();
sword24Image.onload = function () {
	sword24Ready = true;
};
sword24Image.src = "images/sword_23.png";
var sword25Ready = false;
var sword25Image = new Image();
sword25Image.onload = function () {
	sword25Ready = true;
};
sword25Image.src = "images/sword_24.png";
var sword26Ready = false;
var sword26Image = new Image();
sword26Image.onload = function () {
	sword26Ready = true;
};
sword26Image.src = "images/sword_25.png";
var sword27Ready = false;
var sword27Image = new Image();
sword27Image.onload = function () {
	sword27Ready = true;
};
sword27Image.src = "images/sword_26.png";
var sword28Ready = false;
var sword28Image = new Image();
sword28Image.onload = function () {
	sword28Ready = true;
};
sword28Image.src = "images/sword_27.png";
var sword29Ready = false;
var sword29Image = new Image();
sword29Image.onload = function () {
	sword29Ready = true;
};
sword29Image.src = "images/sword_28.png";
var sword30Ready = false;
var sword30Image = new Image();
sword30Image.onload = function () {
	sword30Ready = true;
};
sword30Image.src = "images/sword_29.png";


//ARMOR
var armor1Ready = false;
var armor1Image = new Image();
armor1Image.onload = function () {
	armor1Ready = true;
};
armor1Image.src = "images/armor_00.png";

var armor2Ready = false;
var armor2Image = new Image();
armor2Image.onload = function () {
	armor2Ready = true;
};
armor2Image.src = "images/armor_01.png";

var armor3Ready = false;
var armor3Image = new Image();
armor3Image.onload = function () {
	armor3Ready = true;
};
armor3Image.src = "images/armor_02.png";
var armor4Ready = false;
var armor4Image = new Image();
armor4Image.onload = function () {
	armor4Ready = true;
};
armor4Image.src = "images/armor_03.png";

var armor5Ready = false;
var armor5Image = new Image();
armor5Image.onload = function () {
	armor5Ready = true;
};
armor5Image.src = "images/armor_04.png";

var armor6Ready = false;
var armor6Image = new Image();
armor6Image.onload = function () {
	armor6Ready = true;
};
armor6Image.src = "images/armor_05.png";
var armor7Ready = false;
var armor7Image = new Image();
armor7Image.onload = function () {
	armor7Ready = true;
};
armor7Image.src = "images/armor_06.png";

var armor8Ready = false;
var armor8Image = new Image();
armor8Image.onload = function () {
	armor8Ready = true;
};
armor8Image.src = "images/armor_07.png";

var armor9Ready = false;
var armor9Image = new Image();
armor9Image.onload = function () {
	armor9Ready = true;
};
armor9Image.src = "images/armor_08.png";
var armor10Ready = false;
var armor10Image = new Image();
armor10Image.onload = function () {
	armor10Ready = true;
};
armor10Image.src = "images/armor_09.png";

var armor11Ready = false;
var armor11Image = new Image();
armor11Image.onload = function () {
	armor11Ready = true;
};
armor11Image.src = "images/armor_10.png";

var armor12Ready = false;
var armor12Image = new Image();
armor12Image.onload = function () {
	armor12Ready = true;
};
armor12Image.src = "images/armor_11.png";
var armor13Ready = false;
var armor13Image = new Image();
armor13Image.onload = function () {
	armor13Ready = true;
};
armor13Image.src = "images/armor_12.png";
var armor14Ready = false;
var armor14Image = new Image();
armor14Image.onload = function () {
	armor14Ready = true;
};
armor14Image.src = "images/armor_13.png";
var armor15Ready = false;
var armor15Image = new Image();
armor15Image.onload = function () {
	armor15Ready = true;
};
armor15Image.src = "images/armor_14.png";
var armor16Ready = false;
var armor16Image = new Image();
armor16Image.onload = function () {
	armor16Ready = true;
};
armor16Image.src = "images/armor_15.png";
var armor17Ready = false;
var armor17Image = new Image();
armor17Image.onload = function () {
	armor17Ready = true;
};
armor17Image.src = "images/armor_16.png";
var armor18Ready = false;
var armor18Image = new Image();
armor18Image.onload = function () {
	armor18Ready = true;
};
armor18Image.src = "images/armor_17.png";
var armor19Ready = false;
var armor19Image = new Image();
armor19Image.onload = function () {
	armor19Ready = true;
};
armor19Image.src = "images/armor_18.png";
var armor20Ready = false;
var armor20Image = new Image();
armor20Image.onload = function () {
	armor20Ready = true;
};
armor20Image.src = "images/armor_19.png";
var armor21Ready = false;
var armor21Image = new Image();
armor21Image.onload = function () {
	armor21Ready = true;
};
armor21Image.src = "images/armor_20.png";
var armor22Ready = false;
var armor22Image = new Image();
armor22Image.onload = function () {
	armor22Ready = true;
};
armor22Image.src = "images/armor_21.png";
var armor23Ready = false;
var armor23Image = new Image();
armor23Image.onload = function () {
	armor23Ready = true;
};
armor23Image.src = "images/armor_22.png";
var armor24Ready = false;
var armor24Image = new Image();
armor24Image.onload = function () {
	armor24Ready = true;
};
armor24Image.src = "images/armor_23.png";
var armor25Ready = false;
var armor25Image = new Image();
armor25Image.onload = function () {
	armor25Ready = true;
};
armor25Image.src = "images/armor_24.png";
var armor26Ready = false;
var armor26Image = new Image();
armor26Image.onload = function () {
	armor26Ready = true;
};
armor26Image.src = "images/armor_25.png";
var armor27Ready = false;
var armor27Image = new Image();
armor27Image.onload = function () {
	armor27Ready = true;
};
armor27Image.src = "images/armor_26.png";
var armor28Ready = false;
var armor28Image = new Image();
armor28Image.onload = function () {
	armor28Ready = true;
};
armor28Image.src = "images/armor_27.png";
var armor29Ready = false;
var armor29Image = new Image();
armor29Image.onload = function () {
	armor29Ready = true;
};
armor29Image.src = "images/armor_28.png";
var armor30Ready = false;
var armor30Image = new Image();
armor30Image.onload = function () {
	armor30Ready = true;
};
armor30Image.src = "images/armor_29.png";
var armor31Ready = false;
var armor31Image = new Image();
armor31Image.onload = function () {
	armor31Ready = true;
};
armor31Image.src = "images/armor_30.png";
var armor32Ready = false;
var armor32Image = new Image();
armor32Image.onload = function () {
	armor32Ready = true;
};
armor32Image.src = "images/armor_31.png";
var armor33Ready = false;
var armor33Image = new Image();
armor33Image.onload = function () {
	armor33Ready = true;
};
armor33Image.src = "images/armor_32.png";



// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";
// Stone image
var stoneReady = false;
var stoneImage = new Image();
stoneImage.onload = function () {
	stoneReady = true;
};
stoneImage.src = "images/stone.png";
var grass0Ready = false;
var grass0Image = new Image();
grass0Image.onload = function () {
	grass0Ready = true;
};
grass0Image.src = "images/grass_0.png";
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
var grass4Ready = false;
var grass4Image = new Image();
grass4Image.onload = function () {
	grass4Ready = true;
};
grass4Image.src = "images/grass_4.png";
var grass5Ready = false;
var grass5Image = new Image();
grass5Image.onload = function () {
	grass5Ready = true;
};
grass5Image.src = "images/grass_5.png";

var ruin1Ready = false;
var ruin1Image = new Image();
ruin1Image.onload = function () {
	ruin1Ready = true;
};
ruin1Image.src = "images/ruin_00.png";
var ruin2Ready = false;
var ruin2Image = new Image();
ruin2Image.onload = function () {
	ruin2Ready = true;
};
ruin2Image.src = "images/ruin_01.png";
var ruin3Ready = false;
var ruin3Image = new Image();
ruin3Image.onload = function () {
	ruin3Ready = true;
};
ruin3Image.src = "images/ruin_02.png";
var ruin4Ready = false;
var ruin4Image = new Image();
ruin4Image.onload = function () {
	ruin4Ready = true;
};
ruin4Image.src = "images/ruin_03.png";
var ruin5Ready = false;
var ruin5Image = new Image();
ruin5Image.onload = function () {
	ruin5Ready = true;
};
ruin5Image.src = "images/ruin_04.png";
var ruin6Ready = false;
var ruin6Image = new Image();
ruin6Image.onload = function () {
	ruin6Ready = true;
};
ruin6Image.src = "images/ruin_05.png";
var rfloor1Ready = false;
var rfloor1Image = new Image();
rfloor1Image.onload = function () {
	rfloor1Ready = true;
};
rfloor1Image.src = "images/ruin_07.png";
var rfloor2Ready = false;
var rfloor2Image = new Image();
rfloor2Image.onload = function () {
	rfloor2Ready = true;
};
rfloor2Image.src = "images/ruin_08.png";
var rfloor3Ready = false;
var rfloor3Image = new Image();
rfloor3Image.onload = function () {
	rfloor3Ready = true;
};
rfloor3Image.src = "images/ruin_09.png";
var rfloor4Ready = false;
var rfloor4Image = new Image();
rfloor4Image.onload = function () {
	rfloor4Ready = true;
};
rfloor4Image.src = "images/ruin_10.png";
var rfloor5Ready = false;
var rfloor5Image = new Image();
rfloor5Image.onload = function () {
	rfloor5Ready = true;
};
rfloor5Image.src = "images/ruin_11.png";



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
var frontReady = false;
var frontImage = new Image();
frontImage.onload = function () {
	frontReady = true;
};
frontImage.src = "images/frontmage.png";
var backReady = false;
var backImage = new Image();
backImage.onload = function () {
	backReady = true;
};
backImage.src = "images/backmage.png";
var rsideReady = false;
var rsideImage = new Image();
rsideImage.onload = function () {
	rsideReady = true;
};
rsideImage.src = "images/rsidemage.png";
var lsideReady = false;
var lsideImage = new Image();
lsideImage.onload = function () {
	lsideReady = true;
};
lsideImage.src = "images/lsidemage.png";
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
var bagReady = false;
var bagImage = new Image();
bagImage.onload = function () {
	bagReady = true;
};
bagImage.src = "images/bag.png";
var coinReady = false;
var coinImage = new Image();
coinImage.onload = function () {
	coinReady = true;
};
coinImage.src = "images/coin.png";
var empty1Ready = false;
var empty1Image = new Image();
empty1Image.onload = function () {
	empty1Ready = true;
};
empty1Image.src = "images/empty.png";

var selcweapon = false;



//END OF LOADING STUFF

var inventory = [];






var gold = 0;

// Game objects
function thing(x,y,ininv){
	this.x = x;
	this.y = y;
	this.ininv = ininv;
	this.id = "thing";
	this.tohit = 0;
	this.todam = 0;
	this.icon = sword1Image;
	this.ac = 0;
	this.con = 0;
	this.dex = 0;
	this.str = 0;
	this.wis = 0;
	this.intel = 0;
	this.charis = 0;
	this.plusac = 0;
}

//ARMOR
function armor(x,y,ininv){
	thing.call(this,x,y,ininv);
	this.id = "armor";
	this.brand;
	this.ex = 0;
	this.price = 50;
}
armor._proto_ = thing;

	function empty(){
		armor.call(this,0,0,true);
		this.ac = 0;
		this.plusac = 0;
		this.price = 0;
		this.id = "delete";
		this.icon = empty1Image;
	};

function avleatherarmor(x,y,ininv){
	armor.call(this,x,y,ininv);
	this.name = "Leather Armor";
	this.ac = 2;
	this.price = 50;
	this.icon = armor1Image;
}
avleatherarmor._proto_ = armor;

function goodleatherarmor(x,y,ininv){
	avleatherarmor.call(this,x,y,ininv);
	this.plusac = (Math.floor(Math.random() * (6)+1))*(Math.floor(Math.random() * (hero.remort-1+2)+1));
	this.icon = armor2Image;
}
goodleatherarmor._proto_ = avleatherarmor;

function exleatherarmor(x,y,ininv){
	goodleatherarmor.call(this,x,y,ininv);
	var randbrand = (Math.floor(Math.random() * (5-1)+1));
	switch(randbrand){
		
		case 1:
		this.brand = 'ice';
		break;
		case 2:
		this.brand = 'fire';
		break;
		case 3:
		this.brand = 'lightning';
		break;
		case 4:
		this.brand = 'acid';
		break;
		default:
		this.brand = 'fire';
		
	}
	this.ex = 1;
	this.icon = armor3Image;
}
exleatherarmor._proto_ = goodleatherarmor;

function avstdleatherarmor(x,y,ininv){
	armor.call(this,x,y,ininv);
	this.name = "Leather Armor";
	this.ac = 5;
	this.price = 100;
	this.icon = armor4Image;
}
avstdleatherarmor._proto_ = armor;

function goodstdleatherarmor(x,y,ininv){
	avstdleatherarmor.call(this,x,y,ininv);
	this.plusac = (Math.floor(Math.random() * (6)+1))*(Math.floor(Math.random() * (hero.remort-1+2)+1));
	this.icon = armor5Image;
}
goodstdleatherarmor._proto_ = avstdleatherarmor;

function exstdleatherarmor(x,y,ininv){
	goodstdleatherarmor.call(this,x,y,ininv);
	var randbrand = (Math.floor(Math.random() * (5-1)+1));
	switch(randbrand){
		
		case 1:
		this.brand = 'ice';
		break;
		case 2:
		this.brand = 'fire';
		break;
		case 3:
		this.brand = 'lightning';
		break;
		case 4:
		this.brand = 'acid';
		break;
		default:
		this.brand = 'fire';
		
	}
	this.ex = 1;
	this.icon = armor6Image;
}
exstdleatherarmor._proto_ = goodstdleatherarmor;

function avmailarmor(x,y,ininv){
	armor.call(this,x,y,ininv);
	this.name = "Mail Armor";
	this.ac = 12;
	this.price = 1000;
	this.icon = armor7Image;
}
avmailarmor._proto_ = armor;

function goodmailarmor(x,y,ininv){
	avmailarmor.call(this,x,y,ininv);
	this.plusac = (Math.floor(Math.random() * (6)+1))*(Math.floor(Math.random() * (hero.remort-1+2)+1));
	this.icon = armor8Image;
}
goodmailarmor._proto_ = avmailarmor;

function exmailarmor(x,y,ininv){
	goodmailarmor.call(this,x,y,ininv);
	var randbrand = (Math.floor(Math.random() * (5-1)+1));
	switch(randbrand){
		
		case 1:
		this.brand = 'ice';
		break;
		case 2:
		this.brand = 'fire';
		break;
		case 3:
		this.brand = 'lightning';
		break;
		case 4:
		this.brand = 'acid';
		break;
		default:
		this.brand = 'fire';
		
	}
	this.ex = 1;
	this.icon = armor9Image;
}
exmailarmor._proto_ = goodmailarmor;
//WEAPON
function weapon(x,y,ininv,damage){
	thing.call(this,x,y,ininv);
	this.damage = damage;
	this.id = "weapon";
	this.brand;
	this.ex = 0;
}
weapon._proto_ = thing;

function avwoodsword(x,y,ininv){
	weapon.call(this,x,y,ininv,20);
	this.price = 50;
	this.icon = sword1Image;
	this.name = "Wooden Sword"
	this.damage = 10;
}
avwoodsword._proto_ = weapon;

function goodwoodsword(x,y,ininv){
	avwoodsword.call(this,x,y,ininv);

	this.tohit = (Math.floor(Math.random() * (6)+1))*(Math.floor(Math.random() * (hero.remort-1+2)+1));
	this.todam = (Math.floor(Math.random() * (6)+1))*(Math.floor(Math.random() * (hero.remort-1+2)+1));
	this.icon = sword2Image;
}
goodwoodsword._proto_ = avwoodsword;
function exwoodsword(x,y,ininv){
	goodwoodsword.call(this,x,y,ininv);
	this.brand;
	
	var randbrand = (Math.floor(Math.random() * (5-1)+1));
	switch(randbrand){
		
		case 1:
		this.brand = 'ice';
		break;
		case 2:
		this.brand = 'fire';
		break;
		case 3:
		this.brand = 'lightning';
		break;
		case 4:
		this.brand = 'acid';
		break;
		default:
		this.brand = 'fire';
		
	}
	this.icon = sword3Image;
	this.ex = 1;
	//console.log(this.ex);
}
exwoodsword._proto_ = goodwoodsword;
function avshortsword(x,y,ininv){
	weapon.call(this,x,y,ininv,20);
	this.price = 100;
	this.icon = sword4Image;
	this.name = "Short Sword"
	this.damage = 20;
}
avshortsword._proto_ = weapon;

function goodshortsword(x,y,ininv){
	avshortsword.call(this,x,y,ininv);

	this.tohit = (Math.floor(Math.random() * (6)+1))*(Math.floor(Math.random() * (hero.remort-1+2)+1));
	this.todam = (Math.floor(Math.random() * (6)+1))*(Math.floor(Math.random() * (hero.remort-1+2)+1));
	this.icon = sword5Image;
}
goodshortsword._proto_ = avshortsword;
function exshortsword(x,y,ininv){
	goodshortsword.call(this,x,y,ininv);
	this.brand;
	
	var randbrand = (Math.floor(Math.random() * (5-1)+1));
	switch(randbrand){
		
		case 1:
		this.brand = 'ice';
		break;
		case 2:
		this.brand = 'fire';
		break;
		case 3:
		this.brand = 'lightning';
		break;
		case 4:
		this.brand = 'acid';
		break;
		default:
		this.brand = 'fire';
		
	}
	this.icon = sword6Image;
	this.ex = 1;
	//console.log(this.ex);
}
exshortsword._proto_ = goodshortsword;



var bullet = function(bx,by,ex,ey,spd,life){
	this.inc = spd;
	this.xD = (ex-bx);
	this.yD = (ey-by);
	this.A = Math.atan(this.yD/this.xD);
	this.B = this.A
	this.xInc = this.inc*Math.cos(this.A);
	this.yInc = this.inc*Math.sin(this.A);
	if(isNegative(ex-bx)){
		this.xInc = -1*this.xInc;
		this.yInc = -1*this.yInc;
		this.B *= -1;
	}
	this.icon = sword1Image;
	this.life = 0;
	this.death = life;
	this.ex = ex;
	this.ey = ey;
	this.arrived = false;
	this.x = bx;
	this.y = by;
	this.bx = bx;
	this.by = by;
	this.name = "bullet";
	//console.log(this.ex,this.ey,this.xD,this.yD,this.A,this.xInc,this.yInc,this.x,this.y);

}
var orcbullet = function(bx,by,ex,ey){
	bullet.call(this,bx,by,ex,ey,300,50);
	this.icon = mbullet1Image;
	this.name = "orcbullet";
	this.damage = 20;
}
orcbullet._proto_ = bullet;
var orcmbullet = function(bx,by,ex,ey){
	bullet.call(this,bx,by,ex,ey,700,130);
	this.icon = mbullet2Image;
	this.name = "orcmbullet";
	this.damage = 10;
}
orcmbullet._proto_ = bullet;



function monster(x,y,hp,speed){
	this.x = x;
	this.y = y;
	this.hp = hp;
	this.maxhp = hp;
	this.speed = speed;
	this.range = 500;
	this.name = "monster";
	this.shootdelay = 0;
	this.shoot = function(){};
	this.move = function(modifier){
		if(Math.sqrt(Math.pow(hero.x-this.x,2)+Math.pow(hero.y-this.y,2))<this.range){
				this.xD = (this.x-hero.x);
				this.yD = (this.y-hero.y);
				this.A = Math.atan(this.yD/this.xD);
				this.B = this.A;
				this.xInc = this.speed*Math.cos(this.A);
				this.yInc = this.speed*Math.sin(this.A);
				if(isNegative(this.x-hero.x)){
					this.xInc = -1*this.xInc;
					this.yInc = -1*this.yInc;
					this.B *= -1;
				}
				if(walkable.indexOf(map[Math.floor((this.x - 2*this.xInc/3 * modifier)/64)][Math.floor((this.y - 2*this.yInc/3 * modifier)/64)]) != -1){
				//console.log('poof');
			//	console.log(this.x,this.y);
				this.x -= 2*this.xInc/3 * modifier;
				this.y -= 2*this.yInc/3 * modifier;
				//console.log(this.x,this.y);
				}
		}
	};
	this.die = function(){
		var droprand =  Math.floor(Math.random()*(4-1)+1);
		if(droprand == 2){
						var monsterp;
				var monsterand = Math.floor(Math.random()*(10-1)+1);
			//	console.log(monsterand);
				switch(monsterand){
				case 1:
					monsterp = new avwoodsword(this.y,this.y,false);
					break;
				case 2:
					monsterp = new avwoodsword(this.x,this.y,false);
					break;
				case 3:
					monsterp = new avwoodsword(this.x,this.y,false);
					break;
				case 4:
					monsterp = new avwoodsword(this.x,this.y,false);
					break;
				case 5:
					monsterp = new avwoodsword(this.x,this.y,false);
					break;
				case 6:
					monsterp = new goodwoodsword(this.x,this.y,false);
					break;
				case 7:
					monsterp = new goodwoodsword(this.x,this.y,false);
					break;
				case 8:
					monsterp = new goodwoodsword(this.x,this.y,false);
					break;
				case 9:
					monsterp = new exwoodsword(this.x,this.y,false);
					break;
				default:
					monsterp = new avwoodsword(this.x,this.y,false);
				}
				//monsterp = new monster(px*64,py*64,0);
				realthinglist.push(monsterp);
		}
				if(droprand == 3){
						var monsterp;
				var monsterand = Math.floor(Math.random()*(10-1)+1);
				//console.log(monsterand);
				switch(monsterand){
				case 1:
					monsterp = new avleatherarmor(this.y,this.y,false);
					break;
				case 2:
					monsterp = new avleatherarmor(this.x,this.y,false);
					break;
				case 3:
					monsterp = new avleatherarmor(this.x,this.y,false);
					break;
				case 4:
					monsterp = new avleatherarmor(this.x,this.y,false);
					break;
				case 5:
					monsterp = new avleatherarmor(this.x,this.y,false);
					break;
				case 6:
					monsterp = new goodleatherarmor(this.x,this.y,false);
					break;
				case 7:
					monsterp = new goodleatherarmor(this.x,this.y,false);
					break;
				case 8:
					monsterp = new goodleatherarmor(this.x,this.y,false);
					break;
				case 9:
					monsterp = new exleatherarmor(this.x,this.y,false);
					break;
				default:
					monsterp = new avleatherarmor(this.x,this.y,false);
				}
				//monsterp = new monster(px*64,py*64,0);
				realthinglist.push(monsterp);
		}
	}
	this.exp = 1;
};
function orccaptain(x,y){
	monster.call(this,x,y,200,300);
	this.name = "orccaptain";
	this.shootdelay = 0;
	this.shoot = function(){
		if(this.shootdelay > 10&&Math.sqrt(Math.pow(hero.x-this.x,2)+Math.pow(hero.y-this.y,2))<256){
			//console.log('shot');
			bulletlist.push(new orcbullet(this.x+16,this.y+16,hero.x+16,hero.y+16));
			this.shootdelay=0;
		}
		this.shootdelay +=1;
	}
	this.die = function(){
		var droprand =  Math.floor(Math.random()*(4-1)+1);
		if(droprand == 2){
						var monsterp;
				var monsterand = Math.floor(Math.random()*(10-1)+1);
				console.log(monsterand);
				switch(monsterand){
				case 1:
					monsterp = new avshortsword(this.y,this.y,false);
					break;
				case 2:
					monsterp = new avshortsword(this.x,this.y,false);
					break;
				case 3:
					monsterp = new avshortsword(this.x,this.y,false);
					break;
				case 4:
					monsterp = new avshortsword(this.x,this.y,false);
					break;
				case 5:
					monsterp = new avshortsword(this.x,this.y,false);
					break;
				case 6:
					monsterp = new goodshortsword(this.x,this.y,false);
					break;
				case 7:
					monsterp = new goodshortsword(this.x,this.y,false);
					break;
				case 8:
					monsterp = new goodshortsword(this.x,this.y,false);
					break;
				case 9:
					monsterp = new exshortsword(this.x,this.y,false);
					break;
				default:
					monsterp = new avshortsword(this.x,this.y,false);
				}
				//monsterp = new monster(px*64,py*64,0);
				realthinglist.push(monsterp);
		}
		if(droprand == 3){
						var monsterp;
				var monsterand = Math.floor(Math.random()*(10-1)+1);
				//console.log(monsterand);
				switch(monsterand){
				case 1:
					monsterp = new avstdleatherarmor(this.y,this.y,false);
					break;
				case 2:
					monsterp = new avstdleatherarmor(this.x,this.y,false);
					break;
				case 3:
					monsterp = new avstdleatherarmor(this.x,this.y,false);
					break;
				case 4:
					monsterp = new avstdleatherarmor(this.x,this.y,false);
					break;
				case 5:
					monsterp = new avstdleatherarmor(this.x,this.y,false);
					break;
				case 6:
					monsterp = new goodstdleatherarmor(this.x,this.y,false);
					break;
				case 7:
					monsterp = new goodstdleatherarmor(this.x,this.y,false);
					break;
				case 8:
					monsterp = new goodstdleatherarmor(this.x,this.y,false);
					break;
				case 9:
					monsterp = new exstdleatherarmor(this.x,this.y,false);
					break;
				default:
					monsterp = new avstdleatherarmor(this.x,this.y,false);
				}
				//monsterp = new monster(px*64,py*64,0);
				realthinglist.push(monsterp);
		}
	}
	this.exp = 10;
};
orccaptain._proto_ = monster;
function orcwarrior(x,y){
	monster.call(this,x,y,100,300);
	this.name = "orcwarrior";
	this.shootdelay = 0;
		this.shoot = function(){
		//	console.log('pew');
		if(this.shootdelay > 10&&Math.sqrt(Math.pow(hero.x-this.x,2)+Math.pow(hero.y-this.y,2))<256){
			bulletlist.push(new orcbullet(this.x+16,this.y+16,hero.x+16,hero.y+16));
			this.shootdelay = 0;
		}
		this.shootdelay +=1;
	}
	this.exp = 3;
};
orcwarrior._proto_ = monster;

function orcmage(x,y){
monster.call(this,x,y,50,100);
	this.name = "orcmage";
	this.shootdelay = 0;
		this.shoot = function(){
		if(this.shootdelay > 10&&Math.sqrt(Math.pow(hero.x-this.x,2)+Math.pow(hero.y-this.y,2))<640){
			bulletlist.push(new orcmbullet(this.x+16,this.y+16,hero.x+16,hero.y+16));
			this.shootdelay = 0;
		}
		this.shootdelay+=1;
	}
	this.exp = 5;
};
orcmage._proto_ = monster;

function trollcaptain(x,y){
	monster.call(this,x,y,200,300);
	this.name = "trollcaptain";
	this.shootdelay = 0;
	this.shoot = function(){
		if(this.shootdelay > 10&&Math.sqrt(Math.pow(hero.x-this.x,2)+Math.pow(hero.y-this.y,2))<256){
			//console.log('shot');
			bulletlist.push(new trollbullet(this.x+16,this.y+16,hero.x+16,hero.y+16));
			this.shootdelay=0;
		}
		this.shootdelay +=1;
	}
	this.die = function(){
		var droprand =  Math.floor(Math.random()*(4-1)+1);
		if(droprand == 2){
						var monsterp;
				var monsterand = Math.floor(Math.random()*(10-1)+1);
				console.log(monsterand);
				switch(monsterand){
				case 1:
					monsterp = new avshortsword(this.y,this.y,false);
					break;
				case 2:
					monsterp = new avshortsword(this.x,this.y,false);
					break;
				case 3:
					monsterp = new avshortsword(this.x,this.y,false);
					break;
				case 4:
					monsterp = new avshortsword(this.x,this.y,false);
					break;
				case 5:
					monsterp = new avshortsword(this.x,this.y,false);
					break;
				case 6:
					monsterp = new goodshortsword(this.x,this.y,false);
					break;
				case 7:
					monsterp = new goodshortsword(this.x,this.y,false);
					break;
				case 8:
					monsterp = new goodshortsword(this.x,this.y,false);
					break;
				case 9:
					monsterp = new exshortsword(this.x,this.y,false);
					break;
				default:
					monsterp = new avshortsword(this.x,this.y,false);
				}
				//monsterp = new monster(px*64,py*64,0);
				realthinglist.push(monsterp);
		}
		if(droprand == 3){
						var monsterp;
				var monsterand = Math.floor(Math.random()*(10-1)+1);
				//console.log(monsterand);
				switch(monsterand){
				case 1:
					monsterp = new avstdleatherarmor(this.y,this.y,false);
					break;
				case 2:
					monsterp = new avstdleatherarmor(this.x,this.y,false);
					break;
				case 3:
					monsterp = new avstdleatherarmor(this.x,this.y,false);
					break;
				case 4:
					monsterp = new avstdleatherarmor(this.x,this.y,false);
					break;
				case 5:
					monsterp = new avstdleatherarmor(this.x,this.y,false);
					break;
				case 6:
					monsterp = new goodstdleatherarmor(this.x,this.y,false);
					break;
				case 7:
					monsterp = new goodstdleatherarmor(this.x,this.y,false);
					break;
				case 8:
					monsterp = new goodstdleatherarmor(this.x,this.y,false);
					break;
				case 9:
					monsterp = new exstdleatherarmor(this.x,this.y,false);
					break;
				default:
					monsterp = new avstdleatherarmor(this.x,this.y,false);
				}
				//monsterp = new monster(px*64,py*64,0);
				realthinglist.push(monsterp);
		}
	}
	this.exp = 10;
};
trollcaptain._proto_ = monster;
function trollwarrior(x,y){
	monster.call(this,x,y,100,300);
	this.name = "trollwarrior";
	this.shootdelay = 0;
		this.shoot = function(){
		//	console.log('pew');
		if(this.shootdelay > 10&&Math.sqrt(Math.pow(hero.x-this.x,2)+Math.pow(hero.y-this.y,2))<256){
			bulletlist.push(new trollbullet(this.x+16,this.y+16,hero.x+16,hero.y+16));
			this.shootdelay = 0;
		}
		this.shootdelay +=1;
	}
	this.exp = 3;
};
trollwarrior._proto_ = monster;

function trollmage(x,y){
monster.call(this,x,y,50,100);
	this.name = "trollmage";
	this.shootdelay = 0;
		this.shoot = function(){
		if(this.shootdelay > 10&&Math.sqrt(Math.pow(hero.x-this.x,2)+Math.pow(hero.y-this.y,2))<640){
			bulletlist.push(new trollmbullet(this.x+16,this.y+16,hero.x+16,hero.y+16));
			this.shootdelay = 0;
		}
		this.shootdelay+=1;
	}
	this.exp = 5;
};
trollmage._proto_ = monster;

function goblin(x,y){
monster.call(this,x,y,100,600);
	this.name = "goblin";
	this.shootdelay = 0;
		this.shoot = function(){
		if(this.shootdelay > 50&&Math.sqrt(Math.pow(hero.x-this.x,2)+Math.pow(hero.y-this.y,2))<100){
			bulletlist.push(new orcbullet(this.x+16,this.y+16,hero.x+16,hero.y+16));
			this.shootdelay = 0;
		}
		this.shootdelay+=1;
	}
	this.exp = 5;
};
goblin._proto_ = monster;

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
	function toRadians (angle) {
  return angle * (180/Math.PI);
}
var player = function(){
	this.speed = 600; // movement in pixels per second
	this.exp = 0;
	this.remort = 1;
	this.weapon = new avwoodsword(1,1,true);
	this.armor = new empty();
	this.dex = 20;
	this.name = 'player';
	
};
var hero = new player();
var roomlist = new Array(1);
function room(x,y,mx,my){
	this.x = x;
	this.y = y;
	this.mx = mx;
	this.my = my;
	
}

var generatemap = function(){
	console.log("generating map");
	try{
	for(var i = 0; i < map.length; i++){
		map[i] = new Array(100);
		for(j = 0; j < map[i].length; j++){
			map[i][j] = 0;
		}
	}
	for(var i = 1; i < map.length-1; i++){
		for(var j = 1; j < map[i].length-1; j++){
			map[i][j] = Math.round((Math.random() * 1) + 0);
		}
	}
	var born = [5,6,7,8];
	var survive = [3,4,5,6,7,8];
	for(var rit = 0; rit < 15; rit++){
		for(i = 1; i < map.length-1; i++){
			for(j = 1; j < map[i].length-1; j++){
				var count = 0;
				//console.log(count);
				if(i != 0){
					if(map[i-1][j] == 1){
						count++;
						//console.log('countup');
					}
					if(j != map[i].length){
						if(map[i-1][j+1] == 1){
							count++;
							//console.log('countup');
						}
					}
					if(j != 0){
						if(map[i-1][j-1] == 1){
							count++;
							//console.log('countup');
						}
					}
				}
				if(i != map.length-2){
					if(map[i+1][j] == 1){
						count++;
						//console.log('countup');
					}
					if(j != map[i].length-1){
						if(map[i+1][j+1] == 1){
							count++;
							//console.log('countup');
						}
					}
					if(j != 0){
						if(map[i+1][j-1] == 1){
							count++;
							//console.log('countup');
						}
					}
				}
				
				if(j != map[i].length-1){
					if(map[i][j+1] == 1){
						count++;
						//console.log('countup');
					}
				}
				if(j != 0){
					if(map[i][j-1] == 1){
						count++;
						//console.log('countup');
					}
				}


				if(map[i][j] == 0){
					for(k = 0; k < born.length; k++){
						if(count == born[k]){
							map[i][j] = 1;
							//console.log('born');
						}
					}
				}	
				else if(map[i][j] == 1){
					var survived = 0;
					for(k = 0; k < survive.length; k++){
						if(count == survive[k]){
							survived = 1;
							//console.log('survived');
						}
					}
					if(survived == 0){
						map[i][j] = 0;
						//console.log('died');
					}
				}
			}
		}
	}
	
	//floodfill to destroy discod caves
	//also remakes cave if wrong fill
	var sitnotokay = true;
	while(sitnotokay){
		var lx = Math.round(Math.random()*(49)+1);
		var ly = Math.round(Math.random()*(99)+1);
		if(map[lx][ly] == 1){
			sitnotokay = false;
		}
	}
	/*var mapcopy = new Array(50);
	for(var i = 0; i < mapcopy.length; i++){
		mapcopy[i] = new Array(100);
		for(j = 0; j < mapcopy[i].length; j++){
			mapcopy[i][j] = 0;
		}
	}
	
	var mapalias = new Array(50);
	for(var i = 0; i < mapalias.length; i++){
		mapalias[i] = new Array(100);
		for(j = 0; j < mapalias[i].length; j++){
			mapalias[i][j] = 0;
		}
	}
	mapalias[lx][ly] = 1;
	
	var sitokay = true;
	while(sitokay){
				sitokay = false;
				for(i = 1; i < mapalias.length-1; i++){
					for(j = 1; j < mapalias[i].length-1; j++){
						if(mapalias[i][j] == 1 && mapcopy[i][j] == 0){
							if(i != 0){
								if(map[i-1][j] == 1){
									mapalias[i-1][j] = 1;
									sitokay = true;
									//console.log('countup');
								}
							}
							if(i != map.length-2){
								if(map[i+1][j] == 1){
									mapalias[i+1][j] = 1;
									sitokay = true;
									//console.log('countup');
								}
							}
							
							if(j != map[i].length-1){
								if(map[i][j+1] == 1){
									mapalias[i][j+1] = 1;
									sitokay = true;
									//console.log('countup');
								}
							}
							if(j != 0){
								if(map[i][j-1] == 1){
									mapalias[i][j-1] = 1;
									sitokay = true;
									//console.log('countup');
								}
							}
							mapcopy[i][j] = 1;
						}
					}
					}
	}
	var counting = 0;
	for(i = 0; i < mapalias.length; i++){
	for(j = 0; j < mapalias[i].length; j++){
			if(mapalias[i][j] == 1){
				counting++;
			}
	}
	}
	if((counting/(mapalias.length*mapalias[0].length))<.80){
		generatemap();
	}
	else{
		map = mapalias;
	}
        var mape = new Array(50);
	for(var i = 0; i < mape.length; i++){
		mape[i] = new Array(100);
		for(j = 0; j < mape[i].length; j++){
			mape[i][j] = 0;
		}
	}
	for(var i = 1; i < mape.length-1; i++){
		for(var j = 1; j < mape[i].length-1; j++){
			mape[i][j] = Math.round((Math.random() * 1) + 0);
		}
	}
	var born = [6,7,8];
	var survive = [3,4,5,6,7,8];
	for(var rit = 0; rit < 15; rit++){
		for(i = 1; i < mape.length-1; i++){
			for(j = 1; j < mape[i].length-1; j++){
				var count = 0;
				//console.log(count);
				if(i != 0){
					if(mape[i-1][j] == 1){
						count++;
						//console.log('countup');
					}
					if(j != mape[i].length){
						if(mape[i-1][j+1] == 1){
							count++;
							//console.log('countup');
						}
					}
					if(j != 0){
						if(mape[i-1][j-1] == 1){
							count++;
							//console.log('countup');
						}
					}
				}
				if(i != mape.length-2){
					if(mape[i+1][j] == 1){
						count++;
						//console.log('countup');
					}
					if(j != map[i].length-1){
						if(mape[i+1][j+1] == 1){
							count++;
							//console.log('countup');
						}
					}
					if(j != 0){
						if(mape[i+1][j-1] == 1){
							count++;
							//console.log('countup');
						}
					}
				}
				
				if(j != mape[i].length-1){
					if(mape[i][j+1] == 1){
						count++;
						//console.log('countup');
					}
				}
				if(j != 0){
					if(mape[i][j-1] == 1){
						count++;
						//console.log('countup');
					}
				}


				if(mape[i][j] == 0){
					for(k = 0; k < born.length; k++){
						if(count == born[k]){
							map[i][j] = 1;
							//console.log('born');
						}
					}
				}	
				else if(mape[i][j] == 1){
					var survived = 0;
					for(k = 0; k < survive.length; k++){
						if(count == survive[k]){
							survived = 1;
							//console.log('survived');
						}
					}
					if(survived == 0){
						mape[i][j] = 0;
						//console.log('died');
					}
				}
			}
		}
	}

	for(var i = 1; i < map.length-1; i++){
		for(var j = 1; j < map[i].length-1; j++){
                       //if(mape[i][j] == 1){if(map[i][j] == 0){map[i][j] = 1;}}
			map[i][j] = Math.round((Math.random() * 1) + 0);
                             
		}
	}
	*/
	//floodfill to destroy discod caves
	//also remakes cave if wrong fill
	var sitnotokay = true;
	while(sitnotokay){
		var lx = Math.round(Math.random()*(49)+1);
		var ly = Math.round(Math.random()*(99)+1);
		if(map[lx][ly] == 1){
			sitnotokay = false;
		}
	}
	var mapcopy = new Array(50);
	for(var i = 0; i < mapcopy.length; i++){
		mapcopy[i] = new Array(100);
		for(j = 0; j < mapcopy[i].length; j++){
			mapcopy[i][j] = 0;
		}
	}
	
	var mapalias = new Array(50);
	for(var i = 0; i < mapalias.length; i++){
		mapalias[i] = new Array(100);
		for(j = 0; j < mapalias[i].length; j++){
			mapalias[i][j] = 0;
		}
	}
	mapalias[lx][ly] = 1;
	
	var sitokay = true;
	while(sitokay){
				sitokay = false;
				for(i = 1; i < mapalias.length-1; i++){
					for(j = 1; j < mapalias[i].length-1; j++){
						if(mapalias[i][j] == 1 && mapcopy[i][j] == 0){
							if(i != 0){
								if(map[i-1][j] == 1){
									mapalias[i-1][j] = 1;
									sitokay = true;
									//console.log('countup');
								}
							}
							if(i != map.length-2){
								if(map[i+1][j] == 1){
									mapalias[i+1][j] = 1;
									sitokay = true;
									//console.log('countup');
								}
							}
							
							if(j != map[i].length-1){
								if(map[i][j+1] == 1){
									mapalias[i][j+1] = 1;
									sitokay = true;
									//console.log('countup');
								}
							}
							if(j != 0){
								if(map[i][j-1] == 1){
									mapalias[i][j-1] = 1;
									sitokay = true;
									//console.log('countup');
								}
							}
							mapcopy[i][j] = 1;
						}
					}
					}
	}
	var counting = 0;
	for(i = 0; i < mapalias.length; i++){
	for(j = 0; j < mapalias[i].length; j++){
			if(mapalias[i][j] == 1){
				counting++;
			}
	}
	}
	if((counting/(mapalias.length*mapalias[0].length))<.70){
		console.log('failed');
		generatemap();
	}
	else{
		map = mapalias;
	}
	for(i = 0; i < map.length; i++){
	for(j = 0; j < map[i].length; j++){
			if(map[i][j] == 1){
				map[i][j] = Math.floor(Math.random() * (11006 - 11000)) + 11000;
				
			}
	}
	}
	
	
	/*var rx = Math.round(Math.random()*(50-0));
	var ry = Math.round(Math.random()*(100-0));
	var dix;
	var diy;
	if(rx + 20 > 50){
		dix = 50;
	}else{
		dix = rx + 20;
	}
	if(ry + 20 > 100){
		diy = 100;
	}else{
		diy = ry + 20;
	}*/
	/*
	var rx = 1;//Math.round(Math.random()*(50-0));
	var ry = 1;//Math.round(Math.random()*(100-0));
	var dix;
	var diy;
	if(rx + 20 > 50){
		dix = 50;
	}else{
		dix = rx + 20;
	}
	if(ry + 20 > 100){
		diy = 100;
	}else{
		diy = ry + 20;
	}
	
	
	var rmx = Math.round(Math.random()*(dix-(rx+2))+(rx+2));
	var rmy = Math.round(Math.random()*(diy-(ry+2))+(ry+2));
	roomlist[0] = new room(rx,ry,rmx,rmy);
	for(i = 1; i < 10; i++){
		var notgood = true;
		var rx;
		var ry;
		var rmx;
		var rmy;
		while(notgood){
			notgood = false;
			rx = Math.round(Math.random()*(49-1)+1);
			ry = Math.round(Math.random()*(99-1)+1);
			var dix;
			var diy;
			if(rx + 20 >= 50){
				dix = 49;
			}else{
				dix = rx + 20;
			}
			if(ry + 20 >= 100){
				diy = 99;
			}else{
				diy = ry + 20;
			}
			rmx = Math.round(Math.random()*(dix-(rx+2))+(rx+2));
			rmy = Math.round(Math.random()*(diy-(ry+2))+(ry+2));
			for(j = 0; j < roomlist.length; j++){
				if(rx > roomlist[j].mx || roomlist[j].x > rmx){
					
				}else if(ry > roomlist[j].my || roomlist[j].y > rmy){}
				else{
					notgood = true;
				}
			}
		}
		roomlist[i] = new room(rx,ry,rmx,rmy);
		for(k = roomlist[i].x; k < roomlist[i].mx; k++){
			for(j = roomlist[i].y; j < roomlist[i].my; j++){
				map[k][j] = 1;
			}
			
		}
	}
	for(ik = 0; ik < roomlist.length; ik++){
		for(i = roomlist[ik].x; i < roomlist[ik].mx; i++){
			for(j = roomlist[ik].y; j < roomlist[ik].my; j++){
				map[i][j] = 1;
			}
			
		}
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
		if(Math.round(Math.random())){
		for(var jindex = py; jindex < pmy; jindex++){
			map[px][jindex] = 1;
		}
		for(var jindex = px; jindex < pmx; jindex++){
			map[jindex][pmy] = 1;
		}
		}else{
		for(var jindex = px; jindex < pmx; jindex++){
			map[jindex][py] = 1;
		}
		for(var jindex = py; jindex < pmy; jindex++){
			map[pmx][jindex] = 1;
		}
		}*/
	//}
	
	
	//catch(err){
	//	generatemap();
	//}
	}
catch(err){
	console.log(err);
	console.log('bigmaperror');
	generatemap();
}
}

//MUSICS
/*

myAudio = new Audio('gamovrwrld.wav'); 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();
*/





//Generate Ruins

var generateRuins = function(hx){
	console.log(hx);
	for(var ri = 0; ri < hx; ri++){
	console.log(i);
	console.log('creating ruins');
	var rx = Math.floor(Math.random()*(29)+1);
	var ry = Math.floor(Math.random()*(76)+1);
	var dix = Math.floor(Math.random() * ((rx+15) - (rx+5))) + (rx+5);
	var diy= Math.floor(Math.random() * ((ry+15) - (ry+5))) + (ry+5);
	/*if(rx + 20 > 49){
		dix = 49;
	}else{
		dix = rx + 20;
	}
	if(ry + 20 > 99){
		diy = 99;
	}else{
		diy = ry + 20;
	}*/
	console.log(rx,ry,dix,diy);
	for(var i = rx; i<dix; i++){
		for(var j = ry; j<diy; j++){
			console.log('ruinblock');
			map[i][j] = 4;
			
			
		}
	}
	for(var i = rx+1; i<dix-1; i++){
		for(var j = ry+1; j<diy-1; j++){
			console.log('ruintile');
			map[i][j] = 7;
			
			
		}
	}
	map[rx][diy-3] = 7;
	for(var i = 0; i < map.length; i++){
	for(var j = 0; j < map[i].length; j++){
			if(map[i][j] == 4){
				if(Math.floor(Math.random()*(4-1)+1) != 1){
				map[i][j] = Math.floor(Math.random() * (12506 - 12500)) + 12500;
				}
				else{
					map[i][j] = Math.floor(Math.random() * (12005 - 12000)) + 12000;
				}
			}
			if(map[i][j] == 7){
				map[i][j] = Math.floor(Math.random() * (12005 - 12000)) + 12000;
				
			}
	}
	}
	console.log('finished ruins');
}
}
generatemap();
generateRuins(4);


var invfull = 40;
//hero.speed = 100;
//localStorage.monstersCaught = 0;
// Handle keyboard controls
var buldelay;
var clickedx;
var keysDown = {};
canvas.addEventListener("mousedown", function (e) {
	canvas_x = event.x;
	canvas_y = event.y; 
	canvas_x -= canvas.offsetLeft;
	canvas_y -= canvas.offsetTop;
	if (state==3){
		ded = false;
		console.log('yes');
		state = 2;		
		flag = 1;
	}
	if (state==2 && flag ==0/*&& hero.name != "player"*/){
		
		state = 1;
		hero.name = hero.name;
		ctx.clearRect(0,0,canvas.width,canvas.height);
	}
	flag = 0;
	if (ded){
		console.log(':(');
		state = 3;		
		var proxname = hero.name;
		hero = new player();
		hero.name = proxname;
		inv = [];
		map = new Array(50);
		generatemap();
		generateRuins(4);
		ctx.clearRect(0,0,canvas.width,canvas.height);
		maxhp = 100 + Number(hero.remort)*10;
		hero.hp = maxhp;
		reset();
	}
	if (state==1){
		if(canvas_x >= 816 && canvas_x <= 906 && canvas_y >= 10 && canvas_y <= 42){
			reset();
			
			
		}
		else if(canvas_x >= 815 && canvas_x <=847 && canvas_y >= 240 && canvas_y <= 272 ){
		if(Number(localStorage.mihps) != 0){
		localStorage.mihps = Number(localStorage.mihps) - 1;
		if(Number(hero.hp)+50 < maxhp){
		hero.hp = Number(hero.hp) + 50
		}
		else{
			hero.hp = maxhp
		}
		}
		}
		else if(canvas_x >= 820 && canvas_x <=884 && canvas_y >= 462 && canvas_y <= 526 ){
			if(atinv){
				atinv = false;
				selcweapon = false;
				selcarmor = false;
			}
			else{
				atinv = true;
			}
		}
		
		// make a bullet when you click
			var xdifference = herosetx - hero.x;
			var ydifference = herosety - hero.y;
			if(state==1 && canvas_x <=900){
				clicked = true;
				clickedx = hero.x + canvas_x - herosetx;
				clickedy = hero.y + canvas_y - herosety;
				//console.log(hero.x,hero.y);
				bulletlist.push(new bullet(hero.x+16,hero.y+16,hero.x+canvas_x-herosetx,hero.y+canvas_y-herosety,1000,30));
				buldelay = 0;
					for	(var index = 0; index < realthinglist.length; index++) {
		if(inv.length < 17 && realthinglist[index].ininv == false && clickedx > realthinglist[index].x && clickedx < realthinglist[index].x+32 && clickedy > realthinglist[index].y && clickedy < realthinglist[index].y+32){
			/*inv.push(realthinglist[index]);
			realthinglist[index].ininv = true;*/
		}		
	}
			}
			if(atinv&&canvas_x>302&&canvas_x<622&&canvas_y>151&&canvas_y<471){
				var invclickx = Math.floor((canvas_x - 302)/76);
				var invclicky = Math.floor((canvas_y - 151)/76);
				invvalue = invclickx + (4*invclicky);
				console.log(canvas_x,canvas_y,invclickx,invclicky);
				console.log(invvalue);
				selcweapon = false;
				selcarmor = false;
			}
			if(atinv&&canvas_x>950&&canvas_x<1014&&canvas_y>50&&canvas_y<115){
				selcweapon = true;
				selcarmor = false;
			}
			if(atinv&&canvas_x>950&&canvas_x<1014&&canvas_y>150&&canvas_y<215){
				selcweapon = false;
				selcarmor = true;
			}
			if(atinv&&!selcweapon&&canvas_x>50&&canvas_x<150&&canvas_y>390&&canvas_y<420){
				gold += inv[invvalue].price + inv[invvalue].price*inv[invvalue].tohit*inv[invvalue].todam+10*inv[invvalue].ex
				inv.splice(invvalue,1);
			}
			if(atinv&&!selcarmor&&!selcweapon&&inv[invvalue].id == "weapon"&&canvas_x>50&&canvas_x<100&&canvas_y>430&&canvas_y<460){
				var proxinv = inv[invvalue];
				inv[invvalue] = hero.weapon;
				hero.weapon = proxinv;

			}	
			if(atinv&&!selcarmor&&!selcweapon&&inv[invvalue].id == "armor"&&canvas_x>50&&canvas_x<100&&canvas_y>430&&canvas_y<460){
				var proxinv = inv[invvalue];
				if(hero.armor.id == "delete"){
					inv.splice(invvalue,1);
					}else{
				inv[invvalue] = hero.armor;
				}
				hero.armor = proxinv;

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
	buldelay = 0;
}, false);
canvas.addEventListener("mousemove", function (e) {
	canvas_x = event.x;
	canvas_y = event.y; 
	canvas_x -= canvas.offsetLeft;
	canvas_y -= canvas.offsetTop;

}, false);
canvas.addEventListener("dblclick", function (e) {
	canvas_x = event.x;
	canvas_y = event.y; 
	canvas_x -= canvas.offsetLeft;
	canvas_y -= canvas.offsetTop;
	console.log("DoubleClick X: " + canvas_x + " Y: " + canvas_y);

	if (state==1){
		if(canvas_x >= 515 && canvas_x <=483 && canvas_y >= 158 && canvas_y <= 158 ){
		if(Number(localStorage.mihps) != 0){
		localStorage.mihps = Number(localStorage.mihps) - 1;
		if(Number(hero.hp)+50 < maxhp){
		hero.hp = Number(hero.hp) + 50
		}
		else{
			hero.hp = maxhp
		}
		}
		}
		
	}
}, false);

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
    var whichKeys = Object.keys(keysDown);
	if(81 in keysDown && state == 1){
			if(atinv){
				atinv = false;
				selcweapon = false;
			}
			else{
				atinv = true;
			}
			
	}
    if (state == 2) {
		console.log(hero.name);
        console.log(whichKeys);
		if (stuffNum == 0 && hero.name.length <= 7){//making sure multiple keys won't be pressed in a row, name < 7
            if (16 in keysDown){
                whichKeys.splice(whichKeys.indexOf("16"), 1);//take off the shift key from the list
                var theKey = whichKeys[0];//use only the first key
                kne.inArray(parseInt(theKey),kne.arrayFromTo(65,91)) ? hero.name += String.fromCharCode(theKey): kne.doNothing(); //if the key is between A & Z, ad the letter to the name
            } 
            /*
	if (65 in keysDown){
		hero.name += 'a';
		stuffNum += 1;
	}
	else if (66 in keysDown){
		hero.name += 'b';
		stuffNum += 1;
	}
	else if (67 in keysDown){
		hero.name += 'c';
		stuffNum += 1;
	}
	else if (68 in keysDown){
		hero.name += 'd';
		stuffNum += 1;
	}
	else if (69 in keysDown){
		hero.name += 'e';
		stuffNum += 1;
	}
	else if (70 in keysDown){
		hero.name += 'f';
		stuffNum += 1;
	}
	else if (71 in keysDown){
		hero.name += 'g';
		stuffNum += 1;
	}
	else if (72 in keysDown){
		hero.name += 'h';
		stuffNum += 1;
	}
	else if (73 in keysDown){
		hero.name += 'i';
		stuffNum += 1;
	}
	else if (74 in keysDown){
		hero.name += 'j'
	}
	else if (75 in keysDown){
		hero.name += 'k';
		stuffNum += 1;
	}
	else if (76 in keysDown){
		hero.name += 'l';
		stuffNum += 1;
	}
	else if (77 in keysDown){
		hero.name += 'm';
		stuffNum += 1;
	}
	else if (78 in keysDown){
		hero.name += 'n';
		stuffNum += 1;
	}
	else if (79 in keysDown){
		hero.name += 'o';
		stuffNum += 1;
	}
	else if (80 in keysDown){
		hero.name += 'p';
		stuffNum += 1;
	}
	else if (81 in keysDown){
		hero.name += 'q';
		stuffNum += 1;
	}
	else if (82 in keysDown){
	hero.name += 'r';
		stuffNum += 1;
	}
	else if (83 in keysDown){
		hero.name += 's';
		stuffNum += 1;
	}
	else if (84 in keysDown){
		hero.name += 't';
		stuffNum += 1;
	}
	else if (85 in keysDown){
		hero.name += 'u';
		stuffNum += 1;
	}
	else if (86 in keysDown){
		hero.name += 'v';
		stuffNum += 1;
	}
	else if (87 in keysDown){
		hero.name += 'w';
		stuffNum += 1;
	}
	else if (88 in keysDown){
		hero.name += 'x';
		stuffNum += 1;
	}
	else if (89 in keysDown){
		hero.name += 'y';
		stuffNum += 1;
	}
	else if (90 in keysDown){
		hero.name += 'z';
		stuffNum += 1;
	}
    */
	else if (13 in keysDown) { //player pressed enter
		state = 1;
		hero.name = hero.name;
	}
    else{
				var theKey = parseInt(whichKeys[0])+32;
                kne.inArray(parseInt(theKey),kne.arrayFromTo(97,123)) ? hero.name += String.fromCharCode(theKey): kne.doNothing();
            }

	}
	if (stuffNum == 0 && state==2){
	if (8 in keysDown){
		hero.name = hero.name.slice(0,-1)
		stuffNum += 1;
	}
	}
	
            e.preventDefault();
            console.log(e.keyCode);

        }
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
	hpcode = 60;
	stuffNum = 0;
}, false);
hero.remort = 1;
// initiates localstorage variables
hero.speed = 600;
 /*   if(typeof(Storage) !== "undefined") {
        if (hero.speed) {
        	hero.speed =  1000; //hero.speed;
        } else {
            hero.speed = 1000;
        }
    } else {
    }*/
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
        	hero.hp = maxhp;
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
        if (hero.remort) {
        	
        } else {
           // hero.remort = 0;
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
        if (hero.exp) {
        	
        } else {
            hero.exp = 0;
        }
    } else {
    }
    if(typeof(Storage) != "undefined") {
	if (hero.name) {
        		// Throw the monster somewhere on the screen randomly
	//var monsterp = new monster(32 + (Math.random() * (430)),32 + (Math.random() * (430)),20*Number(localStorage.caught)/50);
	//thinglist.push(monsterp);
        } else {
            hero.name = "player";
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
	 maxhp = 100 + Number(hero.remort)*10;
	 hero.hp = maxhp;
    
// Reset the game when the player catches a monster

var reset = function () {
	try{
		console.log('reset');
	localStorage.things = JSON.stringify(thinglist);
	var sitnotokay = true;
	var itersk = 0;
	var lx;
	var ly;
	while(sitnotokay){
		lx = Math.round(Math.random()*(46)+2);
		ly = Math.round(Math.random()*(99)+2);
		//console.log(lx,ly);
		var goodthings = [12000,12001,12002,12003,12004];
		if(goodthings.indexOf(map[lx][ly]) != -1){
			sitnotokay = false;
		}
		itersk++;
		if(itersk++ == 1000){
			//goodthings.push(1);
			sitnotokay = false;
		}
	}
	
	hero.x = Math.floor(lx*64);
	hero.y = Math.floor(ly*64);
	
	for	(var index = 0; index < thinglist.length; index++) {
			if (thinglist[index].name == "monster"){
				thinglist.splice(index,1);
				
			}
	}
	console.log('making monsters!');
	for(var i = 0; i<monsterlist.length; i++){
		monsterlist.splice(i,1);
	}
	for(var i = 0; i < 150; i++ ){
		var ngood = true;
		while(ngood){
			ngood = false;
			px = Math.round(Math.random()*49*64-1)+1;
			py = Math.round(Math.random()*99*64-1);
			if(walkable.indexOf(map[Math.floor(px/64)][Math.floor(py/64)]) != -1 && Math.sqrt(Math.pow(hero.x-px,2)+Math.pow(hero.y-py,2))>300){
				var monsterp;
				switch(Math.floor(Math.random()*5-1)+1){
				case 1:
					monsterp = new goblin(px,py);
					break;
				case 2:
					monsterp = new orcwarrior(px,py);
					break;
				case 3:
					monsterp = new orcmage(px,py);
					break;
				case 4:
					monsterp = new orccaptain(px,py);
					break;
				default:
					monsterp = new goblin(px,py);
				}
				//monsterp = new monster(px*64,py*64,0);
				monsterlist.push(monsterp);
			}else{ngood = false;}
		}
	}
	console.log('is this bad?');
	for(i = 0; i < thinglist.length; i++){
		if(thinglist[i].name == "monster"){
			if(map[Math.floor(thinglist[i].x/64)][Math.floor(thinglist[i].y/64)] == 0){
				thinglist.splice(i,1);
			}
		}
	}
	var j = 0;
	for(i = 0; i < thinglist.length; i++){
		if(thinglist[i].name == "monster"){
			j = j+1;
		}
	}
	console.log(j);
	hero.speed = hero.speed;
	}
	catch(err){
		console.log(err);
		console.log('error')
		generatemap();
		reset();
	}
};
var resets = function () {

	if (!hurtflag){
	hero.speed = Number(hero.speed) + 10 + Number(hero.remort);
	hero.exp = Number(hero.exp) + 10 + (Number(hero.remort)-1);
}else{
	hurtflag = 0;
}


	// Throw the monster somewhere on the screen randomly
		if (Number(hero.exp)>1900){
		hero.remort += 1;
		localStorage.caught=0;
		hero.exp=0;
		hero.speed=100;
		hero.hp = 100 + (Number(hero.remort)-1) * 10;
		if (Math.random() * (4)==1){
				var ngood = true;
		/*while(ngood){
			ngood = false;
			px = Math.round(Math.random()*49);
			py = Math.round(Math.random()*99);
			if(map[px][py] == 1){
				
				var rx = Math.round(Math.random()*3);
				var monsterp;
				switch(rx){
					case 1: 
					monsterp = new monster(px*64,py*64,25*Number(localStorage.caught)/50);
					break;
					case 2: 
					monsterp = new monster(px*64 + 32,py*64,25*Number(localStorage.caught)/50);
					break;
					case 3: 
					monsterp = new monster(px*64,py*64 + 32,25*Number(localStorage.caught)/50);
					break;
					case 0: 
					monsterp = new monster(px*64 + 32,py*64 + 32,25*Number(localStorage.caught)/50);
					break;
				}
				//monsterp = new monster(px*64,py*64,0);
				thinglist.push(monsterp);
			}else{ngood = false;}
		}*/
		
		}
	}
				var ngood = true;
		/*while(ngood){
			ngood = false;
			px = Math.round(Math.random()*49);
			py = Math.round(Math.random()*99);
			if(map[px][py] == 1){
				
				var rx = Math.round(Math.random()*3);
				var monsterp;
				switch(rx){
					case 1: 
					monsterp = new monster(px*64,py*64,25*Number(localStorage.caught)/50);
					break;
					case 2: 
					monsterp = new monster(px*64 + 32,py*64,25*Number(localStorage.caught)/50);
					break;
					case 3: 
					monsterp = new monster(px*64,py*64 + 32,25*Number(localStorage.caught)/50);
					break;
					case 0: 
					monsterp = new monster(px*64 + 32,py*64 + 32,25*Number(localStorage.caught)/50);
					break;
				}
				//monsterp = new monster(px*64,py*64,0);
				thinglist.push(monsterp);
			}else{ngood = false;}
		}*/
	hero.speed = hero.speed;
	
};

// Update game objects
var update = function (modifier) {
	//if not in inventory.
	if(!atinv&&!ded&&state == 1){
		
	if (Number(hero.exp)>1900){
		hero.remort = Number(hero.remort) + 1;
		hero.hp = 100 + Number(hero.remort) * 10;
		hero.exp = 0;
	}
	if (Number(hero.hp) <= 0){
		
		hero.hp = maxhp;
		ded = true;
		if (Number(hero.remort) >1){
			//ded = true;
			hero.remort = Number(hero.remort) - 1;
		}
	}
	
	/*if (65 in keysDown) {
		//netp=1;
	}
	else if (68 in keysDown) {
		//netp=2;
	}
	else if (87 in keysDown) {
		//netp=3;
	}
	else if (83 in keysDown) {
		//netp=4;	
	}*/
	dstop = true;
	rstop = false;
	lstop = false;
	ustop = false;
		if (32 in keysDown){
		for	(var index = 0; index < realthinglist.length; index++) {
			if(realthinglist[index].ininv == false && ((hero.x > realthinglist[index].x && hero.x < realthinglist[index].x+32 && hero.y > realthinglist[index].y && hero.y < realthinglist[index].y+32)||(hero.x > realthinglist[index].x && hero.x < realthinglist[index].x+32 && hero.y+32 > realthinglist[index].y && hero.y+32 < realthinglist[index].y+32)||(hero.x+32 > realthinglist[index].x && hero.x+32 < realthinglist[index].x+32 && hero.y+32 > realthinglist[index].y && hero.y+32 < realthinglist[index].y+32)||(hero.x+32 > realthinglist[index].x && hero.x+32 < realthinglist[index].x+32 && hero.y+32 > realthinglist[index].y && hero.y < realthinglist[index].y))){
				if(inv.length < 16){
					inv.push(realthinglist[index]);
					realthinglist.splice(index,1);
				}
				else{
					invfull = 0;
				}
			}		
		}
	}
	if (69 in keysDown) { // Player holding right
		if(hpcode == 60 && Number(localStorage.mihps) != 0){
		localStorage.mihps = Number(localStorage.mihps) - 1;
		if(Number(hero.hp)+50 < maxhp){
		hero.hp = Number(hero.hp) + 50;
		}
		else{
			hero.hp = maxhp
		}
		hpcode = 0;
		}
		hpcode++;
	}
	if (87 in keysDown) { // Player holding up
		if (walkable.indexOf(map[Math.floor(hero.x/64)][Math.floor((hero.y-5)/64)]) != -1){
		hero.y -= 2*hero.speed/3 * modifier;		
		}
		dstop = false;
		rstop = false;
		lstop = false;
		ustop = true;
		
	}
	if (83 in keysDown) { // Player holding down
		if (walkable.indexOf(map[Math.floor(hero.x/64)][Math.floor((hero.y+35)/64)]) != -1){
		hero.y += 2*hero.speed/3 * modifier;
		}
		dstop = true;
		rstop = false;
		lstop = false;
		ustop = false;	
	}
	if (65 in keysDown) { // Player holding left
	 	if (walkable.indexOf(map[Math.floor((hero.x-5)/64)][Math.floor((hero.y+5)/64)]) != -1){
		hero.x -= 2*hero.speed/3 * modifier;
		}
		dstop = false;
		rstop = false;
		lstop = true;
		ustop = false;	
	}
	if (68 in keysDown) { // Player holding right
		if (walkable.indexOf(map[Math.floor((hero.x+35)/64)][Math.floor((hero.y+5)/64)]) != -1){
		hero.x += 2*hero.speed/3 * modifier;
		}
		dstop = false;
		rstop = true;
		lstop = false;
		ustop = false;	
	}

	
	/*for(i = 0; i < thinglist.length; i++){
		if(thinglist[i].name == "monster"){
			if(map[Math.floor(thinglist[i].x/64)][Math.floor(thinglist[i].y/64)] == 0){
						var ngood = true;
		while(ngood){
			ngood = false;
			px = Math.round((Math.random()*(2+2))-2)+Math.floor(thinglist[i].x/64);
			py = Math.round((Math.random()*(2+2))-2)+Math.floor(thinglist[i].y/64);*/
			/*if(px>712){
				px = 712;
			}
			if(py>500){
				py = 500;
				}*/
			/*if(px<0){
				px = 0;
			}
			if(py<0){
				py = 0;
			}
			if(map[px][py] == 1){
				
				var rx = Math.round(Math.random()*3);
				var monsterp;
				switch(rx){
					case 1: 
					px = px*64;
					py = py*64;
					break;
					case 2: 
					px = px*64 + 32;
					py = py*64;
					break;
					case 3: 
					px = px*64;
					py = py*64 + 32;
					break;
					case 0: 
					px = px*64 + 32;
					py = py*64 + 32;
					break;
				}
				//monsterp = new monster(px*64,py*64,0);
				
			}else{ngood = false;}
				thinglist[i].x = px;
				thinglist[i].y = py;
			}
		}
	}
	}*/
	
	for	(var index = 0; index < thinglist.length; index++) {
			if (thinglist[index].name == "potion"&&
		hero.x <= (thinglist[index].x + 32)
		&& thinglist[index].x <= (hero.x + 32)
		&& hero.y <= (thinglist[index].y + 32)
		&& thinglist[index].y <= (hero.y + 32)
	){
		thinglist.splice(index,1);
		localStorage.mihps = Number(localStorage.mihps) + 1;
	}/*else if (thinglist[index].name == "monster"){
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
	if (thinglist[index].x <=3200){
		if(Math.round((thinglist[index].x + thinglist[index].speed)/64) < 48){
		if(map[Math.round((thinglist[index].x + thinglist[index].speed)/64)][Math.round(thinglist[index].y/64)] == 0){
			var lk;
			for(lk = thinglist[index].x; map[Math.round(lk/64)][Math.floor(thinglist[index].y/64)] == 1; lk++){
			}
			thinglist[index].x = lk;
		}else{
		thinglist[index].x += thinglist[index].speed;
		}
		}
	}
	}
	else if (random == 2){
	if (thinglist[index].y <=6400){
		if(Math.round((thinglist[index].y + thinglist[index].speed)/64) < 99){
		if(map[Math.round((thinglist[index].x)/64)][Math.round(thinglist[index].y + thinglist[index].speed/64)] == 0){
		var lk;
			for(lk = thinglist[index].y; map[Math.floor(thinglist[index].x/64)][Math.round(lk/64)] == 1; lk++){
			}
			thinglist[index].y = lk;
		}else{
		thinglist[index].y += thinglist[index].speed;
		}
		}
	}
	}
	else if (random == 3){
	if (thinglist[index].x >=30){
		if(Math.round((thinglist[index].x - thinglist[index].speed)/64) > 1){
		if(map[Math.round((thinglist[index].x - thinglist[index].speed)/64)][Math.round(thinglist[index].y/64)] == 0){
						var lk;
			for(lk = thinglist[index].x; map[Math.round(lk/64)][Math.floor(thinglist[index].y/64)] == 1; lk--){
			}
			thinglist[index].x = lk;
		}else{
		thinglist[index].x -= thinglist[index].speed;
		}

		}
	}
	}
	else if (random == 4){
	if (thinglist[index].y >= 50){
		if(Math.round((thinglist[index].y - thinglist[index].speed)/64) > 1){
		if(map[Math.round((thinglist[index].x)/64)][Math.round(thinglist[index].y - thinglist[index].speed/64)] == 0){
					var lk;
			for(lk = thinglist[index].y; map[Math.floor(thinglist[index].x/64)][Math.round(lk/64)] == 1; lk--){
			}
			thinglist[index].y = lk;
		}else{
		thinglist[index].y -= thinglist[index].speed;
		}
		}
	}
		
	}
	}
	}*/ // end of if name is monster
	
	
	}
	
	//new bullets
	if(dragflag == 1){
		buldelay += (hero.weapon.tohit/10)+1;
		if(buldelay>((hero.dex/2))){
						var xdifference = herosetx - hero.x;
			var ydifference = herosety - hero.y;
			if(state==1 && canvas_x <=900){
				clicked = true;
				//console.log(hero.x,hero.y);
				bulletlist.push(new bullet(hero.x+16,hero.y+16,hero.x+16+canvas_x-herosetx,hero.y+16+canvas_y-herosety,1000,30));
				
				buldelay = 0;
			}
		}
		
		
	}
				for	(var index = 0; index < monsterlist.length; index++) {
	monsterlist[index].shoot();
	monsterlist[index].move(modifier);
				
			
	}
	
	if(1){
		
		var xx = hero.x - (herosetx - canvas_x);
		var xy = hero.y - (herosety - canvas_y);
		for(var i = 0; i<bulletlist.length; i++){
			var bulletalive = true;
			if(unwalkable.indexOf(map[Math.floor(bulletlist[i].x/64)][Math.floor(bulletlist[i].y/64)])!=-1){
				bulletlist.splice(i,1);
				bulletalive = false;
			}
			else{
		clickbullet = bulletlist[i];
		var cX = clickbullet.xInc;
		var cY = clickbullet.yInc;
					

		if((bulletlist[i].x+5)<bulletlist[i].ex || (bulletlist[i].x-5)>bulletlist[i].ex){
			bulletlist[i].x+=2*cX/3 * modifier;
			bulletlist[i].y+=2*cY/3 * modifier;
				bulletlist[i].life+=90 * modifier;
			//console.log(bulletlist[i].life,bulletlist[i].death);
			if(bulletlist[i].life >= bulletlist[i].death){
				bulletlist.splice(i,1);
				bulletalive = false;
			}
		} else{ //if((bulletlist[i].y+5)<bulletlist[i].ey || (bulletlist[i].y-5)>bulletlist[i].ey) {
			
			/*if(bulletlist[i].life>=bulletlist[i].death){
				bulletlist.splice(i,1);
				console.log("spliced!");
			}*/
			//else{
			bulletlist[i].x+=2*cX/3 * modifier;
			bulletlist[i].y+=2*cY/3 * modifier;
			bulletlist[i].life+=90 * modifier;
			//console.log(bulletlist[i].life,bulletlist[i].death);
			if(bulletlist[i].life >= bulletlist[i].death){
				bulletlist.splice(i,1);
				bulletalive = false;
			}

			//}
		/*}else if(bulletlist[i].x==bulletlist[i].ex || bulletlist[i].y==bulletlist[i].ey){
			//bulletlist.splice(i,1);
		}
		else {
			bulletlist[i].x=bulletlist[i].ex;
			bulletlist[i].y=bulletlist[i].ey;
			arrived = false;
		}*/
	}
	if (bulletalive&&bulletlist[i].name !== "bullet"&&bulletlist[i].x<hero.x+32&&bulletlist[i].x>hero.x&&bulletlist[i].y<hero.y+32&&bulletlist[i].y>hero.y){
		if((bulletlist[i].damage+0.6*(Number(hero.remort)-1)-(hero.armor.ac+hero.armor.plusac)) < (bulletlist[i].damage+0.6*(Number(hero.remort)-1))*0.1){
			hero.hp -=(bulletlist[i].damage+0.6*(Number(hero.remort)-1))*0.1;
		}
		else{
			hero.hp -=bulletlist[i].damage+0.6*(Number(hero.remort)-1)-(hero.armor.ac+hero.armor.plusac);
		}
		bulletlist.splice(i,1);
		bulletalive = false;
	}
		for	(var index = 0; index < monsterlist.length; index++) {
			
			if (bulletalive&&bulletlist[i].name == "bullet"&&bulletlist[i].x<monsterlist[index].x+32&&bulletlist[i].x>monsterlist[index].x&&bulletlist[i].y<monsterlist[index].y+32&&bulletlist[i].y>monsterlist[index].y){
				monsterlist[index].hp -= hero.weapon.damage+hero.weapon.damage*hero.weapon.todam/10+monsterlist[index].hp*hero.weapon.ex/10;
				bulletlist.splice(i,1);
				bulletalive = false;
				//console.log(monsterlist[index].hp);
				if(monsterlist[index].hp <= 0){
					//console.log('ded');
					if(Math.floor(Math.random()*4-1)+1 == 1){
					thinglist.push(new potion(monsterlist[index].x,monsterlist[index].y));
					}
					hero.exp = Number(hero.exp) + (10 + Number(hero.remort))*monsterlist[index].exp/Number(hero.remort);
								py = Math.round(Math.random()*99*64-1);
			
					monsterlist[index].die();
					monsterlist.splice(index,1);
					localStorage.monstersCaught=Number(localStorage.monstersCaught) + 1;
					

					
							var ngood = true;
		while(ngood){
			ngood = false;
			px = Math.round(Math.random()*49*64-1)+1;
			py = Math.round(Math.random()*99*64-1);
			if(walkable.indexOf(map[Math.floor(px/64)][Math.floor(py/64)]) != -1&&Math.sqrt(Math.pow(hero.x-px,2)+Math.pow(hero.y-py,2))>600){
				var monsterp;
				switch(Math.floor(Math.random()*5-1)+1){
				case 1:
					monsterp = new goblin(px,py);
					break;
				case 2:
					monsterp = new orcwarrior(px,py);
					break;
				case 3:
					monsterp = new orcmage(px,py);
					break;
				case 4:
					monsterp = new orccaptain(px,py);
					break;
				default:
					monsterp = new goblin(px,py);
				}
				//monsterp = new monster(px*64,py*64,0);
				monsterlist.push(monsterp);
			}else{ngood = true;}
		}
				}
			}
				
			
	}

	}
	}
	}
	}
};

// Bullets


// Draw everything
var render = function () {
	invfull++;
	var xdifference = herosetx - hero.x;
	var ydifference = herosety - hero.y;
	ctx.fillStyle="#000000";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	for(var index = 0; index < map.length; index++){
		for(var jindex = 0; jindex < map[index].length; jindex++){
			if(
			(index + 1)*64 >= hero.x-450 &&
			(index)*64 <= hero.x+450 &&
			(jindex)*64 <= hero.y+350 &&
			(jindex + 1)*64 >= hero.y-300
			){
		if(map[index][jindex] == 11000){
			ctx.drawImage(grass0Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 11001){
			ctx.drawImage(grass1Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 11002){
			ctx.drawImage(grass2Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 11003){
			ctx.drawImage(grass3Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 11004){
			ctx.drawImage(grass4Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 11005){
			ctx.drawImage(grass5Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 11006){
			ctx.drawImage(grass6Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 12500){
			ctx.drawImage(ruin1Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 12501){
			ctx.drawImage(ruin2Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 12502){
			ctx.drawImage(ruin3Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 12503){
			ctx.drawImage(ruin4Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 12504){
			ctx.drawImage(ruin5Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 12505){
			ctx.drawImage(ruin6Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 12000){
			ctx.drawImage(rfloor1Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 12001){
			ctx.drawImage(rfloor2Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 12002){
			ctx.drawImage(rfloor3Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 12003){
			ctx.drawImage(rfloor4Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 12004){
			ctx.drawImage(rfloor5Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 12005){
			ctx.drawImage(rfloor6Image, index * 64 + xdifference, jindex * 64 + ydifference);				
		}
		if(map[index][jindex] == 0){
			ctx.drawImage(stoneImage, index * 64 + xdifference, jindex * 64 + ydifference);				
		}	
			}
		}
	}
		/*for(var index = 0; index < map.length; index++){
		for(var jindex = 0; jindex < map[index].length; jindex++){

		if(map[index][jindex] == 1){
			ctx.drawImage(grass1Image, index * 8 + 0, jindex * 8 + 600,8,8);				
		}
		if(map[index][jindex] == 2){
			ctx.drawImage(grass2Image, index * 8 + 0, jindex * 8 + 600,8,8);				
		}
		if(map[index][jindex] == 3){
			ctx.drawImage(grass3Image, index * 8 + 0, jindex * 8 + 600,8,8);				
		}
		if(map[index][jindex] == 4){
			ctx.drawImage(ruin1Image, index * 8 + 0, jindex * 8 + 600,8,8);				
		}
		if(map[index][jindex] == 5){
			ctx.drawImage(ruin2Image, index * 8 + 0, jindex * 8 + 600,8,8);				
		}
		if(map[index][jindex] == 6){
			ctx.drawImage(ruin3Image, index * 8 + 0, jindex * 8 + 600,8,8);				
		}
		if(map[index][jindex] == 7){
			ctx.drawImage(rfloor1Image, index * 8 + 0, jindex * 8 + 600,8,8);				
		}
		if(map[index][jindex] == 8){
			ctx.drawImage(rfloor2Image, index * 8 + 0, jindex * 8 + 600,8,8);				
		}
		if(map[index][jindex] == 9){
			ctx.drawImage(rfloor3Image, index * 8 + 0, jindex * 8 + 600,8,8);				
		}
		if(map[index][jindex] == 0){
			ctx.drawImage(stoneImage, index * 8 + 0, jindex * 8 + 600,8,8);				
		}	
			
		}
	}*/
	if(sword1Ready){
		for(var i =0;i<bulletlist.length;i++){
//                        bulletlist[i].x-=herosetx;
//                        bulletlist[i].y-=herosety;
var ticon = bulletlist[i].icon;
			ctx.save();
			if(bulletlist[i].name == "bullet"){
				ticon = hero.weapon.icon;
			}
			if(isNegative(bulletlist[i].ex-bulletlist[i].bx)){
			ctx.translate(bulletlist[i].x + xdifference,bulletlist[i].y + ydifference);
			ctx.rotate(bulletlist[i].A-135*Math.PI/180);
			//console.log(bulletlist[i].A);
			ctx.drawImage(ticon,bulletlist[i].x-10-(bulletlist[i].x) + xdifference-xdifference,bulletlist[i].y-5 + ydifference-bulletlist[i].y-ydifference,16,16);
			}
			else{
			ctx.translate(bulletlist[i].x + xdifference,bulletlist[i].y + ydifference);
			ctx.rotate(bulletlist[i].A+45*Math.PI/180);
			//console.log(bulletlist[i].A);
			ctx.drawImage(ticon,0,0/*bulletlist[i].x-(bulletlist[i].x) + xdifference-xdifference,bulletlist[i].y-5 + ydifference-bulletlist[i].y-ydifference*/,16,16);
			}
			ctx.restore();
		
		}
	} else { 
		ctx.fillStyle = 'blue';
		for(var i =0;i<bulletlist.length;i++){
//                        bulletlist[i].x-=herosetx;
//                        bulletlist[i].y-=herosety;
			ctx.fillRect(bulletlist[i].x-10,bulletlist[i].y-5,20,20);
		}
	}

	for	(var index = 0; index < thinglist.length; index++) {
			if(thinglist[index].name == "potion"){
			ctx.drawImage(mihpImage, thinglist[index].x + xdifference, thinglist[index].y + ydifference);				
		}
			else if(thinglist[index].name == "shell"){
				ctx.drawImage(shellImage, thinglist[index].x + xdifference, thinglist[index].y + ydifference);	
			}
			else if(thinglist[index].name == "goblin"){
				ctx.drawImage(monsterImage, thinglist[index].x + xdifference, thinglist[index].y + ydifference);	
			}
	}
	for	(var index = 0; index < realthinglist.length; index++) {
		if(realthinglist[index].ininv == false){
			ctx.drawImage(realthinglist[index].icon, realthinglist[index].x + xdifference, realthinglist[index].y + ydifference);
		}		
	}
	for	(var index = 0; index < monsterlist.length; index++) {
			if(monsterlist[index].name == "goblin"){
				ctx.drawImage(monsterImage, monsterlist[index].x + xdifference, monsterlist[index].y + ydifference);
			}
			else if(monsterlist[index].name == "orcwarrior"){
				ctx.drawImage(orc2Image, monsterlist[index].x + xdifference, monsterlist[index].y + ydifference);
			}
			else if(monsterlist[index].name == "orcmage"){
				ctx.drawImage(orc3Image, monsterlist[index].x + xdifference, monsterlist[index].y + ydifference);
			}
			else if(monsterlist[index].name == "orccaptain"){
				ctx.drawImage(orc1Image, monsterlist[index].x + xdifference, monsterlist[index].y + ydifference);
			}
				ctx.fillStyle="#a3a3c2";
				//ctx.fillRect(monsterlist[index].x+xdifference,monsterlist[index].y+ydifference,monsterlist[index].x+32+xdifference,monsterlist[index].y+30+ydifference)
				ctx.fillRect(monsterlist[index].x+xdifference,monsterlist[index].y+32 + ydifference,32,6);
				ctx.fillStyle="#008ae6";
				ctx.fillRect(monsterlist[index].x+xdifference,monsterlist[index].y+32+ydifference,(monsterlist[index].hp/monsterlist[index].maxhp)*32,6);
				
			
	}
	
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
		ctx.drawImage(tbImage, 800, 0);
	}
	
	if (tbReady) {
		ctx.drawImage(tbImage, 900, 0);
	}
	
	if (spdReady) {
		ctx.drawImage(spdImage, 805, 150);
	}
	if(ustop){
		if (backReady) {
			ctx.drawImage(backImage, 450, 274);
		}
	}
	else if(dstop){
		if (frontReady) {
			ctx.drawImage(frontImage, 450, 274);
		}
	}
	else if(rstop){
		if (rsideReady) {
			ctx.drawImage(rsideImage, 450, 274);
		}
	}
	else if(lstop){
		if (lsideReady) {
			ctx.drawImage(lsideImage, 450, 274);
		}
	}	
	if (monsterReady) {
		ctx.drawImage(monsterImage, 805, 190);
	}
	
	if (mihpReady) {
		ctx.drawImage(mihpImage, 805, 240);
	}
	if (coinReady) {
		ctx.drawImage(coinImage, 805, 290);
	}	
	if (optReady) {
		ctx.drawImage(optImage, 805, 10);
	}
	if(selcweapon){
		ctx.fillStyle = "#ff0000";
					ctx.fillRect( 950, 50,64,64);

	}
		ctx.drawImage(hero.weapon.icon, 950, 50,64,64);
	if(selcarmor){
		ctx.fillStyle = "#ff0000";
					ctx.fillRect( 950, 150,64,64);

	}
		ctx.drawImage(hero.armor.icon, 950, 150,64,64);
	
	if (bagReady) {
		ctx.drawImage(bagImage, 820, 462);
	}
	
	/*if (invReady) {
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
	}	*/

	// Score


	var health=Number(hero.exp);
	ctx.fillStyle="#a3a3c2";
	ctx.fillRect(0,0,800,20);
	ctx.fillStyle="#008ae6";
	ctx.fillRect(0,0,(health/1900)*800,20);
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Arial";
	ctx.font = "30px VT323";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillStyle="#b30000";
	ctx.fillRect(805,100,90,30);
	ctx.fillStyle="#00cc00";
    
	ctx.fillRect(805,100,(Math.floor(hero.hp)/maxhp)*90,30);
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "20px Arial";
	ctx.font = "25px VT323";
	maxhp = 100 + (Number(hero.remort)-1)*10;
	ctx.fillText(hero.name.toUpperCase(), 805, 50);
	ctx.textAlign = "right";
	ctx.textBaseline = "top";
	ctx.fillStyle = "#000000";
	ctx.font = "20px Arial";
	ctx.font = "25px VT323";
	ctx.fillText("" + hero.remort, 440, 0);
	ctx.fillText("" + hero.speed, 900, 160);
	ctx.fillText("" + localStorage.monstersCaught, 900, 210);
	ctx.fillText("" + localStorage.mihps, 880, 250);
	ctx.fillText("" + gold + "gp", 900, 290);
	ctx.font = "10px Arial";
	ctx.font = "15px VT323";
	ctx.fillText(Math.floor(hero.hp) + "/" + maxhp, 870, 110);
	ctx.fillStyle = "#FF0000";
	ctx.font = "100px VT323";
	if(ded){
	ctx.fillText("ur ded!", 418, 166);
	}
	if(invfull<40){
	ctx.fillText("inventory full!", 680, 360);
	}

	var mmapx = 813;
	var mmapy = 410;
	

	if (atinv&&invReady) {
		ctx.drawImage(invImage, 50, 139,560,320);
		ctx.fillStyle = "#ff0000";
		if(!selcweapon&&!selcarmor){
		ctx.fillRect(298+((invvalue)%4)*80,147+(Math.floor((invvalue)/4))*80,64,64);
		}
		else{
		}
		ctx.fillStyle = "#ffffff";
		ctx.font = "30px VT323";
		ctx.textAlign = "left";
	try{

		for(var iterinv = 0; iterinv < inv.length; iterinv++){
			ctx.drawImage(inv[iterinv].icon, 298+((iterinv)%4)*80, 147+(Math.floor((iterinv)/4))*80,64,64);
		}
		
		if(!selcarmor && !selcweapon&inv[invvalue].id == "weapon"){
			ctx.drawImage(inv[invvalue].icon,150,156,64,64);
			ctx.fillStyle = "#ffffff";
			ctx.font = "30px VT323";
			ctx.textAlign = "left";
			if(inv[invvalue].ex == 1){
				ctx.fillText(inv[invvalue].name + " of " + inv[invvalue].brand,50,220);
			}
			else{
				ctx.fillText(inv[invvalue].name,50,220);
			}
			ctx.fillText("(+"+inv[invvalue].tohit+",+"+inv[invvalue].todam+")",50,250)
			ctx.fillText("Sell("+(inv[invvalue].price + inv[invvalue].price*inv[invvalue].tohit*inv[invvalue].todam+10*inv[invvalue].ex)+"gp)",50,390);
			ctx.fillText("Wear",50,430);
		}
		else if(selcweapon){
			ctx.drawImage(hero.weapon.icon,150,156,64,64);
			ctx.fillStyle = "#ffffff";
			ctx.font = "30px VT323";
			ctx.textAlign = "left";
			if(hero.weapon.ex == 1){
				ctx.fillText(hero.weapon.name + " of " + hero.weapon.brand,50,220);
			}
			else{
				ctx.fillText(hero.weapon.name,50,220);
			
			}
			ctx.fillText("(+"+hero.weapon.tohit+",+"+hero.weapon.todam+")",50,250)
		}
		else if(!selcarmor&&!selcweapon&&inv[invvalue].id == "armor"){
			ctx.drawImage(inv[invvalue].icon,150,156,64,64);
			ctx.fillStyle = "#ffffff";
			ctx.font = "30px VT323";
			ctx.textAlign = "left";
		if(inv[invvalue].ex == 1){
			ctx.fillText(inv[invvalue].name + " of " + inv[invvalue].brand,50,220);
		}
		else{
			ctx.fillText(inv[invvalue].name,50,220);
		}
			if(inv[invvalue].plusac == 0){
				ctx.fillText("["+inv[invvalue].ac+"]",50,250);
			}
			else if(inv[invvalue].plusac > 0){
				ctx.fillText("["+inv[invvalue].ac+",+"+inv[invvalue].plusac+"]",50,250)
			}
			ctx.fillText("Sell("+(inv[invvalue].price + inv[invvalue].price*inv[invvalue].plusac+10*inv[invvalue].ex)+"gp)",50,390);
			ctx.fillText("Wear",50,430);
		}
		else if(selcarmor){
		ctx.drawImage(hero.armor.icon,150,156,64,64);
		ctx.fillStyle = "#ffffff";
		ctx.font = "30px VT323";
		ctx.textAlign = "left";
		if(hero.armor.ex == 1){
			ctx.fillText(hero.armor.name + " of " + hero.armor.brand,50,220);
		}
		else{
		ctx.fillText(hero.armor.name,50,220);
		
		}
			if(hero.armor.plusac == 0){
				ctx.fillText("["+hero.armor.ac+"]",50,250);
			}
			else if(hero.armor.plusac > 0){
				ctx.fillText("["+hero.armor.ac+",+"+hero.armor.plusac+"]",50,250)
			}
		}
	}catch(ex){
		console.log(ex);
		ctx.fillText('Does Not Exist',50,220);
	}
	}else{
		invvalue = 0;
	}
};
var renderx = function () {
	ctx.fillStyle="#558000";
	ctx.drawImage(TitleImage,0,0);
};
var renderN = function() {
	if (nameReady) {
        ctx.drawImage(nameImage,0, 0);
        }
	ctx.restore();
	ctx.fillStyle='black';
	ctx.font = "100px VT323";
	ctx.textAlign = "center";
	
	ctx.fillText(hero.name,355,231);
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
function isNegative(n){
	if(Math.abs(n)==n){
		return false;
	} else {
		return true;
	}
}

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
var then = Date.now();

// Let's play this game!
window.onload = function() {
reset();
main();
}
