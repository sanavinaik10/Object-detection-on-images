img = "";
objects = [];
function preload(){
    img = loadImage("kitchen.jpg");
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
    image(img, 0, 0, 600,420);
    if(status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Object Detected";
            fill("#FF0000");
            percentage = floor(objects[i].confidence * 100);
            text(objects[i].label+ " " + percentage + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
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