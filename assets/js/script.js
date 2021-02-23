
$(document).scroll(function () {
	let Wscroll = $(this).scrollTop();
	if (Wscroll > $('.about').offset().top - 250) {
		$('.about .container .row .kol').addClass('show');
	}
});
// parallax
$(window).scroll(function () {
	var wScroll = $(this).scrollTop();
	$('.jumbotron img.foto').css({
		'transform': 'translate(0px, ' + wScroll / 5 + '%)'
	});
	$('.jumbotron h2, .jumbotron p').css({
		'transform': 'translate(0px, ' + wScroll / 2 + '%)'
	});
	$('.jumbotron .image1').css({
		'transform': 'translate(0px, ' + wScroll / 3 + '%)'
	});

});


