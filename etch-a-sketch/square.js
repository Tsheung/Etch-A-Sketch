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
        box.appendChild(row);
    }
}

//Prints out grid
rectangle(4);

//Mouseover boxes
const overBox = document.querySelectorAll(".square");
overBox.forEach((o) => {
    o.addEventListener("mouseover", () => {
        o.style.backgroundColor = "yellow";
    })
});

//Refresh Grid Button
const button = document.createElement('button');
button.textContent = "Restart";
button.addEventListener("click", () => {
    location.reload();
})
document.body.insertBefore(button, box);


//Change colors HEX





//Change Grid Size Scroll
