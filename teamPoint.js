var Point=[];
var soDoi = 3; 								// config here to debug
var numDoi=1;
var tenDoix=800,tenDoiy=140;
var daTinhDiem=false;

for (var i = 0; i<soDoi; i++) {
	Point.push(0);
}

function doiHienTai() {
    ctx.font = "40px Verdana";
    // Create gradient
    var gradient = ctx.createLinearGradient(tenDoix, tenDoiy, tenDoix+200, tenDoiy);
    gradient.addColorStop("0", "#1de0d7");
    //gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("0.5", "#731a9c");
    // Fill with gradient
    ctx.fillStyle = gradient;
    // ctx.fillText("đánh rắm!", 10, 90);
    ctx.fillText("Đội "+numDoi+": "+Point[numDoi-1],tenDoix,tenDoiy);
}


function tinhDiem() {
	Point[numDoi-1]+=10;
	dung.play();
}

function truDiem() {
	Point[numDoi-1]-=10;

}