leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#f7bcbc");
    document.getElementById("font_size").innerHTML = "The size of the text = " + difference + "px";
    textSize(difference);
    fill("red");
    text("Arundhati", 20, 200);
}

function ModelLoaded(){
    console.log("PoseNet is loaded");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("Left wrist x = " + leftwristX + "Right wrist x = " + rightwristX + "Difference = " + difference);
    }
}