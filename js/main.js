$(document).ready(function () {
    /* set css*/
    $('#rap').css('padding', '0px 8.5%');
    $('body').css('background-color', 'white');

    /* header */
    $('h1').css('font-family', 'BMHANNA_11yrs');



    /* sidebar*/
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
            function() {
                $(this).removeClass("hover");
            }
        );

})
