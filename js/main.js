$( document ).ready(function() {
    $(function(){
	    $('#maximage').maximage({
	        cycleOptions: {
	            fx:'scrollHorz',
	            speed: 800,
	            timeout: 8000,
	            prev: '#arrow_left',
	            next: '#arrow_right'
	        },
	        onFirstImageLoaded: function(){
	            jQuery('#cycle-loader').hide();
	            jQuery('#maximage').fadeIn('fast');
	        }
	    });
	});
});