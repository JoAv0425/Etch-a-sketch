const container = document.querySelector('#container');



for (let i = 0; i < 256; i++) {
    const cellDiv = document.createElement('div');
    cellDiv.classList.add('cellDiv');
    container.appendChild(cellDiv);
};

const mouseOver = function (e) {
   if (e.target.classList.contains('cellDiv')) {
    e.target.style.backgroundColor = "green"
   }
};

container.addEventListener('mouseover', mouseOver);

const button = document.createElement('button');
button.classList.add('btn');
let noOfSquares;
const popUp  = function () {
    noOfSquares = prompt('Number of squares per side of grid', 'max 100');
    if (noOfSquares > 100 || noOfSquares < 16) {
        noOfSquares = 16
    } 
    return noOfSquares;
};
