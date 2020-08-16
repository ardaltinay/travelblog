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

// SLİDER CAROUSEL
// variables
var indicators = $(".slider-content .slider-wrapper .indicators a");
var articles = $(".slider-content .slider-wrapper .slider article");

// function that is run when page onload
window.onload = function onLoad () {
    articles[0].classList.add("active");
    indicators[0].classList.add("active");
};

//  functions that is run when clicks indicators
indicators[0].onclick = function clickIndicators () {
    $(".slider").animate({"left": 0}, 1000); // first 295 px then add 515 px
    indicators[0].classList.add("active");
    if (indicators[0].classList.contains("active")) {
        for (var i = 1; i < 5; i++) {
            indicators[i].classList.remove("active");
        }
    }
    articles[0].classList.add("active");
    if (articles[0].classList.contains("active")) {
        for (var i = 1; i < 5; i++) {
            articles[i].classList.remove("active");
        }
    }
};
indicators[1].onclick = function clickIndicators () {
    $(".slider").animate({"left": -295}, 1000);
    indicators[1].classList.add("active");
    if (indicators[1].classList.contains("active")) {
        for (var i = 0; i < 5; i++) {
            if (i == 1) {
                continue;
            }
            indicators[i].classList.remove("active");
        }
    }
    articles[1].classList.add("active");
    if (articles[1].classList.contains("active")) {
        for (var i = 0; i < 5; i++) {
            if (i == 1) {
                continue;
            }
            articles[i].classList.remove("active");
        }
    }
};
indicators[2].onclick = function clickIndicators () {
    $(".slider").animate({"left": -810}, 1000);
    indicators[2].classList.add("active");
    if (indicators[2].classList.contains("active")) {
        for (var i = 0; i < 5; i++) {
            if (i == 2) {
                continue;
            }
            indicators[i].classList.remove("active");
        }
    }
    articles[2].classList.add("active");
    if (articles[2].classList.contains("active")) {
        for (var i = 0; i < 5; i++) {
            if (i == 2) {
                continue;
            }
            articles[i].classList.remove("active");
        }
    }
};
indicators[3].onclick = function clickIndicators () {
    $(".slider").animate({"left": -1325}, 1000);
    indicators[3].classList.add("active");
    if (indicators[3].classList.contains("active")) {
        for (var i = 0; i < 5; i++) {
            if (i == 3) {
                continue;
            }
            indicators[i].classList.remove("active");
        }
    }
    articles[3].classList.add("active");
    if (articles[3].classList.contains("active")) {
        for (var i = 0; i < 5; i++) {
            if (i == 3) {
                continue;
            }
            articles[i].classList.remove("active");
        }
    }
};
indicators[4].onclick = function clickIndicators () {
    $(".slider").animate({"left": -1620}, 1000);
    indicators[4].classList.add("active");
    if (indicators[4].classList.contains("active")) {
        for (var i = 0; i < 4; i++) {
            indicators[i].classList.remove("active");
        }
    }
    articles[4].classList.add("active");
    if (articles[4].classList.contains("active")) {
        for (var i = 0; i < 4; i++) {
            articles[i].classList.remove("active");
        }
    }
};




// homework-1
function reverseString(str) {
    var newString = str.split("").reverse().join("");
    return newString;
};

// homework-2
function convertToSlug(text) {
    var from = "üöıç·/_,:;";
    var to   = "uoic------";
    for (var i = 0, l = from.length; i < l; i++) {
        text = text.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    return text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'');
}

// homework-3
function degreeConverterF (deg) {
    var newValue = deg * 1.8 + 32;
    return deg + " °C = " + newValue + " °F";
};

// homework-4
function getURL () {     // window.location.pathname --> without https
    return document.URL; // window.location.href --> same result
};

// homework-5
function getExtension (name) {
    var fileExtension = /\.[0-9a-z]+$/i;
    return name.match(fileExtension)[0];
};

// homework-6
function getMin (arr) {
   var min = Math.min.apply(null, arr);
   return "value = " + min + " index = " + arr.indexOf(min);
};
function getMax (arr) {
    var max = Math.max.apply(null, arr);
    return "value = " + max + " index = " + arr.indexOf(max);
};
