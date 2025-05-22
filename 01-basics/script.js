// gsap.to("#main1", {
//   x: 900,
//   duration: 3,
//   delay: 1,
//   rotate: 450,
//   backgroundColor: "yellow",
//   repeat: -1,
//   yoyo: true,
//   stagger: 1,
// });
// gsap.to("#main2", {
//   x: 900,
//   duration: 3,
//   delay: 4,
//   rotate: 450,
//   backgroundColor: "yellow",
//   repeat: -1,
//   yoyo: true,
//   stagger: 1,
// });
// gsap.to("#main3", {
//   x: 900,
//   duration: 3,
//   delay: 7,
//   rotate: 450,
//   backgroundColor: "yellow",
//   repeat: -1,
//   yoyo: true,
//   stage1: 1,
// });

var tl = gsap.timeline();
tl.to("#main1", {
  x: 1000,
  rotate: 360,
  duration: 3,
  delay: 1,
  repeat: -1,
  yoyo: true,
  scale: -1,
});
tl.to("#main2", {
  x: 1000,
  rotate: 360,
  duration: 3,
  repeat: -1,
  yoyo: true,
  scale: -1,
});
tl.to("#main3", {
  x: 1000,
  rotate: 360,
  repeat: -1,
  duration: 3,
  yoyo: true,
  scale: -1,
});
