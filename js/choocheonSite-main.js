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


     $('li').on('click',function(){
              let ch = $(this).children('ul');
              $(ch).toggle();
          });

          $('#btn').on('click', function (event) {
           event.stopPropagation();
        $(this).toggleClass('open');
        if ($(this).hasClass('open')) {
            //$('#sidebar-wrapper').show(400);
            $('#sidebar-wrapper').animate({left: '250px'}, 500);
        } else {
            //$('#sidebar-wrapper').animate({left: '70px'}, 300);
            // 이걸 바로 잡으면 옆으로 샥 펼쳐짐 근데 왜 안되냐고
            //$('#sidebar-wrapper').hide(s400);
             $('#sidebar-wrapper').animate({left: '0px'}, 500);
        };


       });





});
