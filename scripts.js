const generateButton = document.getElementById('generate-grid');
const grid = document.getElementById('grid-holder');

// Create initial grid

function createGrid() {

    for(i = 0; i < 16; i++) {
        let column = document.createElement('div');
        column.classList.add('column');
        grid.appendChild(column);

        for (j = 0; j < 16; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            column.appendChild(square);
        }
    }

}

createGrid();

// Paint the squares

grid.addEventListener('mouseover', (e) => {

    // Generate random RGB color

    function randomColor () {

        let r = Math.floor(Math.random() * 256); // Random between 0-255
        let g = Math.floor(Math.random() * 256); // Random between 0-255
        let b = Math.floor(Math.random() * 256); // Random between 0-255
        
        return 'rgb(' + r + ',' + g + ',' + b + ')';

    }
    
    let color = randomColor();

    target = e.target;

    if (target.classList.contains('square')) {

        if (!target.style.backgroundColor) {

            target.style.backgroundColor = color;

        }

    }

});

// Generate custom grid

generateButton.addEventListener('click', () => {
    let gridSize = prompt('Enter a number between 1 and 100');

    if (gridSize >= 1 && gridSize <= 100) {

        document.querySelectorAll('.column').forEach(e => e.remove());
        
        for(i = 0; i < gridSize; i++) {
            let column = document.createElement('div');
            column.classList.add('column');
            grid.appendChild(column);
    
            for (j = 0; j < gridSize; j++) {
                let square = document.createElement('div');
                square.classList.add('square');
                column.appendChild(square);
            }
        }

    } else {
        alert('Make sure you enter a number!');
    }
});