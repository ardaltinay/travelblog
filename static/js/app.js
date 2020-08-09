// navbara tıklayınca gelen fonksiyon
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
	$("#hidden").show().fadeOut(1000);
	$("#hidden-bg").show().fadeOut(1000)
};

// boş alana tıklayınca kapatılması
// var hidden_bg_close = document.querySelector("#hidden-bg");
