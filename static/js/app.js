// navbara tıklayınca çalışan fonksiyon
var navbar = document.querySelector("header > i");
navbar.onclick = function onClick () {
	$("#hidden").hide().fadeIn(1200);
	$("#hidden").css({"visibility": "visible", "pointer-events": "all"});
	$("#hidden-bg").after( function hidden() {
		$("#hidden-bg").css({"z-index": "100","pointer-events": "all", "visibility": "visible", "opacity": "0.75"})
		$("#hidden-bg").hide().fadeIn(1200);
	})
};

// çarpı işaretiyle kapatılması
var navbar_close = document.querySelector("#hidden > i");
navbar_close.onclick = function closeClick () {
	$("#hidden").show().fadeOut(500);
	$("#hidden-bg").show().fadeOut(500)
};

// boş alana tıklayınca kapatılması
$("#hidden-bg").click(function closeNavbar () {
	$("#hidden").show().fadeOut(500);
	$("#hidden-bg").show().fadeOut(500)
});

// animation
$("document").ready(function animation () {
	$(".main-content div").hide().fadeIn(1000);
});
