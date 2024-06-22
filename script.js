const gridWidth = getComputedStyle(document.body).getPropertyValue("--grid-width");
const accentColor = getComputedStyle(document.body).getPropertyValue("--accent-color");
const inactiveColor = getComputedStyle(document.body).getPropertyValue("--inactive-color");

const container = document.querySelector(".container")
const gridContainer = document.querySelector("#grid-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

const gridToggle = document.querySelector("#grid-toggle");
let gridRowsAndColumns = 16;
let gridVisible = false;

let isDrawing = false;

function toggleGrid() {
    gridVisible = gridVisible ? false : true;
    gridToggle.style.color = gridVisible ? accentColor : inactiveColor;

    removeGridSquares();
    generateGridSquares();
}

function changeBackgroundColor(e) {
    if (e.type === "mousedown") {
        isDrawing = true;
        e.target.style.backgroundColor = "black";
    }

    else if (e.type === "mouseover" && isDrawing) {
        e.target.style.backgroundColor = "black";
    }

    else isDrawing = false;
}

function generateGridSquares() {
    const numOfSquares = (gridRowsAndColumns * gridRowsAndColumns);
    
    for (let i = 0; i < numOfSquares; i++) {
        const gridSquare = document.createElement("div");
        let widthOrHeight = 0;

        if (gridVisible) {
            widthOrHeight = `${(parseInt(gridWidth) / gridRowsAndColumns) -2}px`;
            gridSquare.style.border = "1px solid whitesmoke";
        } else if (!gridVisible) {
            widthOrHeight = `${(parseInt(gridWidth) / gridRowsAndColumns)}px`;
            gridSquare.style.border = "none";
        }

        gridSquare.style.width = gridSquare.style.height = widthOrHeight;

        gridSquare.addEventListener("mouseover", (e) => changeBackgroundColor(e));
        gridSquare.addEventListener("mousedown", (e) => changeBackgroundColor(e));
        gridSquare.addEventListener("mouseup", (e) => changeBackgroundColor(e));

        gridSquare.addEventListener("dragstart", (e) => {e.preventDefault});

        gridContainer.appendChild(gridSquare);
    }
}

function removeGridSquares() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

slider.oninput = function() {
    gridRowsAndColumns = this.value;
    sliderValue.textContent = `${this.value} x ${this.value} (Resolution)`;
    removeGridSquares();
    generateGridSquares();
}

gridToggle.addEventListener("click", toggleGrid);

generateGridSquares();

