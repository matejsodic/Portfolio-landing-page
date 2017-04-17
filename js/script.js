$(document).ready(function(){

	$('.testimonials-wrapper').slick({
	  centerMode: true,
	  centerPadding: '95px',
	  slidesToShow: 2,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]

	});
});

