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
        gridItem.addEventListener('mouseenter',changeColorR);
    }
    }
}

function changeColorBTW(){
  this.style.backgroundColor='white';
}

function changeColorR(){
  let r=Math.floor(Math.random() * 256);
  let g=Math.floor(Math.random() * 256);
  let b=Math.floor(Math.random() * 256);
  this.style.backgroundColor=`rgb(${r},${g},${b})`;
  this.removeEventListener('mouseenter',changeColorR);
}

function getUserInput(){
  let d
  do{
  d=prompt("Enter a number (less than 100): ");
  }while(d>100);
  createGrid(d,d);
}



createGrid(16, 16);
btn=document.getElementById('button')
btn.addEventListener('click', getUserInput );
