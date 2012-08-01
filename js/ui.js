$(document).ready(function(){
	var jump = function(){
		$(".box").addClass("jump");
		var wait = window.setTimeout(function(){
				$('.box').removeClass("jump")
		},500);
	};
	$(document).click(jump).keydown(jump);
});