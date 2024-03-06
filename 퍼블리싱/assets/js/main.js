
$(document).ready(function() {

    $('.depth1-title').on('mouseenter focus', function() {
        // 현재 호버된 요소에 대해서만 동작하도록 함
        var $depth2Box = $(this).siblings('.depth-2-box');
        
        // 형제 요소인 .depth-2-box를 보여줌
        $depth2Box.stop(true, true).fadeIn(300);
        
        // 다른 형제 요소의 .depth-2-box는 감춤
        $(this).parent().siblings().find('.depth-2-box').stop(true, true).fadeOut(200);
    });

    $('.nav-top-menu').on('mouseleave', function(){
        $('.depth-2-box').stop(true, true).fadeOut(200);

    });



});