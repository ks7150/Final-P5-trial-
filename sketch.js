let numbers = [1, 2, 3, 4, 5, 6];
let currentIndex = 0;
let interval;
let flashing = true;

function setup() {
  createCanvas(400, 400);
  background(255,20,147);
  textSize(32);
  textAlign(CENTER, CENTER);
  
  
  interval = setInterval(flashNumber, 1000);
}

function flashNumber() {
  if (currentIndex < numbers.length) {
    background(255,20,147);
    text(random(numbers[currentIndex]), width / 2, height / 2); 
    currentIndex++;
  } else {
   
    clearInterval(interval);
    flashing = false;
    setTimeout(clearScreen, 1000);
  }
}

function clearScreen() {
  background(255,20,147);
}

function draw() {
 
}
