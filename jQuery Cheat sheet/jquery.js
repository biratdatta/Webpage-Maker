// SHOWING MODAL FOR ALL THE OPTIONS
var vanillaId;
var jqueryId;
var index;

$("ul li").click(()=>{
    active = "vanilla"
    $("#change-vanilla").show()
    index = $(event.target).index() + 1;
    let title = $(event.target).text()
    if($(event.target).parent().parent().hasClass("functions")) {
        vanillaId = "#function-"+index+"V";
        jqueryId = "#function-"+index+"Q";
    } else if ($(event.target).parent().parent().hasClass("selectors")) {
        vanillaId = "#selector-"+index+"V";
        jqueryId = "#selector-"+index+"Q";
    } else if ($(event.target).parent().parent().hasClass("events")) {
        vanillaId = "#event-"+index+"V";
        jqueryId = "#event-"+index+"Q";
    }
    if(index == 17 || index == 18) {
        $("#change-vanilla").hide();
        $(jqueryId).toggle();
    }
    $("#modal__title").text(title);
    $("#modal").slideToggle();
    $(vanillaId).toggle();
})

// HIDES THE MODAL
$("#modal").click((event)=>{
    if (event.target == $("#modal")[0]) {
        $("#modal").slideToggle();
        if (active == "jquery") {
            $(jqueryId).slideToggle();
        } else {
            $(vanillaId).slideToggle();
        }
        if(index == 17 || index == 18) {
            $("#change-vanilla").show();
            $(jqueryId).slideToggle();
        }
    }
})

$("#modal__x").click(()=>{
    $("#modal").slideToggle();
    if (active == "jquery") {
        $(jqueryId).slideToggle();
    } else {
        $(vanillaId).slideToggle();
    }
    if(index == 17 || index == 18) {
        $(jqueryId).slideToggle();
    }
})

// TOGGLES THE CODE TO SHOW BETWEEN JQUERY AND VANILLA JS ON MODAL
var active;

$("#change-jquery").click(()=>{
    $(jqueryId).slideDown();
    $(vanillaId).slideUp();
    active = "jquery"
});

$("#change-vanilla").click(()=>{
    $(vanillaId).slideDown();
    $(jqueryId).slideUp();
    active = "vanilla"
});
/* ********************* FUNCTIONS SECTION START ********************************/

// CREATE AN HTML ELEMENT
$("#function-1Q button").click(()=>{
    let button = $("<button>BUTTON</button>");
    $("#function-1Q .modal__example__try").append(button);
});

// REMOVE AN HTML ELEMENT
$("#function-2Q button").click(()=>{
    $("#function-2Q .modal__example__try div").remove();
});

// APPEND AN HTML ELEMENT
$("#function-3Q button").click(()=>{
    $("#function-3Q .modal__example__try").append("<p>Hello World appended!</p>");
});

// PREPEND AN HTML ELEMENT
$("#function-4Q button").click(()=>{
    $("#function-4Q .modal__example__try").prepend("<p>Hello World prepended!</p>");
});

// Create and add an HTML element after another element
$("#function-5Q button").click(()=>{
    let afterElement = $("<p>Added after!</p>");
    let reference = $(event.target).next();
    reference.after(afterElement);
});

// Create + add an HTML element before another element
$("#function-6Q button").click(()=>{
    let beforeElement = $("<p>Added before!</p>");
    let reference = $(event.target).next();
    reference.before(beforeElement);
});

// Clone an HTML element
$("#function-7Q button").click(()=>{
    let destination = $(event.target).parent();
    $("#function-7Q .modal__example__try p").first().clone().appendTo(destination);
});

// Add a class to an HTML item
$("#function-8Q button").click(()=>{
    $(event.target).next().addClass("selected");
});

// Remove a class to an HTML item
$("#function-9Q button").click(()=>{
    $(event.target).next().removeClass("selected");
});

// Toggle a class to an HTML item
$("#function-10Q button").click(()=>{
    $(event.target).next().toggleClass("selected");
});

// Add a disabled attribute to an HTML button
$("#function-11Q button").click(()=>{
    $(event.target).next().prop("disabled", true);
});

// Remove a disabled attribute to an HTML button
$("#function-12Q button").click(()=>{
    $(event.target).next().prop("disabled", false);
});

// Set a data-src attribute to a img element
$("#function-13Q button").click(()=>{
    $("img", $(event.target).parent()).attr("data-src", "foobar");
});

// Remove a data-src attribute to a img element
$("#function-14Q button").click(()=>{
    $("img", $(event.target).parent()).removeAttr("data-src", "foobar");
    $("img", $(event.target).parent()).removeData("src", "foobar");
});

// Hide an HTML element on click (display: none)
$("#function-15Q button").click(()=>{
    $(event.target).toggle();
});

// Show an HTML element on click (display: block)
$("#function-16Q button").click(()=>{
    $("img", $(event.target).parent()).toggle();
});

// Fade in an HTML element using jQuery
$("#function-17Q button").click(()=>{
    $("img", $(event.target).parent()).fadeIn("slow");
});

// Fade out an HTML element using jQuery
$("#function-18Q button").click(()=>{
    $("img", $(event.target).parent()).fadeOut("slow");
});

// Animate an item after 2s from the initial page load
$("#function-19Q button").click(()=>{
    location.reload();
});

$(document).ready(function(){
    $(".container").css("opacity", 0);
    setTimeout( () => {
        $(".container").animate({opacity:1, color: "red"}, 1000);
    },2000);
});

/* ********************* FUNCTIONS SECTION END ********************************/




/* ********************* SELECTORS SECTION START ********************************/

// Iterate a collection of elements
$("#selector-1Q button").click(()=>{
    $("p", $(event.target).parent()).each(function(index, element) {
        $(element).text( $(element).text() + " iterated!").addClass("red");
    });
});

// Get the parent element of a certain element
$("#selector-2Q button").click(()=>{
    $(event.target).parent().css("font-weight", "bold")
});

// Get the collection of children of a certain element
$("#selector-3Q button").click(()=>{
    $(event.target).parent().children().css("font-weight", "bold")
});

// Get all the elements that have a certain class and change their font weight
$("#selector-4Q button").click(()=>{
    $(".selector4Q").css("font-weight","bold");
});

// Get an item by id and change its font weight
$("#selector-5Q button").click(()=>{
    $("#selector5Q").css("font-weight","bold");
});

// Get all the elements that have a certain class and the display property of none and change their font color
$("#selector-6Q button").click(()=>{
    $(".selector6Q:hidden").css({"display":"block", "color":"crimson"});
});

// Get the selected option of a select element
$("#selector-7Q button").click(()=>{
    let selected = $("select",$(event.target).parent()).val();
    $("span", $(event.target).parent()).text(selected).css("color","crimson");
});

// Change the href attribute of the first <a> element (You have to create several <a> elements)
$("#selector-8Q button").click(()=>{
    $("a:first", $(event.target).parent()).attr("href", "http://blank.html");
});

// Show an alert with the value of the first <input> of the page (Create an <input> element to test this case)
$("#selector-9Q button").click(()=>{
    alert($("input:first", $(event.target).parent()).val());
});

// Remove all items from a specific selector
$("#selector-10Q button").click(()=>{
    $("ol", $(event.target).parent()).empty();
});

/* ********************* SELECTORS SECTION END ********************************/



/* ********************* EVENTS SECTION START ********************************/

// When the HTML document has been loaded and you can manipulate it with JavaScript
var wasLoaded = false;
$(document).ready(function(){
    wasLoaded = true;
});
$("#event-1Q button").click(()=>{
    $("span", $(event.target).parent()).text(wasLoaded);
});

// When an HTML item has been clicked
$("#event-2Q button").click(()=>{
    let button = $("button", $(event.target).parent()).text();
    $("button", $(event.target).parent()).text(button+" Clicked!");
});


// When an HTML item has been double clicked
$("#event-3Q button").dblclick(()=>{
    let button = $("button", $(event.target).parent()).text();
    $("button", $(event.target).parent()).text(button+" Double clicked!");
});


// When the user presses a key on the keyboard
$("#event-4Q button").click(()=>{
    $(event.target).prop("disabled", "true");
    $(event.target).text("Press any key");
    let span = $("span",$(event.target).parent());
    $(document).keydown(function keyQuery(){
        $(span).text(event.key);
        if($("#event-4Q").css("display") == "none") {
            $("#event-4Q button").prop("disabled",false);
            $("#event-4Q span").text("");
            $(document).off('keydown', keyQuery);
        }
    })
});


// When the user moves the mouse cursor
$("#event-5Q button").click(()=>{
    $(document).mousemove(function mouseQuery() {
        $("#event-5Q span").text("Mouse moving: "+ event.pageX + ", " + event.pageY);
        if($("#event-5Q").css("display") == "none") {
            $(document).off('mousemove', mouseQuery);
        }
    })
});


// When the user changes a value of an text input
$("#event-6Q button").click(()=>{
    $("#event-6Q input").on("input", ()=>{
        $("#event-6Q .modal__example__try p").text($(event.target).val());
    })
});


// When an image is loaded
var imgQuery = false;
$("#event-7Q img").one("load",function(){
    imgQuery = true;
}).attr('src', "https://www.web3d.org/x3d/content/examples/Basic/UniversalMediaPanoramas/horizon_3_back.jpg");

$("#event-7Q button").click(()=>{
    $("p", $(event.target).parent()).text(imgQuery);
});



// When an image fails to load, (if you write an incorrect image url the loading of the image will fail)
var imgErrorQuery = false;
$("#event-8Q img").on("error", function(){
    imgErrorQuery = true;
}).attr("src", "error.img");

$("#event-8Q button").click(()=>{
    $("p", $(event.target).parent()).text(imgErrorQuery);
});


// When a form is submitted
$("#submitQuery").on("submit", () => {
    event.preventDefault();
    $("span", $(event.target).parent()).text("FORM SUBMITTED!")
    $(event.target).remove();
});


// When the user changes the option of a select element
$("#event-10Q select").change(()=>{
    $("p", $(event.target).parent()).text("Changed to: "+$("#event-10Q select").val());
});


// When you position the mouse over an element
$("#event-11Q span").mouseover(()=>{
    $(event.target).text("Mouse is over!");
});
$("#event-11Q span").mouseleave(()=>{
    $(event.target).text("Mouse is out!");
});


// When a checkbox is checked or unchecked
$("#event-12Q input").change(()=>{
    if ($(event.target).is(":checked")) {
        $(event.target).next().text("Checked");
    } else {
        $(event.target).next().text("Unchecked");
    }
});


// When a ul list item is clicked, show the item that was clicked
$("#event-13Q ol").click(()=>{
    $(event.target).parent().next().text("Item clicked: "+$(event.target).text());
});

/* ********************* EVENTS SECTION END ********************************/
