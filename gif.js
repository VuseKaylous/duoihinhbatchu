class Gif {
	constructor(x , y , width , height, sizeW ,sizeH , imgPath, frame, timE){
		this.x = x;
		this.y = y;
		this.imgPath = imgPath;
		this.img = new Image();
		this.img.src = this.imgPath;
		this.count = -1 ;
		
		this.timE = timE;
		
		this.w = width;
		this.h = height;
		this.sizeW = sizeW;
		this.sizeH = sizeH;
		
		this.curframe = -1;
		this.frame = frame;
	}
	
	load(){
		this.img.src = this.imgPath;
	}
	
	update(){
		this.count ++;
		
		if(this.count % this.timE == 0){
			this.curframe ++ ;
			this.curframe %= this.frame;
		}
		
		
		
	}
	
	draw(){
		ctx.drawImage(this.img, this.curframe* this.w , 0 ,this.w , this.h,
					this.x , this. y, this.sizeW , this.sizeH);
	}
}

var loadingImg = new Gif( 0 , 0 , 1200 , 675 , 1080 , 680 , "images/loading.png" , 30 , 1);

var quesImg = new Gif( 750 , 150 , 370 , 300 , 300 , 243 , "images/quesImg.png" , 19 , 5);

var congraImg = new Gif( 0 , -100 , 400 , 251 , 1080 ,  677.7 , "images/congratulate.png" , 3, 20);