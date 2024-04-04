leftX = 0;
leftY = 0;
rightX = 0;
rightY = 0;
mega = "j.mp3";
music2="music2.mp3"
function preload(){
    song = loadSound("music2.mp3");
    song = loadSound("j.mp3");
}
function setup(){
    canvas = createCanvas(600, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
draw(VIDEO);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
    
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
    }