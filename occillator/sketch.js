
let minH = 120;
let maxH = 450;
let divC = 15;

let userDivs = (GetURLParameter('divs'));
if (userDivs && userDivs >= 5)
  divC = userDivs;

let totalW = 400;
let divW = totalW / divC;

let step;
let curOff = 0;

xm=0;

function setup()
{
  createCanvas(600,400,WEBGL);
  background(57);

  // noStroke();
  colorMode(HSB, 255, 100, 100, 10);
  // step = PI/64;
  // step = PI/128;
  step = PI/256;
}

function draw()
{
  xm+=1;
  background(57);
  rectMode(CENTER);
  // translate(width/2, height/2);

  // translate(-350,0,0);
  // translate(0,200,0);
  rotateX(-PI);
  rotateX(-QUARTER_PI/4);
  // rotateZ(PI/8);
  rotateY(4.75*QUARTER_PI);
  translate(-totalW/2-500, -200, -500);
  // translate(-totalW/2, 0, 0);

  // camera(-230, 0, 100,
  //        0,0,0,
  //        1,2,0);
  ortho(totalW/2, 1000, -500, 200, -300, 1500);
  // ortho(-width / 2, width / 2, height / 2);
  // rotateX(-QUARTER_PI+xm*0.01);
  // rotateZ(QUARTER_PI+xm*0.01);

  // c = (map(i, 0, divC, 0, 255) + (i+curOff)*10) %255;
  // c = (curOff*10) % 255;
  // fill(c,80,100);

  orbitControl();

  stripOff = curOff;
  stripStep = HALF_PI / divC;
  // for (j=0; j<divC; j++) {
  //   // let d = dist(j+0.5, 0, divC/2, 0);
  //   // let angle = map(d, 0, divC, 0, PI) + curOff;
  //   translate(0,0,divW);
  //   drawStrip(stripOff);
  //   stripOff+=stripStep;
  // }

  // drawStrip(curOff+HALF_PI);
  drawStrip(curOff);
  curOff += step;

}

function drawStrip(curOff)
{

  stripOff = curOff;
  stripStep = HALF_PI / divC;
  for (j=0; j<divC; j++) {
    let jd = dist(j+1.5, 0, divC/2, 0);
    let jangle = map(jd, 0, divC, 0, PI) + curOff;
    translate(0,0,divW);
    // drawStrip(stripOff);

  let angle;
  for (i=0; i<divC; i++) {
    push();
    translate(divW * (i+0.5), 0);

    c = (curOff*10) % 255;
    if(i==0) { c += 128; c %= 255; }
    fill(c,80,100,5);

    let d = dist(i+0.5, 0, divC/2, 0);
    let angle = map(d, 0, divC, 0, PI) + curOff + jangle;
    // angle = curOff + i*step;

    let val = abs(sin(angle));
    let h = map(val, 0, 1, minH, maxH);
    box(divW-2, h, divW-2);
    pop();
  }

    stripOff+=stripStep;
  }

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
