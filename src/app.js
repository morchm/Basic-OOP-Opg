import ShowActor from "./ShowActor";
import "../css/style.scss";
import { gsap } from "gsap";

(() => {
  const dataObj = [
    {
      name: "Death Smokie",
      img: "death-smokie.png",
      information: { strength: 100, lives: 10 },
      text: "Ninja Killer dont touch him",
    },
    {
      name: "Black Scum",
      img: "black-alien-scum.png",
      information: { strength: 90, lives: 5 },
      text: "Black Scum is a Ninja Killer",
    },
    {
      name: "Ping Pang",
      img: "angry-ping.png",
      information: { strength: 80, lives: 4 },
      text: "Just som penguin Shit",
    },
  ];
  new ShowActor(dataObj);
})();

// const card = document.querySelector("#card");

// card.addEventListener("click", (event) => {
//   gsap.to(event.target, {rotationY:180});
// })

