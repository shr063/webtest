$(function(){
    //처음 화면 세팅 -나중에 에드클래스/리무브클래스 등으로 처리하는게 유지보수를 위해 좋음
    //현재는 직접 css 때려박는 초보용 작업
    $('.leftimg1').stop().delay(500).animate({left:0, opacity:1}, 1000);
    $('.rightimg1').stop().delay(500).animate({right:0, opacity:1}, 1000);
    $('.RNum1').css({background:'#897365', color:"#f9f9f9f"});

    //버튼을 클릭했을 경우
    $('.room4>li').click(function(){
        let i = $(this).index();

        //왼쪽사진
        $('.section_1_leftbottom>img').stop().animate({left:'-100%', opacity:0}, 1000);
        $('.section_1_leftbottom>img').eq(i).stop().animate({left:'0', opacity:1}, 1000);
        //오른쪽 사진
        $('.topimage>img').stop().animate({right:'-100%', opacity:0}, 1000);
        $('.topimage>img').eq(i).stop().animate({right:'0', opacity:1}, 1000);
        //버튼
        $('.room4>li').css({background:'none', color:'#897365'});
        $('.room4>li').eq(i).css({background:'#897365', color:'#f9f9f9'});
    });
})