$(document).ready(() => {
	$('.container-fluid').hide().fadeIn(500);

	$('.navbar-toggler').click(() => {
		$('#mobileNavLinks').toggle();
	});

	// if($(window).width()<1000) {
	// 	$('#featured-jumbo ul').removeClass('list-group-horizontal');
	// }
});