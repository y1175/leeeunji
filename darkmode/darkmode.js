/*다크모드 스크립트*/

$(document).ready(function(){



        $('#darkSwitch').on('click',function(){
            {
                if($('#darkSwitch').is(':checked')) //스위치가 체크상태일때
                    {
                $('body').css('backgroundColor','');    //적용시킬부분의 배경,글자색 css를 초기화시킴
                $('body').css('color','');
                $('body').css('backgroundColor','black');
                $('body').css('color','lightgray');

                $('.card,.modal-body,.modal-header,.modal-footer').addClass('darkmode');  //바디에서 적용이 안되는 부분들을 일일이 적용
                $('.badge, .btn-primary, img.btn ,#plus').addClass('darkbadge');  //darkbadge 클래스를 추가시키면 색반전되는 css를 만들어놨음.
                    }
                else{                                //else(체크해제됐을때의 상태)에서 원래대로 돌아오게끔 구현
                   $('body').css('backgroundColor','');
                $('body').css('color','');
                $('body').css('backgroundColor','white');
                $('body').css('color','black');
                $('.card,.modal-body,.modal-header,.modal-footer').removeClass('darkmode');
                $('.card,.modal-body,.modal-header,.modal-footer').removeClass('lightmode');
                $('.badge, .btn-primary, img.btn ,#plus').removeClass('darkbadge');
                }
            }


    });
