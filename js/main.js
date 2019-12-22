$(document).ready(function () {
    /* set css */
    $('#rap').css('padding', '0px 8.5%');
    $('body').css('background-color', 'white');

    /* header */
    $('h1').css('font-family', 'BMHANNA_11yrs');

    /* sidebar */
    $('#sidbar').css({
            'margin': '-1px auto',
            'left': '98px'
        }).children().children() /* sidlist */
        .css({
            'width': '300px',
            'height': '968px'
        }).children() /* sidebar-nav */
        .css('padding', '0px').children() /* sidebar-brand */
        .css({
            'list-style': 'none'
        });
    $('.sidebar-nav').children().on('click', function () {
        let ch = $(this).children('ul');
        $(ch).toggle();
    });

    /* figcaption */
    $(".hover").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );

    $('.sidebar-nav li:first a').css({
        'text-align': 'center',
        'text-indent': '0em',
        'font-size': '3em',
        'color': 'black',
        'font-weight': '600',
        'margin-bottom': '10px;'
    })

    $('#searchbtn').on('click', function () {
        let sbar = $('.topsearch div');

        if (sbar.css('opacity') == '0') {

            sbar.css({
                'opacity': '1',
                'z-index': '1'
            })
        } else {
            sbar.css({
                'opacity': '0',
                'z-index': '0'
            });
        }
    });

    $(window).scroll(function () {
        $('.topsearch div').css({
            'opacity': '0',
            'z-index': '0'
        });
        var scrollTop = $(window).scrollTop();
        if(scrollTop>99){
            $('.topnv').css({
            'opacity': '1',
            'z-index': '1'
        });
            $('.topsearch div').css('top',)
        }
        else{
           $('.topnv').css({
            'opacity': '0',
            'z-index': '0'
        });
        }
    });

      /*  스크롤 올리고 내릴때 배너가 따라다니는 기능*/
	// 기존 css에서 플로팅 배너 위치(top)값을 가져와 저장한다.
	/*var floatPosition = parseInt($("#floatMenu").css('top'));*/
	// 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );

	$(window).scroll(function() {
		// 현재 스크롤 위치를 가져온다.

        /*
		var newPosition = scrollTop + floatPosition + "px";

		$("#floatMenu").stop().animate({
			"top" : newPosition
		}, 300);
*/
	}).scroll();

})
