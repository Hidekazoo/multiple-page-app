import { createLinkButton } from "../utils";

const addLinkButton = () => {
  const root = document.querySelector("#root");
  const LinkButton = createLinkButton("Dashboard", "/dashboard.html");
  root.appendChild(LinkButton);
};

document.addEventListener("DOMContentLoaded", () => {
  addLinkButton();
});
