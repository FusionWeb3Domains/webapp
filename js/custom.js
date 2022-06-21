$(document).ready(function() {
	$(window).on('scroll', function () {
        if ($(this).scrollTop() > 220) { 
            $('.warp-header').addClass('active');
        }
        else {
            $('.warp-header').removeClass('active');
        }
    });
	$('.menu li a').click(function (e) {
		//e.preventDefault();
		var target = $(this).attr('data-id');
		if (target !== '')
		{	
			$('.menu .active').removeClass('active');
			$(this).parent().addClass('active');
			$('html, body').stop().animate({
				scrollTop: $(target).offset().top - 120
			}, 1000, function () {
				location.hash = target;
			});
			return false;
		}
	});
	$('.click-menu').click(function(){
		$('.click-menu').toggleClass('active');
		$('.menu').toggleClass('active');
		$('.text-right').addClass('active');
		$('body').toggleClass('active');
	});

	$('.menu-close').click(function(){
		$('.click-menu').removeClass('active');
		$('.menu').removeClass('active');
		$('.text-right').removeClass('active');
		$('body').removeClass('active');
	});
	$(".faqs-title").click(function(){
		if($(this).next().is(':visible'))
		{
			$(this).next().slideUp(500);
		}
		else
		{
			$(".faqs-des").slideUp(500);
			$(this).next().slideDown(500);	
		}
	});
	$('.faqs-title').click( function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$('.faqs-title.active').removeClass('active');
			$(this).addClass('active');    
		}
	});

	$('.back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	
	
	new WOW().init({
		offset:100,
	});
	
});