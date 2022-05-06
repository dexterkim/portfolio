$(document).ready(function(){
    $(window).scroll(function(){
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
          }
        /////////////스크롤 우측 이동/////////////////
         sc = $(window).scrollTop();
         $('#sc').text(sc);
         if( sc >= $('#page3').offset().top &&  sc < $('#page4').offset().top  ){
             $('#page3_box').fadeIn(500)
             $('#page3_box').css({'position':'fixed','top':'0','left': (sc-$('#page3').offset().top)*-0.9    })
         }
         else { 
             $('#page3_box').stop().hide()
         }
         //else if( sc >= $('#page5').offset().top ){
         //   $('#page4_box').css({'position':'absolute','top':'9000px','left': (sc-$('#page4').offset().top)*-0.8    })
         //}  
     })
    //////////////////네비게이션 바/////////////////
    $('#navigation>li:nth-child(1)').click(function(){
        $('body,html').animate({scrollTop:$('#main').offset().top},1000);
    })
    $('#navigation>li:nth-child(2)').click(function(){
        $('body,html').animate({scrollTop:$('#page3').offset().top},1000);
    })
    $('#navigation>li:nth-child(3)').click(function(){
        $('body,html').animate({scrollTop:$('#page4').offset().top},1000);
    })
    $('#navigation>li:nth-child(4)').click(function(){
        $('body,html').animate({scrollTop:$('.kyoto').offset().top},1000);
    })
    onscroll = function() {
        var header = document.documentElement.scrollTop || document.body.scrollTop;

    ///////////////네비게이션 위치별 색상//////////////////////
        if(header<1000) { $('#navigation>li:nth-child(1)').css({'background-color':'#fff','border':'none','margin-bottom':'30px'}).siblings('#navigation>li').css({'background-color':'transparent','border':'2px solid #fff','margin':'10px auto'}),$('#navigation>li:nth-child(1)').children('h4').css({'position':'absolute','top':'20px','left':'-43px','color':'#fff','display':'block'}).parent().siblings().children().css({'display':'none'}) }
        if(header>=1000) { $('#navigation>li:nth-child(2)').css({'background-color':'#fff','border':'none','margin-bottom':'30px'}).siblings('#navigation>li').css({'background-color':'transparent','border':'2px solid #fff','margin':'10px auto'}),$('#navigation>li:nth-child(2)').children('h4').css({'position':'absolute','top':'20px','left':'-43px','color':'#fff','display':'block'}).parent().siblings().children().css({'display':'none'}) }
        if(header>=5200) { $('#navigation>li:nth-child(2)').css({'background-color':'#000','border':'none','margin-bottom':'30px'}).siblings('#navigation>li').css({'background-color':'transparent','border':'2px solid #000','margin':'10px auto'}),$('#navigation>li:nth-child(2)').children('h4').css({'position':'absolute','top':'20px','left':'-43px','color':'#000','display':'block'}).parent().siblings().children().css({'display':'none'}) }
        if(header>=7400) { $('#navigation>li:nth-child(2)').css({'background-color':'#fff','border':'none','margin-bottom':'30px'}).siblings('#navigation>li').css({'background-color':'transparent','border':'2px solid #fff','margin':'10px auto'}),$('#navigation>li:nth-child(2)').children('h4').css({'position':'absolute','top':'20px','left':'-43px','color':'#fff','display':'block'}).parent().siblings().children().css({'display':'none'}) }
        if(header>=9500) { $('#navigation>li:nth-child(2)').css({'background-color':'#000','border':'none','margin-bottom':'30px'}).siblings('#navigation>li').css({'background-color':'transparent','border':'2px solid #000','margin':'10px auto'}),$('#navigation>li:nth-child(2)').children('h4').css({'position':'absolute','top':'20px','left':'-43px','color':'#000','display':'block'}).parent().siblings().children().css({'display':'none'}) }
        if(header>=11600) { $('#navigation>li:nth-child(2)').css({'background-color':'#fff','border':'none','margin-bottom':'30px'}).siblings('#navigation>li').css({'background-color':'transparent','border':'2px solid #fff','margin':'10px auto'}),$('#navigation>li:nth-child(2)').children('h4').css({'position':'absolute','top':'20px','left':'-43px','color':'#fff','display':'block'}).parent().siblings().children().css({'display':'none'}) }
        if(header>=13800) { $('#navigation>li:nth-child(2)').css({'background-color':'#000','border':'none','margin-bottom':'30px'}).siblings('#navigation>li').css({'background-color':'transparent','border':'2px solid #000','margin':'10px auto'}),$('#navigation>li:nth-child(2)').children('h4').css({'position':'absolute','top':'20px','left':'-43px','color':'#000','display':'block'}).parent().siblings().children().css({'display':'none'}) }
        if(header>=14400) { $('#navigation>li:nth-child(3)').css({'background-color':'#000','border':'none','margin-bottom':'30px'}).siblings('#navigation>li').css({'background-color':'transparent','border':'2px solid #000','margin':'10px auto'}),$('#navigation>li:nth-child(3)').children('h4').css({'position':'absolute','top':'20px','left':'-43px','color':'#000','display':'block'}).parent().siblings().children().css({'display':'none'}) }
        if(header>=15400) { $('#navigation>li:nth-child(4)').css({'background-color':'#000','border':'none','margin-bottom':'30px'}).siblings('#navigation>li').css({'background-color':'transparent','border':'2px solid #000','margin':'10px auto'}),$('#navigation>li:nth-child(4)').children('h4').css({'position':'absolute','top':'20px','left':'-43px','color':'#000','display':'block'}).parent().siblings().children().css({'display':'none'}) }

    ///////////////osaka bg//////////////////////
        if(header >=1100){$('#osaka1_left>img').animate({'position':'absolute','width':'1620px','height':'800px'},1000),$('#osaka_titlebox').animate({'position':'fixed','width':'400px','height':'600px','right':'300px','bottom':'200px'},1000),$('#osaka1_title1').animate({'width':'150px','height':'220px'},1000),$('#osaka1_title2').animate({'width':'50px','height':'110px','right':'60px','top':'250px'},1000) }

    ///////////////헤더 색//////////////////////
        if(header <1000) { $('#menu_bt>li').css({'background-color':'#fff'}),$('#header_right>h2').css({'color':'#fff'}),$('#logo>img').attr({'src':'icons/logo.png'}) }
        if(header >=1000) { $('#menu_bt>li').css({'background-color':'#000'}),$('#header_right>h2').css({'color':'#000'})}
        if(header >=1100) {$('#menu_bt>li').css({'background-color':'#fff'})}
        if(header >=1200) {$('#header_right>h2').css({'color':'#fff'})}
        if(header >=3140) { $('#logo>img').attr({'src':'icons/logo.png'}),$('#menu_bt>li').css({'background-color':'#fff'}),$('#header_right>h2').css({'color':'#fff'}) }
        if(header <3140) { $('#logo>img').attr({'src':'icons/logo.png'}),$('header').css({'background-color':'transparent'}) }
        if(header >=3300){$('#menu_bt>li').css({'background-color':'#000'}),$('#header_right>h2').css({'color':'#000'})}
        if(header >=5200){$('#logo>img').attr({'src':'icons/logo_b.png'})}
        if(header >=5400) {$('#menu_bt>li').css({'background-color':'#fff'}),$('#header_right>h2').css({'color':'#fff'})}
        if(header >=7300){$('#logo>img').attr({'src':'icons/logo.png'})}
        if(header >=7500) {$('#menu_bt>li').css({'background-color':'#000'})}
        if(header >=7600) {$('#header_right>h2').css({'color':'#000'})}
        if(header >=9400){$('#logo>img').attr({'src':'icons/logo_b.png'})}
        if(header >=9620) {$('#menu_bt>li').css({'background-color':'#fff'})}
        if(header >=9680) {$('#header_right>h2').css({'color':'#fff'})}
        if(header >=11600){$('#logo>img').attr({'src':'icons/logo.png'})}
        if(header >=11800) {$('#menu_bt>li').css({'background-color':'#000'}),$('#header_right>h2').css({'color':'#000'})}
        if(header >=13700){$('#logo>img').attr({'src':'icons/logo_b.png'})}

        ///////////////page3///////////////////////////////////
        if(header >=11500){$('#page3_end').css({'position':'absolute','display':'none'})}
        if(header >=11700){$('#page3_end').css({'position':'fixed','display':'inline'})}
        if(header >=13800){$('#page3_end').css({'position':'absolute'})}
    }

     //////////////////서브 메뉴////////////////
     let num = 0
    $('#menu_bt').click(function(){
        if( num==0){
            num=1
            $('#menu_bt>li:nth-child(1)').css({'transform':'rotate(45deg)','top':'9px'},)
            $('#menu_bt>li:nth-child(2)').hide()
            $('#menu_bt>li:nth-child(3)').css({'transform':'rotate(-45deg)','top':'9px'})
            $('#menu_popup').stop().animate({'right':'0'},200)
        }
        else if (num==1){
            num=0
            $('#menu_bt>li:nth-child(1)').css({'transform':'rotate(0deg)','top':'0px'},)
            $('#menu_bt>li:nth-child(2)').show()
            $('#menu_bt>li:nth-child(3)').css({'transform':'rotate(0deg)','top':'22px'})
            $('#menu_popup').stop().animate({'right':'-550'},200)
        }
    })

 /////////////////////서브메뉴//////////////////////
    $(' #menu_popup_menu>li').mouseenter(function(){
        $(this).children('.sub').stop().slideDown(400)
    })
    $(' #menu_popup_menu>li').mouseleave(function(){
        $(this).children('.sub').stop().slideUp(400)
    })

        /////////////////마우스휠/////////////
            $('#main_mousewheel').animate({'top':'18px','opacity':'0'},700)
            $('#main_mousewheel').animate({'top':'6px','opacity':'1'},0)
        setInterval(function(){
            $('#main_mousewheel').animate({'top':'18px','opacity':'0'},700)
            $('#main_mousewheel').animate({'top':'6px','opacity':'1'},0)
        },710)

        ///////////////////오사카성 slide//////////////////
            let osaka_slide_num = 0;
        $('#osaka_castle_nextbt').click(function(){
            osaka_slide_num = osaka_slide_num - 700;
            if(osaka_slide_num<-1400){osaka_slide_num = 0}
            if(osaka_slide_num== 0) { $('#osaka_castle_slidebt>li:nth-child(1)').css({'background-color':'#fff'}).siblings('#osaka_castle_slidebt>li').css({'background-color':'transparent'})}
            if(osaka_slide_num==-700) { $('#osaka_castle_slidebt>li:nth-child(2)').css({'background-color':'#fff'}).siblings('#osaka_castle_slidebt>li').css({'background-color':'transparent'})}
            if(osaka_slide_num==-1400) { $('#osaka_castle_slidebt>li:nth-child(3)').css({'background-color':'#fff'}).siblings('#osaka_castle_slidebt>li').css({'background-color':'transparent'})}
            $('#osaka_castle_slide').stop().animate({'left':osaka_slide_num+'px'})
        })
        $('#osaka_castle_prevbt').click(function(){
            osaka_slide_num = osaka_slide_num + 700;
            if(osaka_slide_num>0){osaka_slide_num = -1400}
            if(osaka_slide_num== 0) { $('#osaka_castle_slidebt>li:nth-child(1)').css({'background-color':'#fff'}).siblings('#osaka_castle_slidebt>li').css({'background-color':'transparent'})}
            if(osaka_slide_num==-700) { $('#osaka_castle_slidebt>li:nth-child(2)').css({'background-color':'#fff'}).siblings('#osaka_castle_slidebt>li').css({'background-color':'transparent'})}
            if(osaka_slide_num==-1400) { $('#osaka_castle_slidebt>li:nth-child(3)').css({'background-color':'#fff'}).siblings('#osaka_castle_slidebt>li').css({'background-color':'transparent'})}
            $('#osaka_castle_slide').stop().animate({'left':osaka_slide_num+'px'})
        })
        $('#osaka_castle_slidebt>li').click(function(){
            $(this).css({'background-color':'#fff'}).siblings().css({'background-color':'transparent'})
            $('#osaka_castle_slide').stop().animate({'left':     $(this).index()*-700+'px'})
        })

        ///////////////////////우메다 slide/////////////////////////
        let umeda_slide_num = 0;
        $('#umeda_slide_nextbt').click(function(){
            umeda_slide_num = umeda_slide_num - 400;
            if(umeda_slide_num<-800){umeda_slide_num = 0}
            $('#umeda_slide').stop().animate({'left':umeda_slide_num+'px'})
        })
        $('#umeda_slide_prevbt').click(function(){
            umeda_slide_num = umeda_slide_num + 400;
            if(umeda_slide_num>0){umeda_slide_num = -800}
            $('#umeda_slide').stop().animate({'left':umeda_slide_num+'px'})
        })
        
        ///////////////////////노니와노유 slide/////////////////////////
        let naniwanoyo_slide_num = 0;
        $('#naniwanoyo_slide_nextbt').click(function(){
            naniwanoyo_slide_num = naniwanoyo_slide_num - 400;
            if(naniwanoyo_slide_num<-800){naniwanoyo_slide_num = 0}
            $('#naniwanoyo_slide').stop().animate({'left':naniwanoyo_slide_num+'px'})
        })
        $('#naniwanoyo_slide_prevbt').click(function(){
            naniwanoyo_slide_num = naniwanoyo_slide_num + 400;
            if(naniwanoyo_slide_num>0){naniwanoyo_slide_num = -800}
            $('#naniwanoyo_slide').stop().animate({'left':naniwanoyo_slide_num+'px'})
        })
        /////////////////////트래블 팁//////////////////////////////
        let travel_slide_num = 0;
        $('#travel_nextbt').click(function(){
            travel_slide_num = travel_slide_num - 310;
            if(travel_slide_num<-900){travel_slide_num = 0}
            $('#travel_slide').stop().animate({'left':travel_slide_num+'px'})
        })
        $('#travel_prevbt').click(function(){
            travel_slide_num = travel_slide_num + 310;
            if(travel_slide_num>0){travel_slide_num = -900}
            $('#travel_slide').stop().animate({'left':travel_slide_num+'px'})
        })
 })//////마지막