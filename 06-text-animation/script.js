function breakText() {
  let tag = document.querySelector("h1");
  let tagtext = document.querySelector("h1").textContent;

  let clutter = "";

  let splitedtext = tagtext.split("");
  let halfText = splitedtext.length / 2;

  splitedtext.forEach((element, value) => {
    if (value < halfText) {
      clutter += `<span class='a'>${element}</span>`;
    } else {
      clutter += `<span class='b'>${element}</span>`;
    }
  });
  tag.innerHTML = clutter;
}

breakText();

gsap.from(".a", {
  y: 80,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
  opacity: 0,
});

gsap.from(".b", {
  y: 80,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
  opacity: 0,
});
