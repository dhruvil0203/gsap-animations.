let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let image = document.querySelector("#image");

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out",
  });
});

image.addEventListener("mouseenter", () => {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 2,
    backgroundColor: "#ffffff8a",
  });
});

image.addEventListener("mouseleave", () => {
  cursor.innerHTML = " ";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#111",
  });
});
