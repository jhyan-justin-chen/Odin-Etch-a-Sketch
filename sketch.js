function getRandomColor() {
  return `#${(0x1000000 + Math.floor(Math.random() * 0x1000000))
    .toString(16)
    .substring(1)}`;
}

function makeGrid(width, height) {
  const container = document.querySelector(".sketchbook");

  for (i = 0; i < height; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("sketchbook-row");
    for (j = 0; j < width; j++) {
      const node = document.createElement("div");
      node.classList.add("sketchbook-node");
      node.addEventListener("mouseover", () => {
        console.log("test");
        node.setAttribute("style", `background-color: ${getRandomColor()}`);
      });
      rowContainer.appendChild(node);
    }
    container.appendChild(rowContainer);
  }
}

makeGrid(16, 16);
