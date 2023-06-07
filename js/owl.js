$('.owl-carousel').owlCarousel({
	//items:2,
	loop:true,
	margin:20,
	nav: false,
	dots: false,
	rewind: true,
	autoplay: true,

	responsive:{
		 0:{
			  items:1
		 },
		 700:{
			  items:2
		 },
		 1100:{
			  items:4
		 }
	}
})