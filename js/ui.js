$(document).ready(function(){
	// Create clouds
	var maxClouds=4;
	var minCloudWidth = 100;
	var maxCloudWidth = 300;
	var minCloudHeight = 50;
	var maxCloudHeight = 100;
	var minCloudTop = 20;
	var maxCloudTop = 400;

	for (var i=0; i<maxClouds; i++) {
		var $cloud = $("<div />");
		$cloud.addClass("clouds cloud-"+Math.round(Math.random()*9+1));
		$cloud.css({
			width: Math.round(Math.random()*(maxCloudWidth-minCloudWidth)+minCloudWidth),
			height: Math.round(Math.random()*(maxCloudHeight-minCloudHeight)+minCloudHeight),
			top:Math.round(Math.random()*(maxCloudTop-minCloudTop)+minCloudTop),
		});
		$("body").append($cloud);
	}

	var jump = function(){
		$(".box").addClass("jump");
		var wait = window.setTimeout(function(){
				$('.box').removeClass("jump")
		},500);
	};
	$(document).click(jump).keydown(jump).bind('touchstart',jump);
});