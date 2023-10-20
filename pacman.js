// *** --- comments prefaced by an asterisk (*) or lots o' lines (------) are my own, not part of curriculum --- ***


// pos is the PacMan image position variable- it is set to 0 initially
var pos = 0;
//pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around. 
let pageWidth = window.innerWidth;
//This array contains all the PacMan movement images
const pacArray = [
  // * i created my own Froggy PacPal!
  //   ["./images/PacMan1.png", "./images/PacMan2.png"],
  //   ["./images/PacMan3.png", "./images/PacMan4.png"],
  ['./images/open-right.png', './images/closed-right.png'],
  ['./images/open-left.png', './images/closed-left.png']
];

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
var focus = 0;

// This function is called on mouse click. Every time it is called, it updates the PacMan image, 
// position and direction on the screen.
// * i don't see where it's called on mouse click? On page refresh?
function Run() {
  // * going into the DOM to bring the HTML element with the id of "PacMan"
  // * this makes it available to us in JS, housing it in the variable "img"
  let img = document.getElementById('PacMan');
  // * this uses dot notation to access the width property from the PacMan Object in HTML doc
  let imgWidth = img.width;
  // * introducing the modulo operator!
  // * focus = (focus + 1) takes what focus is currently, and adds 1 to it
  // * it'll be either 0 or 1 or 2
  // * modulo (%) is all about remainders
  // * % 2 ensures that no matter what focus is, the remainder will be 0 or 1
  focus = (focus + 1) % 2;
  // Inside of the Run() function you will also have to add an extra argument "pageWidth", 
  // which is declared on line 7 when you call the checkPageBounds() function below. 
  // * direction is based on where PacPal is based on arguments passed to checkPageBounds()
  // * checkPageBounds() is declared below setInterval()
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  // * uses dot notation on HTML element with id of img
  // * sets image used from pacArray based on current direction and focus
  img.src = pacArray[direction][focus];
  // * check if direction is evaluating as truthy. truthy = 0
  if (direction) {
    // * if direction is not 0, Pac's pos is SET EQUAL TO AND decreased by 20
    // * 20 pixels can be changed for differently spaced movement jumps
    pos -= 20;
    // * 20 what you ask? Pixels! 
    // * going into HTML DOM to update left pos
    // * also going to concat with String 'px' so inline HTML CSS knows we mean pixels
    img.style.left = pos + 'px';
    // * else: if direction is not 0
  } else {
    // * add 20 instead and do same as above
    pos += 20;
    img.style.left = pos + 'px';
  }
}
// TODO: Add a Javascript setInterval() method that will call the Run() function above every 300 milliseconds. 
// Note: in the video, Dr. Williams uses the setTimeout() method, but here we are going to use a slightly different
// method called setInterval(), so that you can have practice using this method.
// * setInterval() takes 2 arguments: what to continually repeat and after how long in milliseconds
setInterval(Run, 300);

// This function determines the direction of PacMan based on screen edge detection. 
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  //
  // TODO: Complete this to reverse direction upon hitting screen edge
  // * check if direction is 0
  // * AND (&&) check if his leading edge is about to hit the page's width
  if (direction == 0 && pos + imgWidth > pageWidth) {
    // * statements on BOTH sides of the && must be true in order to execute what's inside the curly braces
    // * if those are both true, the direction is set to 1
    direction = 1;
  }

  // * now check if he's traveling from right going toward left
  // * AND if his position is less than the 0 (pos = 0 declared in line 2)
  // * pos = 0 is essentially the starting point. It's the "pageWidth" for the left side
  // * "if pacman is traveling towards the left, AND he gets back to where he started, turn around"
  if (direction == 1 && pos < 0) {
    direction = 0;
  }
  // * always return if you wanna use the data elsewhere
  return direction;
}

//Please do not change
module.exports = checkPageBounds;

// ------ Challenges Encountered -------
// * i moved the TODO about adding pageWidth to Run() up to where it's being used for better clarity
// * is Run() supposed to capitalized? is that correct camelCasing?
// * not a challenge, but my first applause: Week 5!
// * we finally got helpful comments and a useful guide during the assignment
// * it was a welcome reprieve to see care and effort put forth to ease the student's experience




// --------- provided Solution File below for my reference:


// var pos = 0;
// let pageWidth = window.innerWidth;
// const pacArray = [
//   ["./images/PacMan1.png", "./images/PacMan2.png"],
//   ["./images/PacMan3.png", "./images/PacMan4.png"],
// ];
// var direction = 0;
// var focus = 0;

// function Run() {
//   let img = document.getElementById("PacMan");
//   let imgWidth = img.width;
//   focus = (focus + 1) % 2;
//   direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
//   img.src = pacArray[direction][focus];
//   if (direction) {
//     pos -= 20;
//     img.style.left = pos + "px";
//   } else {
//     pos += 20;
//     img.style.left = pos + "px";
//   }
// }
// setInterval(Run, 300);

// function checkPageBounds(direction, imgWidth, pos, pageWidth) {
//   if (direction == 0 && pos + imgWidth > pageWidth) direction = 1;
//   if (direction == 1 && pos < 0) direction = 0;

//   return direction;
// }

// module.exports = checkPageBounds;



