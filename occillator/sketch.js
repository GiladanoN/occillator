
let minH = 60;
let maxH = 300;
let divC = 20;

let userDivs = (GetURLParameter('divs'));
if (userDivs && userDivs >= 5)
  divC = userDivs;

let totalW = 400;
let divW = totalW / divC;

let step;
let curOff = 0;

function setup()
{
  createCanvas(600,400);
  background(57);

  colorMode(HSB, 255, 100, 100);
  step = PI/64;
}

function draw()
{
  background(57);
  rectMode(CENTER);
  translate(width/2, height/2);

  let angle;
  translate(-totalW/2, 0);
  // let c = map(sin(curOff/8), -1, 1, 0, 255);
  // fill(c,80,100);
  for (i=0; i<divC; i++) {
    push();
    translate(divW * (i+0.5), 0);

    let d = dist(i+0.5, 0, divC/2, 0);
    let angle = map(d, 0, divC, 0, PI) + curOff;
    // angle = curOff + i*step;

    c = (map(i, 0, divC, 0, 255) + (i+curOff)*10) %255;
    fill(c,80,100);

    let val = abs(sin(angle));
    let h = map(val, 0, 1, minH, maxH);
    rect(0,0,divW-2,h);
    pop();
  }
  curOff += step;

}

let looping = true;
function mouseClicked() {
  if (looping) {
    noLoop();
    console.log("paused");
  }
  else {
    loop();
    console.log("continued");
  }
  looping = !looping;
}

// function setup()
// {
//   createCanvas(600,400);
//   background(57);
//
//   colorMode(HSB, 255, 100, 100);
//   step = PI/64;
// }
//
// function draw()
// {
//   background(57);
//   rectMode(CENTER);
//   translate(width/2, height/2);
//
//   let angle;
//   translate(-totalW/2, 0);
//   // let c = map(sin(curOff)/3, 0, TWO_PI/3, 0, 255);
//   let c = map(sin(curOff/8), -1, 1, 0, 255);
//   fill(c,80,100);
//   for (i=0; i<divC; i++) {
//     push();
//     translate(divW * (i+0.5), 0);
//
//     let d = dist(i+0.5, 0, divC/2, 0);
//     let angle = map(d, 0, divC, 0, PI) + curOff;
//     // angle = curOff + i*step;
//
//     let val = abs(sin(angle));
//     let h = map(val, 0, 1, minH, maxH);
//     rect(0,0,divW-2,h);
//     pop();
//   }
//   curOff += step;
//
// }
