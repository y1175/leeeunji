$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) { // 얘의 위치가 스크롤된 화면 기준 600을 넘어가면
            $('.ScrollButton').fadeIn(); // 스크롤 버튼이 생김
        } else {
            $('.ScrollButton').fadeOut(); // 아니면 스크롤 버튼이 사라짐
        }
    });

    $("#TopButton").click(function() {
        $('html').animate({scrollTop : 0}, 600); // 그리고 눌렀을때 화면의 맨 위로 올라감 600은 올라가는 속도 조절
    });

});
