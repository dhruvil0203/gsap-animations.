var menu = document.querySelectorAll("#nav i");
let cross = document.querySelectorAll("#full i");

let timeline = gsap.timeline();

timeline.to("#full", {
  right: "0",
  duration: 0.2,
});
timeline.from("#full h4", {
  x: 100,
  duration: 0.15,
  stagger: 0.09,
  opacity: 0,
});
timeline.from("#full i", {
  opacity: 0,
  duration: 0.15,
  stagger: 0.09,
});

timeline.pause();

menu.forEach((item) => {
  item.addEventListener("click", () => timeline.play());
});

cross.forEach((item) => {
  item.addEventListener("click", () => timeline.reverse());
});
