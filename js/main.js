 $(document).ready(function () {

 	var mySwiper = {};
 	mySwiper.init = false;

 	function getWithNavigator(){
 		return $(window).width();
 	}

 	//carousel tablet and desktop
 	function initSwiper(){
 		var index = $('.swiper-slide').length;
	 	var my_sections = ['Who', 'What', 'How', 'Where']; //Config sections	 	
	 	
	 	mySwiper = new Swiper ('.swiper-container', {
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

	    mySwiper.init = true;
 	}

 	if(!mySwiper.init && getWithNavigator() >= 645){
 		initSwiper();
 	} 	

 	//resize window
 	$( window ).resize(function() {
	  if(getWithNavigator() < 645 && mySwiper.init){
	  	mySwiper.destroy(true, true);
	  	mySwiper.init = false;	  	 	
	  }	  	  
	  if(getWithNavigator() >= 645 && !mySwiper.init){
	    initSwiper();
	  }
	});
 	 		       
  });