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
