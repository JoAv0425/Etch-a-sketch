const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const cellDiv = document.createElement('div');
    cellDiv.classList.add('cellDiv');
    container.appendChild(cellDiv);
};
