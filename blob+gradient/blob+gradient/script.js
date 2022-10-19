let outputCode = document.getElementById("css-code");
let outputCodeGradient = document.getElementById('gradient-code');
let outputCodeBorder = document.getElementById('border-code');
let colorOne = document.getElementById('color-a');
let colorTwo = document.getElementById('color-b');
let currDirection = 'to bottom';
let borderColor = document.getElementById('color-border');
let borderWidth = document.getElementById('blob-border-width');
let outputCodeBlob = document.getElementById('blob-code');


let sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function (slider) {
    slider.addEventListener("input", createBlob);
});

let inputs = document.querySelectorAll("input[type='number']");
inputs.forEach(function (inp) {
    inp.addEventListener("change", createBlob);
});

function setDirection(value, _this) {
    let directions = document.querySelectorAll(".buttons button");
    for (let i of directions) {
        i.classList.remove('active');
    }
    _this.classList.add('active');
    currDirection = value;
}

function generateCode() {
    outputCodeGradient.value = `background-image: linear-gradient( ${currDirection} , ${colorOne.value}, ${colorTwo.value} )`;

    document.getElementById('blob').style.backgroundImage = `linear-gradient( ${currDirection} , ${colorOne.value}, ${colorTwo.value} )`;
}

function generateBorder() {
    document.getElementById('blob').style.border = `${borderWidth.value}px solid ${borderColor.value}`;
    outputCodeBorder.value = `border: ${borderWidth.value}px solid ${borderColor.value};
    `;

}


function createBlob() {
    let radiusOne = sliders[0].value;
    let radiusTwo = sliders[1].value;
    let radiusThree = sliders[2].value;
    let radiusFour = sliders[3].value;

    let blobHeight = inputs[0].value;
    let blobWidth = inputs[1].value;

    let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree}% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusFour}%`;

    document.getElementById("blob").style.cssText = `
    border-radius: ${borderRadius}; 
    height: ${blobHeight}px; 
    width: ${blobWidth}px;
    background-image: linear-gradient( ${currDirection} , ${colorOne.value}, ${colorTwo.value} );
    border: ${borderWidth}px solid ${borderColor.value};
    `;

    outputCode.value = `border-radius: ${borderRadius};`

    outputCodeBlob.value = `
    border-radius: ${borderRadius}; 
    height: ${blobHeight}px; 
    width: ${blobWidth}px;
    background-image: linear-gradient( ${currDirection} , ${colorOne.value}, ${colorTwo.value} );
    border: ${borderWidth.value}px solid ${borderColor.value};
    `;  
}




let copyButton = document.querySelectorAll('.copy');

copyButton[0].addEventListener("click", function () {
    outputCode.select();
    document.execCommand('copy');
    alert('Code Copied');
});

copyButton[2].addEventListener("click", function () {
    outputCodeGradient.select();
    document.execCommand('copy');
    alert('Code Copied');
});

copyButton[3].addEventListener("click", function () {
    outputCodeBorder.select();
    document.execCommand('copy');
    alert('Code Copied');
});

copyButton[1].addEventListener("click", function () {
    outputCodeBlob.select();
    document.execCommand('copy');
    alert('Code Copied');
});

createBlob();
