import { createLinkButton } from "../utils";

const addLinkButton = () => {
  const root = document.querySelector("#root");
  const LinkButton = createLinkButton("index", "/index.html");
  root.appendChild(LinkButton);
};

document.addEventListener("DOMContentLoaded", () => {
  addLinkButton();
});
