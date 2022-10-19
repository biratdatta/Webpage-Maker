const cursor = document.querySelector('.cursor-shape');
window.addEventListener('mousemove', e =>{
    cursor.setAttribute("style","top: "+(e.pageY-10)+"px;" + "left: "+(e.pageX-10)+"px;");
});


window.addEventListener("scroll" , ()=>{
    const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
    cursor.style.top = scrollY+fromTop + 'px';

});

// window.addEventListener("click" , ()=>{
//     if (cursor.classList.contains("click")) {
//         cursor.classList.remove("click");

//         void cursor.offsetWidth;
//         cursor.classList.add("click");
//     }
//     else{
//         cursor.classList.add("click");
//     }
// })

