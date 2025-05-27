function page1Animation() {
  let tl = gsap.timeline();

  tl.from("nav h1,h4,nav button", {
    y: -40,
    delay: 1,
    duration: 0.4,
    opacity: 0,
    stagger: 0.12,
  });
  tl.from(".center-part1 h1", {
    x: -100,
    duration: 0.2,
    opacity: 0,
  });
  tl.from(".center-part1 p", {
    x: -100,
    duration: 0.2,
    opacity: 0,
  });
  tl.from(".center-part1 button", {
    duration: 0.2,
    opacity: 0,
  });
  tl.from(
    ".center-part2",
    {
      duration: 0.5,
      opacity: 0,
    },
    "-=1"
  );
  tl.from(".centerbottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  });
}

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2 ",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 0",
    scrub: 2,
  },
});

tl2.from(".services", {
  y: 30,
  opacity: 0,
});

function animateElems() {
  const elems = document.querySelectorAll(".elem");

  elems.forEach((elem, index) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elem,
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
    });

    tl.from(elem.querySelector(".elem-part1"), {
      x: -100,
      opacity: 0,
      duration: 0.5,
    }).from(
      elem.querySelector(".elem-part2"),
      {
        x: 100,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.3"
    );
  });
}

page1Animation(); // Already defined by you
animateElems(); // Call the new animation function
