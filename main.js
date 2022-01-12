//width and height of canvas will be 350,350
status="";

function setup(){
    canvas = createCanvas(350, 350);
    canvas.center();
  video = createCapture(VIDEO);
  video.size(350,350);
  video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
}
function draw(){
    image(video,0,0,350,350);
}