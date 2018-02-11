
window.onbeforeunload = function() {window.scrollTo(0,0);}

function main(){

$(function() {
    var $window = $(window);
    $('section[data-type="background"]').each(function() {
        var $bgobj = $(this);
        $window.scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50% ' + yPos + 'px';
            $bgobj.css({backgroundPosition: coords});
        });
    });
});

$(function() {
    $('.navbar').hide();
    $('.navbar').fadeIn(1000);
    $('.jumbotron').hide();
    $('.jumbotron').fadeIn(1500);
});


$(function() {
    $(window).scroll(function() {
        $('.hideme').each(function(i) {
            var bottom_of_obj = $(this).position().top + $(this).outerHeight();
            var bottom_of_win = $(window).scrollTop() + $(window).height();

            if(bottom_of_win = bottom_of_obj) {
                $(this).animate({'opacity':'1'}, 1000);
            }
        });
    });
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

};

$(document).ready(main);
