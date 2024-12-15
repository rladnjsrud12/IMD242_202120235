/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates bounding box tracking of facial features on live video through ml5.faceMesh.
 */

let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };

function preload() {
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  faceMesh.detectStart(video, gotFaces);
}

function draw() {
  // draw the webcam video
  image(video, 0, 0, width, height);

  // draw the faces' bounding boxes
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];

    // draw the bounding box of face parts
    // 얼굴
    fill(255);
    stroke(0);
    strokeWeight(10);
    rect(
      face.faceOval.x,
      face.faceOval.y,
      face.faceOval.width,
      face.faceOval.height
    );

    //입
    fill(0, 0, 0, 70);
    noStroke();
    rect(face.lips.x, face.lips.y, face.lips.width, face.lips.height);

    //  눈
    fill(255);
    rect(
      face.leftEye.x,
      face.leftEye.y,
      face.leftEye.width,
      face.leftEye.height
    );
    rect(
      face.rightEye.x,
      face.rightEye.y,
      face.rightEye.width,
      face.rightEye.height
    );

    //눈썹
    fill(89, 41, 9);
    rect(
      face.leftEyebrow.x,
      face.leftEyebrow.y,
      face.leftEyebrow.width,
      face.leftEyebrow.height
    );

    rect(
      face.rightEyebrow.x,
      face.rightEyebrow.y,
      face.rightEyebrow.width,
      face.rightEyebrow.height
    );

    // draw the center points of face parts
    noStroke();
    fill(0);
    circle(face.leftEye.centerX, face.leftEye.centerY, 20);
    circle(face.rightEye.centerX, face.rightEye.centerY, 20);
  }
}

function gotFaces(results) {
  faces = results;
}
