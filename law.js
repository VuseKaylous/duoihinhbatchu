var lawImg = new Image();
var opening = new Image();
var background = new Image();

var justInCase=0;
var lawX=60,lawY=680;

var widthFirstSquare=40;

var isTheme = false;

function drawLaw() {
    ctx.drawImage(background,0,0,1080,680);
    movingSquares();
    
    if (justInCase==0) {
        ctx.drawImage(opening,-10,50);
    }
    if (justInCase==1) {
        insertLaw();
    }
    
}

function movingSquares() {
    ctx.fillStyle = "#60238c";

    /* duoi */
    ctx.fillRect(0,590,widthFirstSquare,40);
    for (let i=0;i<1000;i++) {
        if (i*80+widthFirstSquare+40>1080) break;
        ctx.fillRect(i*80+widthFirstSquare+40,590,40,40);
    }
    widthFirstSquare--;
    if (widthFirstSquare==-40) widthFirstSquare=40;

    /* tren */
    ctx.fillRect(1080-widthFirstSquare,50,widthFirstSquare,40);
    for (let i=0;i<1000;i++) {
        if (1040-widthFirstSquare-i*80<0) break;
        ctx.fillRect(1000-widthFirstSquare-i*80,50,40,40);
    }

}

function insertLaw() {
    if (lawY>110) lawY-=10;
    ctx.drawImage(lawImg,lawX,lawY);
}

function moveScreen2() {
	if(isTheme == false){
		isTheme = true;
		theme.play();
	}else{
		justInCase ++;
		if (justInCase == 2){
			screen = 2;
			theme.stop();
		}
	}
}