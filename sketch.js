function randInt(max) {
  return Math.floor(Math.random() * max + 1);
}

function setHSLColor(hue, saturation, lightness) {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function promptGridSize() {
  const size = prompt(
    "Please enter the size of the grid you would like.\nPlease use the format [width]x[height].\nThe maximum grid size is 100x100.",
    "16x16"
  ).split("x");
  const width = parseInt(size[0], 10);
  const height = parseInt(size[1], 10);
  if (width <= 100 && width > 0 && height <= 100 && height > 0) {
    clearGrid();
    makeGrid(width, height);
  } else {
    alert("Invalid size provided.");
  }
}

function clearGrid() {
  const container = document.querySelector(".sketchbook");
  container.replaceChildren();
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
        const currentSaturation = node.getAttribute("data-saturation");
        if (currentSaturation === null) {
          const nodeHue = randInt(360);
          const nodeLight = randInt(100);
          node.setAttribute(
            "style",
            `background-color: ${setHSLColor(nodeHue, 10, nodeLight)}`
          );
          node.setAttribute("data-saturation", 10);
          node.setAttribute("data-hue", nodeHue);
          node.setAttribute("data-light", nodeLight);
        } else if (currentSaturation < 100) {
          const nodeHue = node.getAttribute("data-hue");
          const nodeLight = node.getAttribute("data-light");
          node.setAttribute(
            "style",
            `background-color: ${setHSLColor(
              nodeHue,
              parseInt(currentSaturation, 10) + 10,
              nodeLight
            )}`
          );
          node.setAttribute(
            "data-saturation",
            parseInt(currentSaturation, 10) + 10
          );
        }
      });
      rowContainer.appendChild(node);
    }
    container.appendChild(rowContainer);
  }
}

makeGrid(16, 16);
