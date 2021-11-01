
$(function(){
	"use strict";


	var menuLink 		= $(".menu-link a");
	menuLink.on("click", function (event) {
		event.preventDefault ? event.preventDefault() : event.returnValue = false;
		var target = $(this).attr("href");
		$("html, body").stop().animate({
			scrollLeft: $(target).offset().left,
			scrollTop: $(target).offset().top
		}, 1200,"easeInOutExpo");
	});
	

	$('body').scrollspy({ 
		target: '#leftSideMenu',
		offset: 20
	});

	$('.left-side-menu-toggle').on("click",function(){
		$('.left-side-menu').toggleClass("left-side-menu-visible");
	});
});	