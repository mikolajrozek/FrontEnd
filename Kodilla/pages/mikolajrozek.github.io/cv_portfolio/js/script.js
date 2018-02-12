$(document).ready(function() {

	$('.link').mouseenter(function() {
		$(this).css({
			fontSize: '1.2em',
			transition: '0.6s'
		});
	}).mouseleave(function() {
		$(this).css({
			fontSize: '1.0em'
		});
	});

	$('[class*="project"]').mouseenter(function() {
		$(this).css({transform: 'scale(0.9)', opacity: '1.0'});
	}).mouseleave(function() {
		$(this).css({transform: 'scale(0.89)', opacity: '0.7'});
	});

	$('.project1').click(function(){
	    window.open("https://mikolajrozek.github.io/projekt_ambitny/index.html",'_blank');
	});

	$('.project2').click(function(){
	    window.open("https://mikolajrozek.github.io/projekt_ambitny_2/index.html",'_blank');
	});

	$('.project3').click(function(){
	    window.open("https://mikolajrozek.github.io/bootstrap/index.html",'_blank');
	});

	$('.project4').click(function(){
	    window.open("https://jsfiddle.net/kezoore/ud9rgmaf/",'_blank');
	});

});
