//Create overall box container
const box = document.createElement('div');
box.classList.add('box');
document.body.appendChild(box);

//Creates square class
function rectangle(squareNum) {
    for(let i = 0; i < squareNum; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < squareNum; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        //const br = document.createElement('br');
        //box.appendChild(br);
        box.appendChild(row);
    }
}


//Prints out grid
rectangle(4);