const container = document.querySelector('#container');
const body = document.querySelector('body');
const button = document.createElement('button');
button.textContent = "Grid Size";
button.classList.add('btn');
button.id = 'popUp';
body.appendChild(button);

let noOfSquareSides = 16;
let noOfSquares = 256;
let size = (100 / noOfSquareSides);

const popUp  = function (e) {
    noOfSquareSides = parseInt(prompt('Input number of squares per side of grid', 'max 100'));
    if (noOfSquareSides > 100 ) {
        noOfSquareSides = 100;
    } else if (noOfSquareSides < 16 || !noOfSquareSides) {
        noOfSquareSides = 16;
    }
   noOfSquares = ((noOfSquareSides) ** 2);

   //create function for clearing old grid and a loop for the new one.

}


button.addEventListener('click', popUp);

function gridMap() {
for (let i = 0; i < noOfSquares; i++) {
    const cellDiv = document.createElement('div');
    cellDiv.classList.add('cellDiv');
    cellDiv.style.flex = `0 0 ${size}%`
    cellDiv.style.height = `${size}%`
    container.appendChild(cellDiv);
};
}

gridMap();

const mouseOver = function (e) {
   if (e.target.classList.contains('cellDiv')) {
    e.target.style.backgroundColor = "green"
   }
};

container.addEventListener('mouseover', mouseOver);



