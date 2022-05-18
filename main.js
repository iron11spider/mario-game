


function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	coinCollection=loadSound("coin.wav");
	game_over=loadSound("gameover.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");



	setSprites();
	MarioAnimation();

}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,300);
	video.parent("game_console");
	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on("pose",gotResult);
}

function draw() {
	game()
}

function modelLoaded(){
	console.log("model is loaded");
}

function gotResult(results){
	if(results.length>0){
		nose_x=results[0].pose.nose.x;
		nose_y=results[0].pose.nose.y;

	}
}






