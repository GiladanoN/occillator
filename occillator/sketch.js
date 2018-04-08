
let minH = 60;
let maxH = 300;
let divC = 20;

let userDivs = (GetURLParameter('divs'));
if (userDivs && userDivs >= 5)
  divC = userDivs;

let totalW = 400;
let divW = totalW / divC;
let angOff;

let ang = 0;

function setup()
{
  createCanvas(600,400);
  background(57);

  angOff = PI/64;
}

function draw()
{
  background(57);
  rectMode(CENTER);
  translate(width/2, height/2);
  let maxD = dist(divW * (0.5), 0, totalW/2, 0);
  // console.log(maxD);

  let curAng = ang;
  translate(-totalW/2, 0);
  for (i=0; i<divC; i++ ){// curAng+=angOff) {
    push();
    translate(divW * (i+0.5), 0);

    // let d = dist(divW * (i+0.5), 0, totalW/2, 0);
    // let curAng = map(d, 0, 2*maxD, 0, PI) + ang;
    let d = dist(i+0.5, 0, divC/2, 0);
    let curAng = map(d, 0, divC, 0, PI) + ang;
    // console.log(i+":"+d+","+curAng);
    // curAng = ang + i*angOff;

    let val = abs(sin(curAng));
    let h = map(val, 0, 1, minH, maxH);
    rect(0,0,divW-2,h);
    pop();
  }
  ang += angOff;

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

// function draw()
// {
//   background(57);
//   rectMode(CENTER);
//   translate(width/2, height/2);
//
//   console.log(width/2);
//   console.log(-totalW/2);
//
//   let curAng = ang;
//   translate(-totalW/2, 0);
//   for (i=0; i<divC; i++, curAng+=angOff) {
//     push();
//     translate(divW * i, 0);
//     let val = abs(sin(curAng));
//     let h = map(val, 0, 1, minH, maxH);
//
//     let d = dist(divW * (i+0.5), 0, totalW/2, 0)
//     console.log(i+","+d);
//
//     rect(0,0,divW-2,h);
//     fill(0);
//     ellipse(0,0, 5,5);
//     pop();
//   }
//   // ang += angOff;
//
//   noLoop();
//
// }
