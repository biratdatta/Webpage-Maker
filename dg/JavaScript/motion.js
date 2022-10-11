var firstplayername=retname1();
var secondplayername=retname2();

function hello(){
  window.open("game.html");
}

var sum=0,sum1=0;

function StartGame(){
var image1=document.getElementById('dice1');
var image2=document.getElementById('dice2');

if(sum<50){

  dicenumber1=Math.floor(((Math.random()*6) + 1));
  sum+=dicenumber1;
  if(dicenumber1===1){
    image1.src="images/dice1.png";
  }else if(dicenumber1===2){
    image1.src="images/dice2.png";
  }else if(dicenumber1===3){
    image1.src="images/dice3.png";
  }else if(dicenumber1===4){
    image1.src="images/dice4.png";
  }else if(dicenumber1===5){
    image1.src="images/dice5.png";
  }else if(dicenumber1===6){
    image1.src="images/dice6.png";
  }

document.querySelector('.zero').innerHTML=sum;
} else{
  document.querySelector('.firstPlayer').innerHTML= firstplayername + " WINS ";
  sum=0;
  sum1=0;
}

if(sum1<50){

  dicenumber2=Math.floor(((Math.random()*6) + 1));
  sum1+=dicenumber2;
  if(dicenumber2===1){
  image2.src="images/dice1.png";
  }else if(dicenumber2===2){
  image2.src="images/dice2.png";
  }else if(dicenumber2===3){
  image2.src="images/dice3.png";
  }else if(dicenumber2===4){
  image2.src="images/dice4.png";
  }else if(dicenumber2===5){
  image2.src="images/dice5.png";
  }else if(dicenumber2===6){
  image2.src="images/dice6.png";
  }
  document.querySelector('.zero1').innerHTML=sum1;
} else {
  document.querySelector('.secondPlayer').innerHTML= secondplayername + " WINS ";
  sum=0;
  sum1=0;
}

}
