import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//Scroll horizontal

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

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".family-paint-bulle-1",
      start: " bottom bottom ",
      //   end: "top center",
      scrub: 0.5,
    },
  })
  .to(".family-paint-bulle-1", {
    opacity: 1,
    x: "15%",
  })
  .to(
    ".family-paint-bulle-1",
    {
      opacity: 0,
    },
    "+=0.5"
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".family-paint-bulle-2",
      start: " bottom bottom ",
      //   end: "top center",
      scrub: 0.5,
    },
  })
  .to(".family-paint-bulle-2", {
    opacity: 1,
    x: "-15%",
  })
  .to(
    ".family-paint-bulle-2",
    {
      opacity: 0,
    },
    "+=0.5"
  );

//bed room

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".bed-room-bulle-1",
      start: " bottom center ",
      scrub: 0.5,
    },
  })
  .to(".bed-room-bulle-1", {
    opacity: 1,
  })
  .to(
    ".bed-room-bulle-1",
    {
      opacity: 0,
    },
    "+=0.5"
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".bed-room-bulle-2",
      start: " center center ",
      scrub: 0.5,
    },
  })
  .to(".bed-room-bulle-2", {
    opacity: 1,
  })
  .to(
    ".bed-room-bulle-2",
    {
      opacity: 0,
    },
    "+=0.5"
  );

//escape

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".escape-bulle-1",
      start: " center bottom ",
      //   end: "top center",
      scrub: 0.5,
    },
  })
  .to(".escape-bulle-1", {
    opacity: 1,
    x: "15%",
  })
  .to(
    ".escape-bulle-1",
    {
      opacity: 0,
    },
    "+=0.5"
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".escape-bulle-2",
      start: " center bottom ",
      //   end: "top center",
      scrub: 0.5,
    },
  })
  .to(".escape-bulle-2", {
    opacity: 1,
    x: "-15%",
  })
  .to(
    ".escape-bulle-2",
    {
      opacity: 0,
    },
    "+=0.5"
  );

// alone-bulle

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".alone-bulle-1 img",
      start: " center top ",
      scrub: 0.5,
    },
  })
  .to(".alone-bulle-1 img", {
    opacity: 1,
  })
  .to(
    ".alone-bulle-1 img",
    {
      opacity: 0,
    },
    "+=0.5"
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".alone-bulle-2 img",
      start: " center top ",
      scrub: 0.5,
    },
  })
  .to(".alone-bulle-2 img", {
    opacity: 1,
  })
  .to(
    ".alone-bulle-2 img",
    {
      opacity: 0,
    },
    "+=0.5"
  );

//maxine

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".maxine-bulle-1",
      start: " center center ",
      //   end: "top center",
      scrub: 0.5,
    },
  })
  .to(".maxine-bulle-1", {
    opacity: 1,
    x: "15%",
  })
  .to(
    ".maxine-bulle-1",
    {
      opacity: 0,
    },
    "+=0.5"
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".maxine-bulle-2",
      start: " center top",
      scrub: 0.5,
    },
  })
  .to(".maxine-bulle-2", {
    opacity: 1,
  })
  .to(
    ".maxine-bulle-2",
    {
      opacity: 0,
    },
    "+=0.5"
  );

//aventure

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".aventure-1",
      start: " center center  ",
      scrub: 0.5,
    },
  })
  .to(".aventure-1", {
    opacity: 1,
    x: "15%",
  })
  .to(
    ".aventure-1",
    {
      opacity: 0,
    },
    "+=0.5"
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".aventure-2",
      start: " center center  ",
      scrub: 0.5,
    },
  })
  .to(".aventure-2", {
    opacity: 1,
    x: "-15%",
  })
  .to(
    ".aventure-2",
    {
      opacity: 0,
    },
    "+=0.5"
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".aventure-3",
      start: " center center ",
      scrub: 0.5,
    },
  })
  .to(".aventure-3", {
    opacity: 1,
    x: "15%",
  })
  .to(
    ".aventure-3",
    {
      opacity: 0,
    },
    "+=0.5"
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".aventure-bulle",
      start: " center center ",
      scrub: 0.5,
    },
  })
  .to(".aventure-bulle", {
    opacity: 1,
  })
  .to(
    ".aventure-bulle",
    {
      opacity: 0,
    },
    "+=0.5"
  );
