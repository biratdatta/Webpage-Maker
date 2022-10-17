const time = document.querySelector('.time');
const image1=document.querySelector(".image1");
const image2=document.querySelector(".image2");

let sec=0,min=0,heur=0;

let patatasec='00', patatamin='00', patataheur='00';


function timeincriment() {
    sec++;
    if (sec<10)patatasec='0'+sec;
        else patatasec=sec

    if (sec===60) {
        sec=0;
        patatasec='00'
        min++;
        if (min<10)patatamin='0'+min;
        else patatamin=min;
        
        if (min===60) {
            min=0;
            patatamin='00';
            heur++;
            if (heur<10)patataheur='0'+heur;
            else patataheur=heur;
            if (heur===99) {
                heur=0;
                patataheur='00';
            }
        }
    }
    time.innerText=patataheur + ' : '+ patatamin +' : ' + patatasec;

}

let patata=null;
let enmarche=false;

// Evnt lestner
//caree
image1.addEventListener("click",function () {

    if (!enmarche) {
        patata= window.setInterval(timeincriment, 1000);
        enmarche=true;
        image1.setAttribute('src','assets/play-solid.svg');
        console.log(image1);
    }
    else{
        window.clearInterval(patata);
        image1.setAttribute('src','assets/stop-solid.svg');

        enmarche=false;
    }
    
})






image2.addEventListener("click",function () {
    time.innerText="00:00:00";
    sec=0,min=0,heur=0;
    patatasec='00'; patatamin='00'; patataheur='00';
    window.clearInterval(patata);
    enmarche=false;
    image1.setAttribute('src','assets/stop-solid.svg');


})


























































































