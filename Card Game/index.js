const card=document.querySelectorAll(".card");
console.log(card);
var isFlipped=false;
var arr=[null,null];
card.forEach((c)=> c.addEventListener("click",flip));
function flip(){
  this.classList.add("flip");
  if(!isFlipped){
    arr[0]=this;
  isFlipped=true;
  }
  else{
    arr[1]=this;
  check();
  }
}
var check=()=> {
  // if(firstCard.getAttribute("data-image")===secondCard.getAttribute("data-image")){
    if(arr[0].dataset.image===arr[1].dataset.image){
    success();
  }
  else{
    fail();
  }
}

var success=()=> {
arr[0].removeEventListener("click",flip);
arr[1].removeEventListener("click",flip);
reset();
}
var fail=()=>{
  setTimeout(()=> {
    arr[0].classList.remove("flip");
    arr[1].classList.remove("flip");
    reset();
  },500);

}
var reset=()=>{
  isFlipped=false;
//  arr[0]=null;
//  arr[1]=null;
arr=[null,null];

}
window.addEventListener("load",()=> {
  card.forEach((c)=> { 
    var index=Math.floor(Math.random()*16);
    c.style.order=index;
  }) 
})
