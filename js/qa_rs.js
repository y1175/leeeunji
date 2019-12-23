            // menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
            $(".menu>a").click(function() {
                var submenu = $(this).next("ul");

                // submenu 가 화면상에 보일때는 위로 접고 아니면 아래로 펼치기
                if (submenu.is(":visible")) {
                    submenu.slideUp();
                } else {
                    submenu.slideDown();
                }

            });


      /*  스크롤 올리고 내릴때 배너가 따라다니는 기능*/
	// 기존 css에서 플로팅 배너 위치(top)값을 가져와 저장한다.
	var floatPosition = parseInt($("#floatMenu").css('top'));
	// 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );

	$(window).scroll(function() {
		// 현재 스크롤 위치를 가져온다.
		var scrollTop = $(window).scrollTop();
		var newPosition = scrollTop + floatPosition + "px";

		$("#floatMenu").stop().animate({
			"top" : newPosition
		}, 300);

	}).scroll();
