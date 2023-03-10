function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#2FF430');

    document.getElementById("answer").innerHTML = "font size of the text will be = " + difference + "px";
 textSize(difference);
 fill('#FFE787');
 text('VIVAAN', 50, 400);
}

function modelLoaded() {
    console.log('PoseNet is Initialized !');
}


difference = 0;
rightWristX = 0;
leftWristX = 0;

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWrristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}