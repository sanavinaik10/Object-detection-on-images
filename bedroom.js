img = "";
function preload(){
    img = loadImage("bedroom.jpg");
}
function setup(){
    canvas = createCanvas(600,420);
    canvas.position(450,190);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: In Detection Mode";
}
function modelLoaded(){
    console.log("Model is loaded!!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function draw(){
}
function gotResult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        objects = result;
    }
}