 $(document).ready(function () {

 	var mySwiper = {};
 	var myVerticalSwiper = {};
 	mySwiper.init = false;
 	myVerticalSwiper.init = false;

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

 	//inner page carousel
 	function initSwiperInner(){
 		var index = $('.swiper-slide').length;
	 	 	
	 	myVerticalSwiper = new Swiper ('.swiper-container-inner', {
	      // Optional parameters
	      direction: 'vertical',
	      loop: false,	    
	      speed: 600,
	      pagination: '.swiper-pagination-inner',
          paginationClickable: true
	    });

	    myVerticalSwiper.init = true;
 	}

 	if(!mySwiper.init && getWithNavigator() >= 645 && !myVerticalSwiper.init){
 		initSwiper();
 	} 

 	$( ".dropdown-menu.box a" ).click(function() {
	   
	   $(".swiper-container").remove();
	   $(".swiper-pagination").hide();
	   $(".swiper-pagination-inner").show();
 	   var url = "slides/" + $(this).text().replace(/\s+/g, '-').toLowerCase() + ".html"; 

	   $.ajax({
		  url: url,
		  cache: false
		})
		.done(function( html ) {
		   $( "main" ).append( html );
		   initSwiperInner();
		});
	});

	$( "main" ).on( "click", ".cont--inner_header a", function(e) {
	 	e.preventDefault();

	 	$(this).closest(".cont--inner").children("p").slideToggle("fast", function(){
	 		if($(this).css("display") != "none"){
	 			$(this).closest(".cont--inner").find("span").attr("class", "icon icon-redbility_close");
	 		}else{
	 			$(this).closest(".cont--inner").find("span").attr("class", "icon glyphicon glyphicon-plus");
	 		}
	 		
	 	});
	});



 	//resize window
 	$( window ).resize(function() {
	  if(getWithNavigator() < 645 && mySwiper.init){
	  	mySwiper.destroy(true, true);
	  	mySwiper.init = false;	  	 	
	  }	  
	  if(getWithNavigator() < 645 && myVerticalSwiper.init){
	  	myVerticalSwiper.destroy(true, true);
	  	myVerticalSwiper.init = false;	  	 	
	  }	  
	  if(getWithNavigator() >= 645 && !mySwiper.init){
	    initSwiper();
	  }	
	});
 	 		       
  });