jQuery(document).ready(function() {

	jQuery(".menu-trigger").click(function() {

		jQuery(".nav-mobile").slideToggle(350, function() {

			jQuery(this).toggleClass("nav-mobile-expanded").css("display", "");
			
		});
		
	});

});

jQuery(document).ready(function() {

	jQuery(".menu-trigger").click(function() {

		jQuery(".menu-trigger").show(350, function() {

			jQuery(this).toggleClass("close-trigger").css("display", "");
			
		});
		
	});

});