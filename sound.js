class Sound{
	constructor(src){
		this.sound = document.createElement("audio");
		this.sound.src = src;
		this.sound.setAttribute("preload" , "auto");
		this.sound.setAttribute("controls", "none");
		this.sound.style.display = "none";
		document.body.appendChild(this.sound);
	}
	
	play(){
		this.sound.play();
	}
	
	stop(){
		this.sound.pause();
	}
}


// var het_gio = new Sound("sounds/het_gio.mp3");
var dung = new Sound("sound/correct_answer_cutver.mp3");
var cheering = new Sound("sound/cheering.mp3");
var wrong_answer = new Sound("sound/WAsound.mp3");

var theme = new Sound("sound/theme.mp3");

var timeWait = new Sound("sound/timeWait.mp3");

var hide = new Sound("sound/hideandseek.mp3");