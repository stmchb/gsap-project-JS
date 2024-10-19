function getAnimateTop() {
  let tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    scale: 0.4,
  });

  tl.from("#page1 #right-side h2", {
    x: -200,
    opacity: 0,
    duration: 0.4,
  });

  tl.from("#page1 #right-side p", {
    x: -200,
    opacity: 0,
    duration: 0.4,
  });

  tl.from("#page1 #right-side button", {
    opacity: 0,
    duration: 0.4,
    scale: 0,
  });

  tl.from(
    "#page1 #left-side img",
    {
      x: 500,
      opacity: 0,
      duration: 0.4,
      scale: 0,
    },
    "-=0.3"
  );

  tl.from("#page-image img", {
    opacity: 0,
    duration: 0.5,
    scale: 0,
    stagger: 0.1,
  });
}

function cardLoading() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#card-container",
      scroller: "body",
      markers: true,
      scrub: 1,
      start: "top 100%",
      end: "top -30%",
    },
  });

  tl2.from("#card-container .card", {
    scale: 0.6,
    x: -200,
    opacity: 0,
    duration: 0.1,
    scrub: 1,
  });
}

getAnimateTop();

cardLoading();
