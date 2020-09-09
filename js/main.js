$(document).ready(function() {
	let nav_offset_top = $('.header-area').height()+50;

	function navbarFixed(){
		if ($('.header-area').length){
			$(window).scroll(function(){
				let scroll = $(window).scrollTop();
				if(scroll>= nav_offset_top){
					$('.header-area .main-menu').addClass('navbar_fixed');	
				} else{
					$('.header-area .main-menu').removeClass('navbar_fixed');
				}
			})
		}
	}

	navbarFixed();
});