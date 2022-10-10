var name1=prompt("Enter The Name Of First Player");
var name2=prompt("Enter The Name Of Second Player");
document.querySelector('.firstPlayer').innerHTML=name1;
document.querySelector('.secondPlayer').innerHTML=name2;
function  retname1(){
  if(name1!==" "){
    return name1;
  }else{
    return " ";
  }

}

function  retname2(){
  if(name2!==" "){
    return name2
  }else{
    return " ";
  }
}
