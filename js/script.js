let nextBtns = document.querySelectorAll("#next");
let pervBtns = document.querySelectorAll("#prev");
const sliders = document.querySelectorAll(".slide");
const slidersNumber = sliders.length;

let slideStrat = 0;

// console.log(nextBtns);
// console.log(pervBtns);
// console.log(slides)
// console.log(slidersNumber)
// console.log(slideStrat)

// next
nextBtns.forEach((btn) => {
  btn.addEventListener("click", next);
});
/*
function next() {
  sliders.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideStrat++;
  if (slideStrat > slidersNumber - 1) {
    slideStrat = 0;
  }
  sliders[slideStrat].classList.add("active");
  console.log("done");
}*/
function next(){
  sliders.forEach((slide)=>{
    slide.classList.remove('active');
  })
  slideStrat++;
  console.log(slideStrat%slidersNumber);
  sliders[(slideStrat)%slidersNumber].classList.add('active');
}

// previous

pervBtns.forEach((btn) => {
  btn.addEventListener("click", prev);
});
/*
function prev() {
  sliders.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideStrat--;
  if (slideStrat < 0) {
    slideStrat = slidersNumber - 1;
  }
  sliders[slideStrat].classList.add("active");
  console.log("done");
}*/

function prev(){
  sliders.forEach((slide)=>{
    slide.classList.remove('active');
  })
  slideStrat--;
  slideStrat=slideStrat>0?slideStrat:slidersNumber-1;
  console.log(slideStrat%slidersNumber);
  sliders[(slideStrat)%slidersNumber].classList.add('active');
}

// every 3 second make the animation
setInterval(prev, 3000);
