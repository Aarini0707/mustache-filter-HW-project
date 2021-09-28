noseX=0;
noseY=0;

function preload(){
    mustache=loadImage('https://i.postimg.cc/fLbjmfTm/animated-mustache.png');
}

function setup(){
    canvas= createCanvas(300,300); //It creates a canvas of width 300, height 300 & stores it in the canvas variable
    canvas.center(); //It brings the canvas to the center
    video= createCapture(VIDEO); //It creates a camera but displays it in a component on the left, stores it in the video variable
    video.size(300,300);
    video.hide(); //It hides the camera
    poseNet=ml5.poseNet(video,modelLoaded); //It initializes/loads poseNet and stores it in the poseNet variable
    poseNet.on('pose',gotPoses); //It starts recognizing 17 keypoints for every pose
}

function draw(){
    image(video,0,0,300,300); //It uploads the camera inside the canvas
    image(mustache,noseX,noseY,30,30);
}

function take_snapshot(){
    save('img_mustache.png'); //It clicks a picture and stores it in a file in the device being used
}

function modelLoaded(){
    console.log("model loaded"); //It prints the sentence "model loaded" in the console
}

function gotPoses(results){
    if(results.length>0){ //If the array(results) holds a value greater than 0
        console.log(results); //It prints the array in the console
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-5;
        console.log("nose x= "+noseX); //It fetches x position of the nose and prints it in the console
        console.log("nose y= "+noseY); //It fetches y position of the nose and prints it in the console
    }
}

