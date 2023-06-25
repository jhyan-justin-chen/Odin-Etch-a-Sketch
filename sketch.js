function randInt(max) {
  return Math.floor(Math.random() * max + 1);
}

function setHSLColor(hue, saturation, lightness) {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
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
