video= "";
status="";
objects=[];
function preload() {
video= createVideo('video.mp4');
video.hide();
}

function setup() {
canvas = createCanvas(480, 380);
canvas.center();
}

function draw(){
image(video, 0, 0, 480, 380);
if(status !=""){
objectDetector.detect(video, gotResult);

for (i=0; i < objects.length; i++) {
document.getElementById("status").innerHTML = "Status: Objects Detected";
document.getElementById("number_of_objects").innerHTML = "Number of objects detected are: " + objects.length;

fill("#80dce8");
percent = floor(objects[i].confidence * 100);
text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y +15);
noFill();
stroke("#80dce8");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
}
}

function start() {
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Object";
}

function modelLoaded(){
console.log("Model Loaded!");
status = true;
video.loop();

video.speed(1);
video.volume(0); 
}

function gotResult(error, result){
if(error){
console.log(error);
}
console.log(result);
objects = result;
}

