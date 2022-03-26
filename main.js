function preload() {

}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(150, 250);
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();
}

function draw() {

    image(video, 100, 50, 400, 300)

    // rectangle code
    stroke(0,255,0);
    fill(0,255,0);
    rect(25, 50, 30, 325);

    rect(545, 40, 30, 325);

    rect(40, 40, 500, 30);

    rect(40, 350, 500, 30);


    //circle code
    stroke(255, 0, 0);
    fill(255,0,0);
    circle(40, 40, 75);

    circle(40, 365, 75);

    circle(560, 40, 75);

    circle(560, 365, 75);

}

function snapshot() {
    save('myFrameSelfie.png')
}