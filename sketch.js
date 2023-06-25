function makeGrid(width, height) {
  const container = document.querySelector(".sketchbook");

  for (i = 0; i < height; i++) {
    const rowContainer = document.createElement("div");
    for (j = 0; j < width; j++) {
      const node = document.createElement("div");
      rowContainer.appendChild(node);
    }
    container.appendChild(rowContainer);
  }
}

makeGrid(16, 16);
