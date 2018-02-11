$(document).ready(function(){
    $('.cv-info').click(function(){
        window.open("https://drive.google.com/file/d/0B66GWTKUXa9ESkVyNjliUTJJZ3M/view?usp=sharing",'_blank');
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
    
    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});