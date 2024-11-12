import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contents = gsap.utils.toArray("#horizontal .section");

gsap.to(contents, {
  xPercent: -100 * (contents.length - 1), //deplacement de l'élément
  scrollTrigger: {
    trigger: "#horizontal",
    pin: true, //épingle l'élément a sa position actuelle
    scrub: 1, //la valeur définir un delais à l'animation
  },
});

//Cette animation a été crée afin de presenté des personnage a l'horizontal pour
