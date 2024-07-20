import "./style.css";
import Ripple from "./lib";

const button = document.querySelector<HTMLButtonElement>("#button");
const ripple = new Ripple();

button?.addEventListener("click", (e) => {
  ripple.create(e, "dark");
});
