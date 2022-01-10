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
rectangle(8);

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


//Change colors HEX or at least rainbow (random RGB)





//Change Grid Size Scroll
const range = document.createElement('rangeSlider');
const slider = document.createElement('input');
slider.setAttribute("type", "range");
slider.setAttribute("min", 5);
slider.setAttribute("max", 64);
slider.setAttribute("value", 10);
range.appendChild(slider);
document.body.insertBefore(range, box);