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