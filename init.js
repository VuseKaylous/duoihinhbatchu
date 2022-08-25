/* thiết lập frames + màn hình start */

var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

cvs.addEventListener('click' , mouseClick);
document.addEventListener("keydown",kdown);
// cvs.addEventListener('mousemove' , mouseHover);


var soQuestion=30; // need 2 update
var screen = 1; 							// config here to debug
var ketThucChuongTrinh=false;
var questionHienTai=0;

var isDelaying=true;
var countdownforwaiting=0;

var daTinhDiem=false;

function start(){
	cvs.width = cvs.width;
	
/* Màn hình start ban đầu */	
	if(screen == 1){
        // màn hình start
        drawLaw();
	}
	if (screen==2) {
		if (soQuestion>questionHienTai) {
			if (!isDelaying) aQuery(questionHienTai);
			else {
				quangCao();
				if (countdownforwaiting<100) countdownforwaiting++;
				else {
					countdownforwaiting=0;
					isDelaying=false;
				}
			}

		}
		// if (ketThucChuongTrinh) screen=3;
		else{
			screen=3;
			hide.play();
		}
	}
	if (screen==3) {
		endShow();
	}
	if (screen==4) {
		tongKetDiem();
	}
}

/* load ảnh */
function load(){ // need 2 update
/* init */
	
    
/* law */
	lawImg.src="images/law.jpg";
	opening.src="images/logo.png";
	background.src="images/background.png";
    
/* running */
    for (let i=0;i<soQuestion;i++) {
		cauHoi[i].src="images/question_queue/question/"+i.toString()+".png";
		// dapAn[i].src="images/answer/"+i.toString()+".png";
		
	}
    // clock.src = "images/clock.png";
	//timeUp.src = "images/FBI.jpg";
	// showAnsPic.src= "images/showAns.png";

	latren.src= "images/upper_leaf.png";
	laduoi.src= "images/lower_leaf.png";

/* ending */
}

/* Xử lí chuột */

function mouseClick(e){
    mouseX = e.pageX - cvs.offsetLeft;
    mouseY = e.pageY - cvs.offsetTop;
	
	// if(screen == 0)	mouseStart();
	if(screen == 1)	{
		moveScreen2();
	}
	if(screen == 2) {
		mouseQuestion();
	}
	if(screen == 3)	mouseEnd();
	if (screen==4) {
		mouseReturn();
	}
}


function kdown(e) {
	// cvs.onkeydown
	// console.log(e);
	if (screen==2) {
		if (e.key==" ") {
			quayxe=true;
		}
		if (e.key=="z") {
			if (!daTinhDiem) {
				if (danh_dau==0) tinhDiem();
				xemAns=true;
				timeCount=false;
		        showAnsx=400;
		        showAnsy=80;
		        daTinhDiem=true;
				timeWait.stop();
			}
		}
		if(e.key == "c"){
			timeCount = true;
			timeWait.currentTime = 0;
			timeWait.play();
		}
		
	}
	
	if(screen == 4){
		if(e.key == "Enter"){
			screen = 2;
			numDoi++;
			cheeringOnceOnlyBitches=false;
		}
	}
	
	/*
	if (e.key=="ArrowRight") {
		numDoi++;
	}

	if (e.key=="ArrowLeft") {
		numDoi--;
	}
	
	if (e.key=="ArrowUp") {
		tinhDiem();
	}
	
	if (e.key=="-") {
		truDiem();
	}
	*/
}


/*------------------------ copy part-----------------------

function mouseHover(e){
	mouseX = e.clientX;
	mouseY = e.clientY;
	//console.log(mouseX,mouseY);
}

*/

function posRectangle(x1, y1 , x2, y2){return mouseX > x1 && mouseY > y1 && mouseX < x2  && mouseY < y2;}

function posCircle(x1, y1 , x2, y2, R){return (x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2) < R * R;}

/* 60 FPS */
function setups(){
	load();
	// initPlay();
	
	setInterval( start , 1000.0/60);
}


