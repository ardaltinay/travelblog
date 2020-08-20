// function that is run when click on navbar
var navbar = document.querySelector("header > div > i");
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


// languages mouse over function
var languages = $("header > div > a");
var hiddenUL = $("header > div > ul");
languages.hover(function showUL () {
    hiddenUL.slideDown();
}, function hideUL () {
    hiddenUL.slideUp();
});

hiddenUL.hover(function () {
    hiddenUL.stop().slideDown();
}, function () {
    hiddenUL.slideUp();
});



// MODAL POPUP BOX
var selectLi = $(".icons-content > div > ul > li:nth-child(n)");

// create a hidden div
$(".icons-content").append("<div class='hidden-div'></div>");
var hiddenDiv = $(".icons-content .hidden-div");

// create a hidden background
$("body").prepend("<div class='hidden-modal-bg'></div>");
var hiddenModalBg = $("body .hidden-modal-bg");

// functions
function closeModal () {
    hiddenDiv.hide(500);
    hiddenModalBg.fadeOut();
    hiddenDiv.empty();
    selectLi.css("pointer-events", "all");
};

function openModal () {
    hiddenDiv.fadeIn();
    hiddenModalBg.fadeIn();
    selectLi.css("pointer-events", "none"); // for block more than 1 <li> in hidden-div
    hiddenDiv.append("<span class='close'>&times;</span>", "<h2>Nisl feugiat adipiscing</h2>",
        "<p>Lorem ipsum dolor sit amet nullam consequat, feugiat nisl tempus adipiscing sed cursus.</p>");
};

$(".icons-content div.hidden-div span").click(function clickClose () {
    closeModal();
});
hiddenModalBg.click(function clickBgClose () {
    closeModal();
});

selectLi.each(function (index) {
    $(this).click(function () {
        openModal();
        hiddenDiv.append($(this).clone());
    });
});



// SLIDER CAROUSEL, global variables
var slider = $(".slider-content .slider-wrapper .slider");
var articles = $(".slider-content .slider-wrapper .slider article");

// functions
function removeClassFromIndicators (indicators) {
    for (var i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove("active");
    }
}
function removeClassFromArticles (articles) {
    for (var i = 0; i < articles.length; i++) {
        articles[i].classList.remove("active");
    }
}

var slider_active = false;
function sliderMove (i) {
    if (!slider_active) {
        slider_active = true;
        slider_wrapper_width = $('.slider-wrapper').width();
        article_width = $('.slider-wrapper article').width();
        article_margin = parseInt( $('.slider-wrapper article').css('marginLeft'));
        slide_i = ( (slider_wrapper_width/2-article_width/2)-(i*(article_width+article_margin)+article_margin) );
        if (i == 0) {
            slide_i = 0;
        } else if (i == articles.length - 1) {
            slide_i = -(i+1)*(article_width+article_margin)+slider_wrapper_width-article_margin;
        }

        $(".slider").animate({"left": slide_i}, 1000, function() {
            slider_active = false;
        });
    }
}


// function that is run when page onload
window.onload = function onLoad () {
// $(document).ready(function() {
// });

    articles[0].classList.add("active");
    $indicators_div = $('<div class="indicators" />').appendTo(".slider-wrapper")

    for (var i = 0; i < articles.length; i++) {
        $('<a></a>').appendTo($indicators_div);
    }

    var indicators = $(".slider-content .slider-wrapper .indicators a");
    indicators[0].classList.add("active");

    $indicators_div.children('a').each(function (index) {
        $(this).click(function () {
            if (!slider_active) {
                removeClassFromIndicators(indicators);
                $(this).addClass("active");

                removeClassFromArticles(articles);
                articles[index].classList.add("active");

                sliderMove(index);
            }
        });
    });
    slider.children('article').each(function (index) {
        $(this).click(function () {
            if (!slider_active) {
                removeClassFromIndicators(indicators);
                indicators[index].classList.add("active");

                removeClassFromArticles(articles);
                $(this).addClass("active");

                sliderMove(index);
            }
        });
    });
};



// homework-1
function reverseString (str) {
    var newString = str.split("").reverse().join("");
    return newString;
};

// homework-2
function convertToSlug (text) {
    var from = "üöıçğ·/_,:;ÇĞ";
    var to   = "uoicg------cg";
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
    // return deg + " °C = " + newValue + " °F";
    return `${deg} °C = ${newValue} °F`;
};

// homework-4            // document.referrer for previous URL
function getURL () {     // window.location.pathname --> without https
    return document.URL; // window.location.href --> same result
};

// homework-5
function getExtension (name) {
    var fileExtension = /\.[0-9a-z]+$/i;
    return name.match(fileExtension)[0];
};

function getExtension2 (name) {
    var words = name.split(".");
    return words[words.length-1];
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
