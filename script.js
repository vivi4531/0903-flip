"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  document.querySelector("#generator").addEventListener("click", generateBox);
}

function generateBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.backgroundColor = getRandomColor();

  document.querySelector("#generated").append(box);

  // TODO: Create FLIP animation
  //1. First: find the start position 
  const start = document.querySelector("#generator").getBoundingClientRect();

  //2. Last: find the end position
  //box because it's already defined at line 11
  //getBoundingClientRect: returns a DOMRect object providing information about the size of an element and its position
  const end = box.getBoundingClientRect();
  
  //3. Invert: translate the element to the start position 
  const diffX = start.x - end.x;
  const diffY = start.y - end.y;

  box.style.setProperty("--diffX", diffX + "px");
  box.style.setProperty("--diffY", diffY + "px");

  //box.style.setProperty("--diffX", diffX);
  //box.style.setProperty("--diffY", diffY);

  //uses backtics to use $ / variables / string litterals 
  //box.style.transform = `translate(${diffX}px, ${diffY}px)`;

  //Tests
  //reflow layout - necessary for Firefox
  box.offsetHeight;

  //4. Play: animate the element to translate(0,0)
  box.classList.add("animate");

  //box.style.transition = "transform 1s"; 
  //box.style.transform = "tranlate(0,0)"; 
}
// box.classList.add("animate-in");
//   requestAnimationFrame( function(){
//   box.style.transition = "transform 1s"; 
//   box.style.transform = "tranlate(0,0)"; 
// });
// }

function getRandomColor() {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);

  return `rgb(${r}, ${g}, ${b})`;
} 