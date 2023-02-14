$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header_nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});