let initial_path = `M 10 100 Q 500 100 990 100`;
let final_path = `M 10 100 Q 500 100 990 100`;
let div = document.querySelector("#main");

div.addEventListener("mousemove", (dets) => {
  let path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

div.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: final_path },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});
