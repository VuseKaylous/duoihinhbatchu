
/*
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
*/

var delayPic = [];
var delayPicNum = 0;
for (let i=0;i<24;i++) {
	delayPic.push(new Image());
	delayPic[i].src = "images/frames_bass_player/"+i.toString()+".gif";
}

function quangCao() {
/*	
	// console.log(delayPicNum);
	ctx.drawImage(delayPic[Math.floor(delayPicNum/5)],90,0,600/2*3,338/2*3);
	delayPicNum++;
	if (delayPicNum>24*5-1) delayPicNum-=24*5;

    ctx.fillStyle = "#731a9c";
    ctx.font = "40px Arial";
    ctx.fillText("Loading...",450,600);
*/

	loadingImg.draw();
	loadingImg.update();

}

/*
function setups(){
	// quangCao();

	// initPlay();
	
	setInterval( quangCao , 1000.0/60);
}
*/