let colorOne = document.getElementById('color-a');
let colorTwo = document.getElementById('color-b');
let currDirection = 'to bottom';
let outputCode  = document.getElementById('code');

function setDirection(value, _this){
    let directions  = document.querySelectorAll(".buttons button");
    for(let i of directions){
        i.classList.remove('active');
    }
    _this.classList.add('active');
    currDirection = value;

}

function generateCode(){
    outputCode.value=`background-image: linear-gradient( ${currDirection} , ${colorOne.value}, ${colorTwo.value} )`;

    document.getElementById('gradient').style.backgroundImage = `linear-gradient( ${currDirection} , ${colorOne.value}, ${colorTwo.value} )`;
}

function copyText(){
    outputCode.select();
    console.log('clicked');
    document.execCommand('copy');
    alert('Gradient Copied');
}

generateCode(); 