// gsap.from("#page2 #box1", {
//   opacity: 0,
//   duration: 2,
//   rotate: 720,
//   scale: 0,
//   scrollTrigger: {
//     trigger: "#page2 #box1",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//     end: "top 30%",
//     scrub: 2,
//   },
// });

// Overflow Hidden
gsap.to("#page2 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trogger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});
