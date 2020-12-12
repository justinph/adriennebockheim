
/* code for template */

jQuery(document).ready(function(){ 
	
	
	$(function() {

		$('a.lightbox').lightBox(); // Select all links with lightbox class
	
	});
	
	$('a.email').bind("click",function(e){
		$('a.email').hide();
		$('span.email').show();
		return false;
	});
	
	
});
