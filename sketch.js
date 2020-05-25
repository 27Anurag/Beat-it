var song;
var button;
var f = true; 
var press;
var t_;
var c = 0.8;
var presses = [] ;
var started = false ;

var predef_beats = {
	// 69 ko replace kar s(n) ka beat freq sun kar, songs folder me hai dekh s(n)
	s1: 69 , 
	s2: 69 ,
	s3:  69,
	s4:  69,
	s5:  69,
	s6:  69,
	s7:  69,
	s8:  69,
	s9:  69,
	s10: 69, 
} ;



function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	song = loadSound("songs/s5.mp3",loaded);

	button = createButton("Play");
	button.position(windowWidth/2 - 200,  windowHeight/2);
	button.size(100,50);

	press = createButton("Tap on beat");
	press.position(windowWidth/2 + 200,  windowHeight/2);
	press.size(100,50);

}

function loaded(){
	// song.play()
}

function beat(){
	if (!presses.includes(t_)){
		presses.push(t_);

	}
	console.log("pressed") ;
}

function togglePlaying(){
	if (!song.isPlaying()){
		song.play();
		started = true ;
		button.html("Pause");
	}
	else{
		song.pause()
		button.html("Play");
	}
}

function button_logic(){
	if (mouseX < windowWidth/2 && mouseIsPressed){
		togglePlaying() ; 
	}
	if (mouseX > windowWidth/2 && mouseIsPressed){
		beat();
	}
}
//thoda play pause logic pe kaam karna hai, the time counter should stop 
// when paused, abhi aisa nahi ho raha hai
function decrement_sound(){
	if (t_ > 3){
		song.setVolume(c);
		if (c > 0){
			c -= 0.001
		}
	}
}

function analysis(){
	var result = [];
	for (var i = 1; i<= presses.length;i++){
		var q = presses[i] - presses[i-1] ;
		result.push(q) ;
	}

	var sum= 0;
 	for (var i =0; i<result.length; i++) {
		sum +=result[i];
	}

	var user_beat = sum / (result.length - 1)
	console.log(user_beat) ;
}


function draw() {

	button_logic();
	decrement_sound();

	// if (c <= 0.1 && f){
	// 	analysis();
	// 	f = false
	// }
	if (started) {t_ = floor(millis()/1000);}

	// analysis();


	
	console.log(presses)

}