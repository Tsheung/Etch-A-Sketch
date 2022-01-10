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

//Refresh Grid Button
const button = document.createElement('button');
button.textContent = "Restart";
button.addEventListener("click", () => {
    location.reload();
})
document.body.insertBefore(button, box);


//Change colors HEX or at least rainbow (random RGB)





//Range Slider
const range = document.createElement('rangeSlider');
const slider = document.createElement('input');
slider.setAttribute("type", "range");
slider.setAttribute("min", 5);
slider.setAttribute("max", 64);
slider.setAttribute("value", 10);


//Add slider numbers
let num = document.createTextNode("Grid Size: " + slider.value + " x " + slider.value);

range.appendChild(slider);
range.appendChild(num);
document.body.insertBefore(range, box);

//Start with 10x10
rectangle(10);
hover();

//Change Grid Size with Slider
range.addEventListener("input", () => {
    const delSquares = document.querySelectorAll('.row');
    delSquares.forEach((d) => {
        d.remove();
    });
    console.log(slider.value);
    rectangle(slider.value);
    num.textContent = "Grid Size: " + slider.value + " x " + slider.value;
    hover();
})


//Mouseover boxes
function hover() {
    let overBox = document.querySelectorAll(".square");
    overBox.forEach((o) => {
        o.addEventListener("mouseover", () => {
            o.style.backgroundColor = "yellow";
        })
    });
}