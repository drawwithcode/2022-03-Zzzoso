let video;
let button1;
let button2;

function setup() {
  createCanvas(640, 480);

  button1 = createButton("Foto");
  button1.mousePressed(takesnap);
  button1.mouseOver(changeStyle);
  button1.mouseOut(resetStyle);

  button2 = createButton("Applica Filtro");
  button2.mousePressed(applyfilter);
  button2.mouseOver(changeStyle2);
  button2.mouseOut(resetStyle2);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  pixelDensity(1)
}

function takesnap() {
  image(video, 0, 0);
}

function applyfilter() {
  for (let col = 0; col < video.width; col += 40) {
    for (let row = 0; row < video.height; row += 40) {
      let x = col;
      let y = row;
      let c = video.get(x, y);

      push();
      translate(x, y);
      noFill();
      strokeWeight(20);
      stroke(color(c));
      //curve(x1, y1, x2, y2, x3, y3, x4, y4)
      curve(x, y, random(8000), random(-8000), random(10), 0, 0, 0, 0, 0);
      //ellipse(x, y, random(10));
      pop();
    }
  }
}

function keyPressed() {
  if (key === "s") {
    saveCanvas("portrait.jpg");
  }
}

function changeStyle() {
  button1.style("color", "purple");
}

function resetStyle() {
  button1.style("color", "aliceblue");
}

function changeStyle2() {
  button2.style("color", "green");
}

function resetStyle2() {
  button2.style("color", "aliceblue");
}
