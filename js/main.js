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

    $('.sidebar-nav li:first a').css({
        'text-align': 'center',
        'text-indent': '0em',
        'font-size': '3em',
        'color': 'black',
        'font-weight': '600',
        'margin-bottom': '10px;'
    })

    //검색버튼
    $('.searchbtn').on('click', function () {
        let sbar = $('.topsearch div');
        var scrollTop = $(window).scrollTop();
        if (sbar.css('opacity') == '0') {
            sbar.css({
                'opacity': '1',
                'z-index': '1'
            })
            sbar.css('top', (scrollTop + 65)+"px");
            /*sbar.css('top', (scrollTop + parseInt(sbar.css('top')))+"px");*/
        } else {
            sbar.css({
                'opacity': '0',
                'z-index': '0'
            });
        }
    });

    $(window).scroll(function () {
        //최상단 고정바
        var scrollTop = $(window).scrollTop();
        let sbar = $('.topsearch div');
        if(scrollTop>99){
            $('.topnv').css({
            'opacity': '1',
            'z-index': '1'
        });
            sbar.css('top', (scrollTop + 65)+"px");
        }
        else{
           $('.topnv').css({
            'opacity': '0',
            'z-index': '0'
        });
        }
        //검색바
        sbar.css({
            'opacity': '0',
            'z-index': '0'
        });
    });
})
