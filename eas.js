const container = document.querySelector('#container');
const body = document.querySelector('body');
const button = document.createElement('button');
button.textContent = "Grid Size";
button.classList.add('btn');
button.id = 'popUp';
body.appendChild(button);

let noOfSquareSides;
let noOfSquares = 256;

const popUp  = function (e) {
    noOfSquareSides = prompt('Input number of squares per side of grid', 'max 100');
    if (noOfSquareSides > '100' ) {
        noOfSquareSides = '100';
    } else if (noOfSquareSides < '16' || !noOfSquareSides) {
        noOfSquareSides = '16';
    }
   noOfSquares = ((+noOfSquareSides) ** 2);


 for (let i = 0; i < noOfSquares; i++) {
    const cellDiv = document.createElement('div');
    cellDiv.classList.add('cellDiv');
    cellDiv.style.cssText = `flex: 0 0 ${(100 / noOfSquareSides)};`
    container.appendChild(cellDiv);
 };
   
}


button.addEventListener('click', popUp);


const mouseOver = function (e) {
   if (e.target.classList.contains('cellDiv')) {
    e.target.style.backgroundColor = "green"
   }
};

container.addEventListener('mouseover', mouseOver);



