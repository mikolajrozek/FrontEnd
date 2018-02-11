$(document).ready(function() {

	$('h2 #link1').mouseenter(function() {
		$('#link1').css({
			fontSize: '1.05em',
			transition: '0.6s'
		});
	}).mouseleave(function() {
		$('#link1').css({
			fontSize: '1.0em'
		});
	});

	$('h2 #link2').mouseenter(function() {
		$('#link2').css({
			fontSize: '1.05em',
			transition: '0.6s'
		});
	}).mouseleave(function() {
		$('#link2').css({
			fontSize: '1.0em'
		});
	});

	$('.project1').mouseenter(function() {
		$('.project1').css({transform: 'scale(0.9)', opacity: '1.0'});
	}).mouseleave(function() {
		$('.project1').css({transform: 'scale(0.89)', opacity: '0.7'});
	});

	$('.project2').mouseenter(function() {
		$('.project2').css({transform: 'scale(0.9)', opacity: '1.0'});
	}).mouseleave(function() {
		$('.project2').css({transform: 'scale(0.89)', opacity: '0.7'});
	});

	$('.project3').mouseenter(function() {
		$('.project3').css({transform: 'scale(0.9)', opacity: '1.0'});
	}).mouseleave(function() {
		$('.project3').css({transform: 'scale(0.89)', opacity: '0.7'});
	});

	$('.project4').mouseenter(function() {
		$('.project4').css({transform: 'scale(0.9)', opacity: '1.0'});
	}).mouseleave(function() {
		$('.project4').css({transform: 'scale(0.89)', opacity: '0.7'});
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
