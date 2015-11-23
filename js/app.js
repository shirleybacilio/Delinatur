$(document).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll >= 600) {
        
    	$("header").css("background-color", "gray");
    } else {
       $("header").css("background-color", "#FFE992");
    }
});