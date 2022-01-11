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
button.setAttribute("id", "refresh");
button.addEventListener("click", () => {
    location.reload();
})
document.body.insertBefore(button, box);


//Range Slider
const range = document.createElement('rangeSlider');
range.setAttribute("id", "rangeSlider");
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

//Color Picker Button
const colors = document.createElement('input');
colors.setAttribute("type", "color");
colors.setAttribute("id", "colorPicker");
colors.setAttribute("value", "000000");
colors.addEventListener("change", () => {
    hover(colors.value);
})

document.body.insertBefore(colors, box);

//Rainbow Button
const rain = document.createElement('button');
rain.textContent = "Rainbow";
rain.setAttribute("id", "rainbow");
rain.addEventListener("click", () => {
    hover("randColor");
})
document.body.insertBefore(rain, box);


//Eraser Button
const eraser = document.createElement('button');
eraser.textContent = "Eraser";
eraser.setAttribute("id", "eraser");
eraser.addEventListener("click", () => {
    hover("eraser");
})
document.body.insertBefore(eraser, box);

//Store all Buttons Together
const panel = document.createElement('div');
panel.classList.add('panel');
panel.appendChild(button);
panel.appendChild(range);
panel.appendChild(colors);
panel.appendChild(rain);
panel.appendChild(eraser);
document.body.insertBefore(panel,box);


//Start with 10x10
rectangle(10);
hover();

//Change Grid Size with Slider
range.addEventListener("input", () => {
    const delSquares = document.querySelectorAll('.row');
    delSquares.forEach((d) => {
        d.remove();
    });
    rectangle(slider.value);
    num.textContent = "Grid Size: " + slider.value + " x " + slider.value;
    hover();
})


//Mouseover boxes
function hover(colorChoice = "black") {
    let overBox = document.querySelectorAll(".square");
    overBox.forEach((o) => {
        o.addEventListener("mouseover", () => {
            if(colorChoice === "randColor") {
                o.style.backgroundColor = randomColor();
            } else if (colorChoice === "eraser"){
                o.style.backgroundColor = "white";
            } else {
                o.style.backgroundColor = colorChoice;
            }
        })
    });
}

function randomColor() {
    let randColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    return randColor;
}

//Create Bottom Banner
