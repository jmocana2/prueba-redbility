 $(document).ready(function () {

 	function getWithNavigator(){
 		return $(window).width();
 	}

 	if(getWithNavigator() >= 645){
	 	var index = $('.swiper-slide').length;
	 	var my_sections = ['Who', 'What', 'How', 'Where'];

	 	my_swiper = new Swiper ('.swiper-container', {
	      // Optional parameters
	      direction: 'horizontal',
	      loop: true,
	      parallax: true,
	      speed: 600,
	      pagination: '.swiper-pagination',
          paginationClickable: true,
	      paginationBulletRender: function (index, className) {
		      return '<li class="' + className + " " + my_sections[index].toLowerCase() + '"><span>' + my_sections[index] + '</span></li>';
		  }
	    });
	} 		       
  });