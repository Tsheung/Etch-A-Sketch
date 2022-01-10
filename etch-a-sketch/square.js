//Create overall box container
const box = document.createElement('div');
box.classList.add('box');
document.body.appendChild(box);

//Creates square class
function rectangle(squareNum) {
    for(let i = 0; i < squareNum; i++) {
        for(let j = 0; j < squareNum; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            box.appendChild(square);
        }
        const br = document.createElement('br');
        box.appendChild(br);
    }
}


rectangle(4);