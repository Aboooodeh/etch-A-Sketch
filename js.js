const gridContainer = document.getElementById("grid-container");

function createGrid(rows, cols) {
  // clear existing grid if there is one
    while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
    }

  // create grid with specified number of rows and columns
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
    }
    }
}

// create initial grid with 16 rows and columns
createGrid(10, 10);
