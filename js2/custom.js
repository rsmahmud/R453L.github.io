(function($) {

    "use strict";
	
	$(window).on("load", function() {
	
        /* ----------------------------------------------------------- */
		/*  PRELOADER ANIMATION
		/* ----------------------------------------------------------- */
	
		var pageTransitionAnimationDuration = 500
		var preloader = $(".preloader");
		pageTransition({
			target: document.querySelector('.page'),
			delay: 0,
			duration: pageTransitionAnimationDuration,
			classActive: 'animated',
			conditions: function (event, link) {
				return
				!/(\#|callto:|tel:|mailto:|:\/\/)/.test(link)
				&& !event.currentTarget.hasAttribute('data-lightgallery')
				&& event.currentTarget.getAttribute('href') !== 'javascript:void(0);';
			},
			onTransitionStart: function (options) {
				setTimeout(function () {
					preloader.removeClass('loaded');
				}, options.duration * .75);
			},
			onReady: function () {
				preloader.addClass('loaded');
			}
		});
		
		/* ----------------------------------------------------------- */
        /*  TEXT ROTATOR ANIMATION
        /* ----------------------------------------------------------- */
		if ($("#selector").length) {
			$("#selector").animatedHeadline({
				 animationType: "clip"
			});
		}
		
	});

})(jQuery);