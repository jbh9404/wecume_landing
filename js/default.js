$(document).ready(function(){
	scroll
	var scrollHeight = $(document).height();
	$(".contact p").eq(1).click(function(){
		$("body,html").stop().animate({scrollTop:scrollHeight},1500);
		return false;
	}); 
	// $(".contact").click(function(){
	// 	$('html').animate({scrollTop : ($('#footer').offset().top)}, 600);
	// })

	//header
	var top=$("#header").offset().top;
	$(window).scroll(function(){
		var sc_t=$(document).scrollTop();
		if(sc_t>50){
			$("#header").css("background","#fff")
		}else{
			$("#header").css("background","transparent")
		}
	})
})