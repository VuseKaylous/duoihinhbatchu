var endImg = new Image();
endImg.src = "images/ending.png";

var endY = 680 ;

var nextImg = new Image();
nextImg.src = "images/next.png";

var isnn = false;

function endShow() {
	
	if(isnn == false){
		isnn = true;
	//	hide.play();
	}
	
	endMove();
	
    ctx.drawImage(endImg,0,endY);
	
	
	ctx.fillStyle = 'orange';
	ctx.font = "30px Verdana";
//	ctx.fillText("Vòng kế tiếp" , 650 ,endY + 560);
	
	ctx.font = "20px Verdana";
	ctx.fillStyle = 'white';
	ctx.fillText("Có thể bạn chưa biết : Trái đất của chúng ta quay quanh mặt trời..." , 10 ,endY + 670);
	
//	ctx.drawImage(nextImg , 874 , endY + 480 , 206 , 200);
}



function mouseEnd(){
	if(intoRectangle(874 , 480 , 206 , 200)){
		window.location = "file:///C:/Users/Admin/OneDrive/Desktop/Đuổi%20hình%20bắt%20chữ%202/index.html";
	}
}
function endMove(){if(endY > 0) endY -= 10;}
function intoRectangle(x , y , w , h){ return (x < mouseX && mouseX < x + w && y < mouseY && mouseY < y + h );}