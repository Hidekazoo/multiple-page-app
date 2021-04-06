export const createLinkButton = (text, to) => {
  const LinkButton = document.createElement("button");
  LinkButton.innerHTML = text;
  LinkButton.onclick = () => {
    location.href = to;
  };
  return LinkButton;
};
