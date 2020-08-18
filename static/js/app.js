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


// function that is run when page onload, variables
window.onload = function onLoad () {
    var slider = $(".slider-content .slider-wrapper .slider");
    var articles = $(".slider-content .slider-wrapper .slider article");
    articles[0].classList.add("active");
    $indicators_div = $('<div class="indicators" />').appendTo(".slider-wrapper")

    for (var i = 0; i < articles.length; i++) {
        $('<a></a>').appendTo($indicators_div);
    }

    var indicators = $(".slider-content .slider-wrapper .indicators a");
    indicators[0].classList.add("active");

    $indicators_div.children('a').each(function (index) {
        $(this).click(function () {
            removeClassFromIndicators(indicators);
            $(this).addClass("active");

            removeClassFromArticles(articles);
            articles[index].classList.add("active");

            /* slide_i = -(295 * 2 + (indicators.length -3) * 515);
            if (index == 0) {
                $(".slider").animate({"left": 0}, 1000);
            } else if (index == 1) {
                $(".slider").animate({"left": -295}, 1000);
            } else if (1 < index && index < indicators.length - 1) {
                $(".slider").animate({"left": index * (-515) + 220 }, 1000);
            } else if (index == indicators.length - 1) {
                $(".slider").animate({"left": slide_i}, 1000)
            } */

            slider_wrapper_width = $('.slider-wrapper').width();
            article_width = $('.slider-wrapper article').width();
            article_margin = parseInt( $('.slider-wrapper article').css('marginLeft'));
            slide_i = ( (slider_wrapper_width/2-article_width/2)-(index*(article_width+article_margin)+article_margin) );
            if (index == 0) {
                slide_i = 0;
            } else if (index == indicators.length - 1) {
                slide_i = -(index+1)*(article_width+article_margin)+slider_wrapper_width-article_margin;
            }
            $(".slider").animate({"left": slide_i}, 1000);

        });
    });
    slider.children('article').each(function (index) {
        $(this).click(function () {
            removeClassFromIndicators(indicators);
            indicators[index].classList.add("active");

            removeClassFromArticles(articles);
            $(this).addClass("active");

            slide_i = -(295 * 2 + (indicators.length -3) * 515);
            if (index == 0) {
                $(".slider").animate({"left": 0}, 1000);
            } else if (index == 1) {
                $(".slider").animate({"left": -295}, 1000);
            } else if (1 < index && index < indicators.length - 1) {
                $(".slider").animate({"left": index * (-515) + 220 }, 1000);
            } else if (index == indicators.length - 1) {
                $(".slider").animate({"left": slide_i}, 1000)
            }
        });
    });
};
    //  functions that is run when clicks indicators
    /*indicators[0].onclick = function clickIndicators () {
        $(".slider").animate({"left": 0}, 1000); // first 295 px then add 515 px

    };
    indicators[1].onclick = function clickIndicators () {
        $(".slider").animate({"left": -295}, 1000);

    };
    indicators[2].onclick = function clickIndicators () {
        $(".slider").animate({"left": -810}, 1000);

    };
    indicators[3].onclick = function clickIndicators () {
        $(".slider").animate({"left": -1325}, 1000);

    };
    indicators[4].onclick = function clickIndicators () {
        $(".slider").animate({"left": -1620}, 1000);

    };*/




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
