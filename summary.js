var clapping = [];

var clappingnum=0;
var cheeringOnceOnlyBitches=false;

for (let i=0;i<4;i++) {
	clapping.push(new Image());
	clapping[i].src="images/yui_and_azusa/"+i.toString()+".gif";
}

function tongKetDiem() {
//	ctx.drawImage(clapping[Math.floor(clappingnum/5)],350,100);
	ctx.fillStyle = "black";
	ctx.fillRect( 0 , 0 , 1080 , 680);
	
	congraImg.draw();
	congraImg.update();
	
	clappingnum++;
	if (clappingnum>19) clappingnum-=20;
    ctx.fillStyle = "white";
    ctx.font = "40px Verdana";
	ctx.fillText("Chúc mừng đội "+numDoi+" đã được "+Point[numDoi-1]+" điểm!", 180,600);

	if (!cheeringOnceOnlyBitches) {
		cheering.play();
		cheeringOnceOnlyBitches=true;
	}
}

function mouseReturn() {}