$(document).ready(function(){

$('#tag-codinginfo').on('click',function(){

    let tag=$('.tag-codinginfo');
     if(tag.hasClass('tagselected')==false)
     tag.addClass('tagselected');
    else
      tag.removeClass('tagselected');


});

$('#tag-abroad').on('click',function(){

    let tag=$('.tag-abroad');
     if(tag.hasClass('tagselected')==false)
     tag.addClass('tagselected');
    else
      tag.removeClass('tagselected');


});

 $('#tag-codingquiz').on('click',function(){

    let tag=$('.tag-codingquiz');
     if(tag.hasClass('tagselected')==false)
     tag.addClass('tagselected');
    else
      tag.removeClass('tagselected');


});

$('#tag-blog').on('click',function(){

    let tag=$('.tag-blog');
     if(tag.hasClass('tagselected')==false)
     tag.addClass('tagselected');
    else
      tag.removeClass('tagselected');


});

    $('#tag-codinglect').on('click',function(){

    let tag=$('.tag-codinglect');
     if(tag.hasClass('tagselected')==false)
     tag.addClass('tagselected');
    else
      tag.removeClass('tagselected');


});

    $('#tag-korea').on('click',function(){

    let tag=$('.tag-korea');
     if(tag.hasClass('tagselected')==false)
     tag.addClass('tagselected');
    else
      tag.removeClass('tagselected');


});


     /* sidebar*/
    $('#sidbar').css({'margin':'-1px auto',
                     'left': '98px'}).children().children() /* sidlist */
                .css({'width':'300px'
                      ,'height': '968px'}).children() /* sidebar-nav */
                .css('padding','0px').children()/* sidebar-brand */
                .css({'list-style':'none'});
    $('.sidebar-nav').children().on('click', function() {
        let ch = $(this).children('ul');
        $(ch).toggle();
    });




});
/*darkswitch*/
$(document).ready(function(){




        $('#darkSwitch').on('click',function(){
            {
                if($('#darkSwitch').is(':checked'))
                    {
                $('body').css('backgroundColor','');
                $('body').css('color','');
                $('body').css('backgroundColor','black');
                $('body').css('color','lightgray');

                $('.card,.modal-body,.modal-header,.modal-footer').addClass('darkmode');
                $('.badge, .btn-primary, img.btn ,#plus, .modal .close').addClass('darkbadge');

                    }
                else{
                   $('body').css('backgroundColor','');
                $('body').css('color','');
                $('body').css('backgroundColor','white');
                $('body').css('color','black');
                $('.card,.modal-body,.modal-header,.modal-footer').removeClass('darkmode');
                $('.card,.modal-body,.modal-header,.modal-footer').removeClass('lightmode');
                $('.badge, .btn-primary, img.btn ,#plus, .modal .close').removeClass('darkbadge');
                }
            }


    });


});

/*recent-sidebar*/
        $(document).ready(function() {
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
        });

//Start of Tawk.to Script
window.onload=function()
{
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5dfae15243be710e1d22bb34/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

}



