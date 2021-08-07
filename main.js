function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    //webcam
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    //loading posenet
    posenet = ml5.poseNet(video, model_loaded);
    posenet.on("pose", gotposes);
}

function model_loaded() {
    console.log("poseNet is loaded.");
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function take_snapshot() {
    save("filter.png");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x position - " + results[0].pose.nose.x);
        console.log("nose y position - " + results[0].pose.nose.y);
    }
}