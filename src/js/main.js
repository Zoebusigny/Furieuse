import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contents = gsap.utils.toArray("#horizontal .section");

gsap.to(contents, {
  xPercent: -100 * (contents.length - 1),
  scrollTrigger: {
    trigger: "#horizontal",
    end: `+=${horizontal.offsetWidth * 2}`,
    pin: true,
    scrub: 1,
  },
});

//family-paint

gsap.to(".family-paint-bulle-1", {
  opacity: 1,
  x: "15%",
  scrollTrigger: {
    trigger: ".family-paint-bulle-1",
    start: " bottom bottom ",
    end: "top top",
    scrub: 0.5,
  },
});

gsap.to(".family-paint-bulle-2", {
  opacity: 1,
  x: "-15%",
  scrollTrigger: {
    trigger: ".family-paint-bulle-2",
    start: " bottom center",
    end: "bottom bottom ",
    scrub: 0.5,
    markers: true,
  },
});

//bed-room

gsap.to(".bed-room-bulle-1", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".bed-room-bulle-1",
    start: " bottom bottom ",
    end: "center center",
    scrub: 0.5,
  },
});

gsap.to(".bed-room-bulle-2", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".bed-room-bulle-2",
    start: " center center ",
    end: "top top",
    scrub: 0.5,
  },
});

//escape

gsap.to(".escape-bulle-1", {
  opacity: 1,
  x: "20%",
  scrollTrigger: {
    trigger: ".escape-bulle-1",
    start: " bottom bottom ",
    end: "top top",
    scrub: 0.5,
  },
});

// gsap.to(".escape-bulle-1", {
//   opacity: 1,

//   scrollTrigger: {
//     trigger: ".escape-bulle-1",
//     start: " center center  ",
//     end: "top center",
//     scrub: 0.5,
//   },
// });

gsap.to(".escape-bulle-2", {
  opacity: 1,
  x: "-15%",
  scrollTrigger: {
    trigger: ".escape-bulle-2",
    start: " bottom center",
    end: "bottom bottom ",
    scrub: 0.5,
    markers: true,
  },
});

//maxine

gsap.to(".maxine-bulle-1", {
  opacity: 1,
  x: "20%",
  scrollTrigger: {
    trigger: ".maxine-bulle-1",
    start: " bottom bottom ",
    end: "top top",
    scrub: 0.5,
  },
});

gsap.to(".maxine-bulle-2", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".maxine-bulle-2",
    start: " bottom bottom ",
    end: "center center",
    scrub: 0.5,
  },
});
