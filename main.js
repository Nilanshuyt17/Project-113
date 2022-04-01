function preload() {

}

function setup() {
    canvas = createCanvas(590, 430);
    canvas.position(125, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill("red");
    circle(30, 30, 20);
    rect(30, 30, 20);
}

function take_snapshot() {
    save("my_image.png");
}