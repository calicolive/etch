
function populateBoard (size){
let board = document.querySelector('.board');
let square = board.querySelectorAll('div')
square.forEach((div) => div.remove());
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    for(let i =0; i < size * size; i++){
        let square = document.createElement('div')
        square.addEventListener('mouseover',() => {
            square.style.backgroundColor = 'gray';
        });
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);

let buttonSmall = document.getElementById('btn-small');
let buttonMedium = document.getElementById('btn-medium');
let buttonLarge = document.getElementById('btn-large');
let clear = document.getElementById('clear');



buttonSmall.addEventListener('click', e =>{
    size = 16;

    populateBoard(size);
})
buttonMedium.addEventListener('click', e =>{
    size = 32;

    populateBoard(size);
})
buttonLarge.addEventListener('click', e =>{
    size = 64;

    populateBoard(size);
})
