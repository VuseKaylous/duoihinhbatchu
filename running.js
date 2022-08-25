var cauHoi = [];
// var clock= new Image();
// var timeUp = new Image();
var timeUpGif = [];
var dapAn = [
    "Ba phải",                              // 0
    "Bảng điểm",                            // 1
    "Cửa hiệu",                             // 2
    "Bom ba càng",                          // 3
    "Áo cổ lọ",                             // 4
    "Cá biệt",                              // 5
    "Phi kim",                              // 6
    "Bát ô tô",                             // 7
    "Bi đông",                              // 8
    "Cao răng",                             // 9
    "Bình giữ nhiệt",                       // 10
    "Chim sâu",                             // 11
    "Cuống quýt",                           // 12
    "Khế văn",                              // 13
    "Phố hàng chiếu",                       // 14
    "Eo biển",                              // 15
    "Giáo điều",                            // 16
    "Kì thú",                               // 17
    "Thạch cao",                            // 18
    "Mực một nắng",                         // 19
    "Ma tốc độ",                            // 20
    "Nhật thực",                            // 21
    "Sổ gạo",                               // 22
    "Nhà tranh",                            // 23
    "Trường bán công",                      // 24
    "Phim kiếm hiệp",                       // 25
    "Phố giáp bát",                         // 26
    "Cáo lỗi",                               // 27
    "Thất thần",                            // 28
    "Tiên cung"                                // 29
];
// var showAnsPic=new Image();
var tohruGif = [];

var latren=new Image();
var laduoi = new Image();

var timeCount=false;
var timeLeft=20;
var countTime=0;
var danh_dau=0;

var soGifTohru=0;
var soGifSponge=0;
var playBuzzerSound=false;

var xemAns=false;
var quayxe=false;

var latrenY=-180,laduoiY=680;
var showQuesX=-700,showQuesY=150,phase=0;


for (let i=0;i<17;i++) {
    tohruGif.push(new Image());
    tohruGif[i].src="images/frames_tohru/"+i.toString()+".gif";
}

for (let i=0;i<10;i++) {
    timeUpGif.push(new Image());
    timeUpGif[i].src="images/spongebob_frames/"+i.toString()+".gif";
}

// var opai_opacity=0;
for (let i=0;i<soQuestion;i++) {
    cauHoi.push(new Image());
    // dapAn.push(new Image());
}

function aQuery(e) {
    doiHienTai();
    // ctx.drawImage(cauHoi,0,0);z
    incomingLeaf();
    thoiGian(e);
    if (!xemAns) {
        // ctx.drawImage(showAnsPic,830,565);
        if (quayxe) quayxe=false;
    } else {
        // console.log(dapAn[e]);
        showAns(e);
        if (quayxe) {
            // if (e==soQuestion-1) ketThucChuongTrinh=true;
            questionHienTai++;
            quayxe = false;
            xemAns=false;
            daTinhDiem=false;

            countTime=0;
            timeLeft=20;
            danh_dau=0;
            timeCount=false;

            showQuesX=-700;
            showQuesY=150;
            phase=0;

            soGifSponge=0;
            playBuzzerSound=false;

            latrenY=-180;
            laduoiY=680;

            isDelaying=true;

            if (questionHienTai%(soQuestion/soDoi)==0) {
                screen=4;
				
            }
            return;
        }
    }
}

/*
function cauHoiSoMay(e) {
    ctx.fillStyle="red"; #ab11bf
    ctx.font="100px Comic Sans MS";
    ctx.textAlign="center";
    ctx.fillText("Câu hỏi số " + (e+1),cvs.width/2,cvs.height/2);
    // cvs.style.opacity="0.5";
    cvs.style.opacity=opai_opacity;
    if (opai_opacity<1) opai_opacity+=0.01
}
*/

function thoiGian(e) {
    /* setup dong ho */
    if(timeCount) countTime++;
    timeLeft = 20 - countTime/60; // config here to debug
    
    if(timeLeft <= 0 ){
        timeLeft = -0.3;
        timeCount = false;
        danh_dau=1;
    }
    
    if(danh_dau == 1 ){
        // if (!xemAns) ctx.drawImage(timeUp,0,0);
        // else 
		timeWait.stop();
        ctx.drawImage(cauHoi[e],10,150,700,400) // need 2 update
        if (!playBuzzerSound) {
            playBuzzerSound=true;
            wrong_answer.play();
        }
        if (soGifSponge<80) {
            ctx.drawImage(timeUpGif[Math.floor(soGifSponge/8)],120,180);
            soGifSponge++;
        }
        
    } else {
        // ctx.drawImage(cauHoi[e],0,150,700,400); // ahihi ----------------------------- fuck u kaylous
        questionShowUp(e);
    }
    
    timeLeft = parseInt(timeLeft);

    // ctx.fillStyle="pink";
    // ctx.fillRect(920,420,35,35); // cái này để tìm vị trí text

    ctx.fillStyle = 'black';
    ctx.font = "60px Algerian";
    if(timeLeft >= 10) ctx.fillText(timeLeft , 860 , 450);
    else ctx.fillText(timeLeft , 875 , 480);
    // ctx.drawImage(clock , 850 , 200 , 170 ,170);
    // console.log(soGifTohru);

    // ctx.fillRect(850,200,140,200); // cái này để tìm vị trí tohru
    
	
	quesImg.draw();
	quesImg.update();
  //  ctx.drawImage(tohruGif[Math.floor(soGifTohru/5)],650,110);
  //  soGifTohru++;
  //  if (soGifTohru>17*5-1) soGifTohru-=17*5;
}

// var variableThatExistToTest=100;

function mouseQuestion() {
 //   if (posRectangle(850,200,990,400)) {
    // if (posRectangle(920,420,955,455)) {
//		timeCount = true;
//    }
    /* show answer button */
    /*
    if (posRectangle(830,565,1080,680)) {
        xemAns=true;
        timeCount=false;
        showAnsx=0;
        showAnsy=680;
    }
    */
}

var showAnsx=400,showAnsy=80;
function showAns(e) { // need 2 update
    /*
    if (showAnsy>580) showAnsy-=4;
    ctx.drawImage(dapAn[e],showAnsx,showAnsy); 
    */
    ctx.fillStyle="orange"; 
    ctx.font="30px Verdana";
    ctx.textAlign="center";
    ctx.fillText(dapAn[e],895,550);
    ctx.fillStyle="white";
    if (showAnsy>0) {
        ctx.fillRect(710,480,showAnsx,showAnsy);
        showAnsy-=5;
    }
}


/*----------------------decoration--------------------*/


function questionShowUp(e) {
    
    if (phase==0) {
        if (showQuesX<50) showQuesX+=16;
        else phase++;
    }
    if (phase==1) {
        if (showQuesX>-50) showQuesX-=4;
        else phase++;
    }
    if (phase==2) {
        if (showQuesX<10) showQuesX+=2;
        else phase++;
    }
    // console.log(showQuesX);
    ctx.drawImage(cauHoi[e],showQuesX,showQuesY,700,400);
}



function incomingLeaf() {
    ctx.drawImage(latren,0,latrenY);
    ctx.drawImage(laduoi,0,laduoiY);
    if (latrenY<-50) latrenY+=5;
    if (laduoiY>550) laduoiY-=5;
}
