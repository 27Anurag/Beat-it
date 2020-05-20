var song;
var slider;
var button;



function setup() {
	createCanvas(windowWidth/2, windowHeight/2);
	song = loadSound("songs/Avicii_Wake_Me_Up_Lyric_Video_.mp3",loaded);
	slider = createSlider(0, 1,0.5,0.01);
	button = createButton("Play");
	button.mousePressed(togglePlaying)

}

function loaded(){
	// song.play()
}

function togglePlaying(){
	if (!song.isPlaying()){
		song.play();
		button.html("Pause");
	}
	else{
		song.pause()
		button.html("Play");
	}
}

function draw() {
	background(0);
	song.setVolume(slider.value());

}