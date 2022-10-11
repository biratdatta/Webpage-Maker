/* ********************* FUNCTIONS SECTION START ********************************/

// CREATE AN HTML ELEMENT
document.querySelector("#function-1V button").addEventListener("click", () => {
    let button = document.createElement("BUTTON");
    button.innerText = "BUTTON"
    document.querySelector("#function-1V .modal__example__try").appendChild(button);
})


// REMOVE AN HTML ELEMENT
document.querySelector("#function-2V button").addEventListener("click", () => {
    document.querySelector("#function-2V .modal__example__try div").remove();
});

// REMOVE AN HTML ELEMENT
document.querySelector("#function-3V button").addEventListener("click", () => {
    let test = document.createElement("p");
    test.innerText = "Hello World appended!"
    document.querySelector("#function-3V .modal__example__try").appendChild(test);
});

// REMOVE AN HTML ELEMENT
document.querySelector("#function-4V button").addEventListener("click", () => {
    let test = document.createElement("p");
    test.innerText = "Hello World prepended!";
    event.target.parentNode.insertBefore(test, event.target);
});

// Create and add an HTML element after another element
document.querySelector("#function-5V button").addEventListener("click", () => {
    let test = document.createElement("p");
    test.innerText = "Added after!";
    let reference = event.target.parentNode.querySelector("p");
    event.target.parentNode.insertBefore(test, reference.nextSibling);
});

// Create and add an HTML element after another element
document.querySelector("#function-6V button").addEventListener("click", () => {
    let test = document.createElement("p");
    test.innerText = "Added before!";
    let reference = event.target.parentNode.querySelector("p");
    event.target.parentNode.insertBefore(test, reference);
});

// Clone an HTML element
document.querySelector("#function-7V button").addEventListener("click", () => {
    let orgn = event.target.parentNode.querySelector("p");
    let cln = orgn.cloneNode(true);
    event.target.parentNode.appendChild(cln);
});

// Add a class to an HTML item
document.querySelector("#function-8V button").addEventListener("click", () => {
    let addClass = event.target.parentNode.querySelector("p");
    addClass.classList.add("selected");
});

// Remove a class to an HTML item
document.querySelector("#function-9V button").addEventListener("click", () => {
    let addClass = event.target.parentNode.querySelector("p");
    addClass.classList.remove("selected");
});

// Toggle a class to an HTML item
document.querySelector("#function-10V button").addEventListener("click", () => {
    let toggleClass = event.target.parentNode.querySelector("p");
    toggleClass.classList.toggle("selected");
});

// Add a disabled attribute to an HTML button
document.querySelector("#function-11V button").addEventListener("click", () => {
    console.log(event.target.nextSibling);
    event.target.nextSibling.disabled = true;
});

// Remove a disabled attribute to an HTML button
document.querySelector("#function-12V button").addEventListener("click", () => {
    console.log(event.target.nextSibling);
    event.target.nextSibling.disabled = false;
});

// Set a data-src attribute to a img element
document.querySelector("#function-13V button").addEventListener("click", () => {
    event.target.parentNode.querySelector("img").setAttribute("data-src", "foobar");
});

// Remove a data-src attribute to a img element
document.querySelector("#function-14V button").addEventListener("click", () => {
    event.target.parentNode.querySelector("img").removeAttribute("data-src");
});

// Hide an HTML element on click (display: none)
document.querySelector("#function-15V button").addEventListener("click", () => {
    event.target.style.display = "none";
});

// Show an HTML element on click (display: block)
document.querySelector("#function-16V button").addEventListener("click", () => {
    event.target.parentNode.querySelector("img").style.display = "block";
});

// Animate an item after 2s from the initial page load
document.querySelector("#function-19V button").addEventListener("click", () => {
    location.reload(true);
});

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("header").animate([
            { transform: 'translateX(0px)' },
            { transform: 'translateX(30px)' },
            { transform: 'translateX(0px)' }
        ], {
            duration: 500,
            iterations: 1
        });
    }, 2000)
});

/* ********************* FUNCTIONS SECTION END ********************************/

/* ********************* SELECTORS SECTION START ********************************/

// Iterate a collection of elements
document.querySelector("#selector-1V button").addEventListener("click", () => {
    let parag = event.target.parentNode.querySelectorAll("p");
    for (let i = 0; i<parag.length; i++) {
        parag[i].innerText = parag[i].innerText+" iterated!";
        parag[i].classList.add("red");
    }
});

// Iterate a collection of elements
document.querySelector("#selector-2V button").addEventListener("click", () => {
    event.target.parentNode.style.fontWeight = "bold";
});

// Get the collection of children of a certain element
document.querySelector("#selector-3V button").addEventListener("click", () => {
    let childs = event.target.parentNode.childNodes;
    console.log(childs)
    for (let i = 1; i<childs.length; i+=2) {
        childs[i].style.fontWeight = "bold";
    }
});

// Get all the elements that have a certain class and change their font weight
document.querySelector("#selector-4V button").addEventListener("click", () => {
    let change = document.getElementsByClassName("selector4v");
    for (let i = 0; i<change.length; i++) {
        change[i].style.fontWeight = "bold";
    }
});

// Get an item by id and change its font weight
document.querySelector("#selector-5V button").addEventListener("click", () => {
    document.getElementById("selector5V").style.fontWeight = "bold";
});

// Get all the elements that have a certain class and the display property of none and change their font color
document.querySelector("#selector-6V button").addEventListener("click", () => {
    document.querySelectorAll(".selector6V").forEach(element => {
        if (element.style.display == "none") {
            element.style.display = "block";
            element.style.color = "crimson";
        }
    });
});

// Get the selected option of a select element
document.querySelector("#selector-7V button").addEventListener("click", () => {
    let selected = event.target.parentNode.querySelector("select").value;
    event.target.parentNode.querySelector("span").style.color = "crimson";
    event.target.parentNode.querySelector("span").innerText = selected;
});

// Change the href attribute of the first <a> element (You have to create several <a> elements)
document.querySelector("#selector-8V button").addEventListener("click", () => {
    let links = event.target.parentNode.getElementsByTagName("a");
    links[0].href = "http://blank.html"
    console.log(links[0].href);
});

// Show an alert with the value of the first <input> of the page (Create an <input> element to test this case)
document.querySelector("#selector-9V button").addEventListener("click", () => {
    let inputMsg = event.target.parentNode.querySelectorAll("input")[0].value;
    alert(inputMsg);
});

// Remove all items from a specific selector
document.querySelector("#selector-10V button").addEventListener("click", () => {
    let removing = event.target.parentNode.querySelectorAll("li");
    for (let i  = 0; i < removing.length; i++) {
        removing[i].remove();
    }
});

/* ********************* SELECTORS SECTION END ********************************/

/* ********************* EVENTS SECTION START ********************************/

// When the HTML document has been loaded and you can manipulate it with JavaScript
var htmlLoaded = false;
document.addEventListener("DOMContentLoaded", () => {
    htmlLoaded = true;
});
document.querySelector("#event-1V button").addEventListener("click", () => {
    event.target.parentNode.querySelector("span").innerText = htmlLoaded;
});

// When an HTML item has been clicked
document.querySelector("#event-2V button").addEventListener("click", () => {
    var button = event.target;
        button.innerText = button.innerText+" Clicked!"
});


// When an HTML item has been double clicked
document.querySelector("#event-3V button").addEventListener("dblclick", () => {
    var button = event.target;
        button.innerText = button.innerText+" Double clicked!"
});


// When the user presses a key on the keyboard
document.querySelector("#event-4V button").addEventListener("click", () => {
    let span = event.target.nextSibling;
    event.target.disabled = true;
    event.target.innerText = "Press any key";
    document.addEventListener("keydown", function keyVanilla(){
        span.innerText = event.key;
        if(document.querySelector("#event-4V").style.display == "none") {
            document.querySelector("#event-4V button").disabled = false;
            document.querySelector("#event-4V span").innerText = "";
            document.removeEventListener('keydown', keyVanilla);
        }
    });
});



// When the user moves the mouse cursor
document.querySelector("#event-5V button").addEventListener("click", () => {
    let span = event.target.nextSibling;
    document.addEventListener("mousemove", function mouseVanilla(){
        span.innerText = "Mouse moving: "+ event.pageX + ", " + event.pageY;
        if(document.querySelector("#event-5V").style.display == "none") {
            document.removeEventListener('mousemove', mouseVanilla);
        }
    });
});


// When the user changes a value of an text input
document.querySelector("#event-6V button").addEventListener("click", () => {
    event.target.parentNode.querySelector("input").addEventListener("input", function inputVanilla(){
        document.querySelector("#event-6V .modal__example__try p").innerText = event.target.value;
    });
});


// When an image is loaded
var imgVanilla = false;
document.querySelector("#event-7V img").addEventListener("load", function() {
    imgVanilla = true;
});
document.querySelector("#event-7V img").setAttribute("src", "https://www.web3d.org/x3d/content/examples/Basic/UniversalMediaPanoramas/horizon_3_back.jpg");
document.querySelector("#event-7V button").addEventListener("click", () => {
    event.target.parentNode.querySelector("p").innerText = imgVanilla;
});


// When an image fails to load, (if you write an incorrect image url the loading of the image will fail)
var imgErrorVanilla = false;
document.querySelector("#event-8V img").addEventListener("error", function() {
    imgErrorVanilla = true;
})
document.querySelector("#event-8V img").src = "error.img"

document.querySelector("#event-8V button").addEventListener("click", () => {
    event.target.parentNode.querySelector("p").innerText = imgErrorVanilla;
});


// When a form is submitted
document.querySelector("#event-9V form").addEventListener("submit", () => {
    event.preventDefault();
    event.target.nextSibling.innerText = "FORM SUBMITTED!";
    event.target.remove();
});


// When the user changes the option of a select element
document.querySelector("#event-10V select").addEventListener("change", () => {
    document.querySelector("#event-10V .modal__example__try p").innerText = "Changed to: "+event.target.value;
});


// When you position the mouse over an element
document.querySelector("#event-11V span").addEventListener("mouseover", () => {
    event.target.innerText = "Mouse is over!"
});

document.querySelector("#event-11V span").addEventListener("mouseleave", () => {
    event.target.innerText = "Mouse is out!"
});


// When a checkbox is checked or unchecked
document.querySelector("#event-12V input").addEventListener("change", () => {
    if (event.target.checked){
        event.target.nextSibling.innerText = "Checked"
    } else {
        event.target.nextSibling.innerText = "Unchecked"
    }
});


// When a ul list item is clicked, show the item that was clicked
document.querySelector("#event-13V ol").addEventListener("click", () => {
    event.target.parentNode.nextSibling.innerText = "Item clicked: " + event.target.innerText;
});

/* ********************* EVENTS SECTION END ********************************/
