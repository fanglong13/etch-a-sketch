const gridSize = 600;
let gridRows = 16;
let gridColumns = 16;

const gridContainer = document.querySelector("#grid-container");
gridContainer.style.width = `${gridSize}px`;
gridContainer.style.height = `${gridSize}px`;

function generateGridSquares() {
    for (let i = 0; i < (gridRows * gridColumns); i++) {
        const gridSquare = document.createElement("div");
        gridSquare.style.width = `${(gridSize / gridRows) - 2}px`;
        gridSquare.style.height = `${(gridSize / gridColumns) - 2}px`;
        gridSquare.classList.add("grid-square");
        gridContainer.appendChild(gridSquare);
    }
}

generateGridSquares();

