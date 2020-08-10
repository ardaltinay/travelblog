// function that is run when click on navbar
var navbar = document.querySelector("header > i");
navbar.onclick = function onClick () {
    $("#hidden").hide().fadeIn(1200);
    $("#hidden").css({"visibility": "visible", "pointer-events": "all"});
    // $("#hidden").fadeIn(1200);
    // $("#hidden").css({"display": "flex", "pointer-events": "all"}); // nav display should be none, visibility should be visible
    $("#hidden-bg").fadeIn(1200);
};

// close function
function close_box () {
    $("#hidden").fadeOut(500);
    $("#hidden-bg").fadeOut(500)
}

// navbar onclick
var navbar_close = document.querySelector("#hidden > i");
navbar_close.onclick = function closeClick () {
    close_box();
};

// outside of box onclick
$("#hidden-bg").click(function closeNavbar () {
    close_box();
});

// animation
$(document).ready(function animation () {
    $(".main-content div").hide().fadeIn(1000);
});

// resize window function
$(window).on("resize", function () {
    if ($(window).width() <= 1300) {
        $("hr").hide();
    }
});
