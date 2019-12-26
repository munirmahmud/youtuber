(function ($) {
"use strict";

    // Background Image
    $("[data-bg]").each( function(){
		$(this).css("background-image", "url(" + $(this).attr('data-bg') +")")
    });
    
    // $('[data-bg]').each( () => {
    //     $(this).css('background-image', "url("+ $(this).attr('data-bg') +")");
    // })

// Owl carousel for brands
$('.brands-wrapper').owlCarousel({
    loop: true,
    margin: 0,
	items: 1,
	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav: true,
	dots: false,
    responsive: {
        0:{
            items: 1
        },
        767:{
            items: 3
        },
        992:{
            items: 4
        }
    }
});

// Owl carousel for success stories
$('.success-wrapper').owlCarousel({
    loop: true,
    margin: 15,
	items: 1,
    nav: false,
	dots: true
});

// Owl carousel for testimonials
$('.testimonial-wrapper').owlCarousel({
    loop: true,
    margin: 30,
	items: 1,
	nav: false,
	center: true,
	dots: true,
	responsive:{
        0:{
            items: 1
        },
        767:{
            items: 2
        },
        992:{
            items: 3
        }
    }
});

// Owl carousel for testimonials left
$('.testimonial-box').owlCarousel({
    loop: true,
    margin: 30,
	items: 1,
	nav: true,
    navText: ['<i class="fa fa-arrow-up"></i>','<i class="fa fa-arrow-down"></i>'],
	dots: false,
	responsive:{
        0:{
            items: 1
        },
        992:{
            items: 2
        },
    }
});


// Owl carousel for success stories
$('.about-carousel').owlCarousel({
    loop: true,
    margin: 0,
	items: 1,
    nav: false,
	dots: true
});


/* magnificPopup video view */
$('.hero-video, .success-video, .about-video').magnificPopup( {
	type: 'iframe',
} );

$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});	



//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});



})(jQuery);	