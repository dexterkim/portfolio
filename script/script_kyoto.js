$(document).ready(function(){
    $('#slide_bg>li:nth-child(2)').delay(1000).fadeIn(490,function(){
        $('#slide_bg>li:nth-child(3)').delay(1000).fadeIn(490,function(){
        $('#slide_bg>li:nth-child(4)').delay(1000).fadeIn(490,function(){
        $('#slide_bg>li:nth-child(2)').delay(1000).fadeOut(500)
        $('#slide_bg>li:nth-child(3)').delay(1000).fadeOut(500)
        $('#slide_bg>li:nth-child(4)').delay(1000).fadeOut(500)
        $('#slide_bg>li:nth-child(1)').delay(1000).fadeIn(500)
        })
        })
        })
    setInterval(function(){      
        $('#slide_bg>li:nth-child(2)').delay(1000).fadeIn(490,function(){
        $('#slide_bg>li:nth-child(3)').delay(1000).fadeIn(490,function(){
        $('#slide_bg>li:nth-child(4)').delay(1000).fadeIn(490,function(){
        $('#slide_bg>li:nth-child(2)').delay(1000).fadeOut(500)
        $('#slide_bg>li:nth-child(3)').delay(1000).fadeOut(500)
        $('#slide_bg>li:nth-child(4)').delay(1000).fadeOut(500)
        $('#slide_bg>li:nth-child(1)').delay(1000).fadeIn(500)
        })
        })
        })
    },7000)
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

         ///////////////////가로영역 네비게이션///////////////////////
        if(sc>=1500){
            $('.kyoto_line>.kyoto_line_text1').delay(500).animate({'opacity':'1'},800)
        }
         if(sc>=2800){
            $('#fiushimi_inari_right').delay(500).css({'right':'200px','opacity':'1'})
        }
        if(sc>=3600){
            $('#kiyomizudera1').delay(500).css({'top':'50px','opacity':'1'})
            $('.kyoto_line>.kyoto_line_text2').delay(500).animate({'opacity':'1'},800)
        }
        if(sc>=3700){
           $('#kiyomizudera2').delay(500).css({'top':'350px','opacity':'1'})
           $('#kiyomizudera3').delay(500).css({'top':'350px','opacity':'1'})
        }
        if(sc>=5000){
            $('#kiyomizudera_right').delay(300).fadeIn(800)
        }
        if(sc>=6000){
            $('#sanjusangendo_left').delay(300).animate({'marginLeft':'110px','opacity':'1'},800)
            $('.kyoto_line>.kyoto_line_text3').delay(500).animate({'opacity':'1'},800)
        }
        if(sc>=6800){
            $('#sanjusangendo_text').delay(300).css({'opacity':'1'})
        }
        if(sc>=7200){
            $('#sanjusangendo_right').delay(300).animate({'marginRight':'100px','opacity':'1'})
        }
        if(sc>=7900){
            $('.kyoto_line>.kyoto_line_text4').delay(500).animate({'opacity':'1'},800)
        }
        if(sc>=10200){
            $('#gionmatsuri1').delay(300).animate({'marginTop':'0px','opacity':'1'},800)
            $('#gionmatsuri2').delay(300).animate({'marginTop':'30px','opacity':'1'},800)
            $('.kyoto_line>.kyoto_line_text5').delay(500).animate({'opacity':'1'},800)
        }
        if(sc>=14100){
            $('#travel_tipsbox>h2').css({'top':'0px','opacity':'1'})
        }
        if(sc>=14200){
            $('#travel_tipsbox>h3').css({'top':'200px','opacity':'1'})
        }
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
        $('body,html').animate({scrollTop:$('.osaka').offset().top},1000);
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

    ///////////////kyoto bg//////////////////////
        if(header >=1100){
            $('#kyoto1_left>img').css({'width':'1620px','height':'800px'},1000),
            $('#kyoto_titlebox').css({'width':'400px','height':'600px','right':'300px','bottom':'200px'},1000),
            $('.kyoto1_title1').css({'width':'150px','height':'220px','left':'100px','top':'100px'},1000),
            $('.kyoto1_title2').css({'width':'50px','height':'120px','right':'60px','top':'350px'},1000),
            $('#kyoto1_left_textbox1').css({'left':'-700px','bottom':'-50px','line-height':'20px'},1000),
            $('#kyoto1_left_textbox1>h4').css({'font-size':'14px'},1000),
            $('#kyoto1_left_textbox1>p').css({'font-size':'16px'},1000)
        }
        else {
            $('#kyoto1_left>img').css({'width':'1900px','height':'1000px'},1000),
            $('#kyoto_titlebox').css({'width':'400px','height':'600px','right':'100px','bottom':'100px'},1000),
            $('.kyoto1_title1').css({'width':'235px','height':'320px','left':'0','top':'0'},1000),
            $('.kyoto1_title2').css({'width':'65px','height':'190px','right':'50px','top':'350px'},1000,),
            $('#kyoto1_left_textbox1').css({'left':'-900px','bottom':'-100px','line-height':'40px'},1000),
            $('#kyoto1_left_textbox1>h4').css({'font-size':'24px'},1000),
            $('#kyoto1_left_textbox1>p').css({'font-size':'30px'},1000)
        }
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

     //////////////////메뉴////////////////
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
    $('#menu_popup_menu>li:nth-child(3)').click(function(){
        $('html,body').animate({'scrollTop':'14800px'},500)
    })

 /////////////////////서브메뉴//////////////////////
    $('#menu_popup_menu>li').mouseenter(function(){
        $(this).children('.sub').stop().slideDown(400)
    })
    $('#menu_popup_menu>li').mouseleave(function(){
        $(this).children('.sub').stop().slideUp(400)
    })
    $('.sub>li:nth-child(1)').click(function(){
        $('html,body').animate({'scrollTop':'3135px'},500)
    })
    $('.sub>li:nth-child(2)').click(function(){
        $('html,body').animate({'scrollTop':'5280px'},500)
    })
    $('.sub>li:nth-child(3)').click(function(){
        $('html,body').animate({'scrollTop':'7415px'},500)
    })
    $('.sub>li:nth-child(4)').click(function(){
        $('html,body').animate({'scrollTop':'9530px'},500)
    })
    $('.sub>li:nth-child(5)').click(function(){
        $('html,body').animate({'scrollTop':'11675px'},500)
    })
    /////////////////마우스휠/////////////
        $('#main_mousewheel').animate({'top':'18px','opacity':'0'},700)
        $('#main_mousewheel').animate({'top':'6px','opacity':'1'},0)
    setInterval(function(){
        $('#main_mousewheel').animate({'top':'18px','opacity':'0'},700)
        $('#main_mousewheel').animate({'top':'6px','opacity':'1'},0)
    },710)

    ///////////////////fiushimi_inari slide//////////////////
        let fiushimi_inari_slide_num = 0;
    $('#fiushimi_inari_nextbt').click(function(){
        fiushimi_inari_slide_num = fiushimi_inari_slide_num - 700;
        if(fiushimi_inari_slide_num<-1400){fiushimi_inari_slide_num = 0}
        if(fiushimi_inari_slide_num== 0) { $('#fiushimi_inari_slidebt>li:nth-child(1)').css({'background-color':'#fff'}).siblings('#fiushimi_inari_slidebt>li').css({'background-color':'transparent'})}
        if(fiushimi_inari_slide_num==-700) { $('#fiushimi_inari_slidebt>li:nth-child(2)').css({'background-color':'#fff'}).siblings('#fiushimi_inari_slidebt>li').css({'background-color':'transparent'})}
        if(fiushimi_inari_slide_num==-1400) { $('#fiushimi_inari_slidebt>li:nth-child(3)').css({'background-color':'#fff'}).siblings('#fiushimi_inari_slidebt>li').css({'background-color':'transparent'})}
        $('#fiushimi_inari_slide').stop().animate({'left':fiushimi_inari_slide_num+'px'})
    })
    $('#fiushimi_inari_prevbt').click(function(){
        fiushimi_inari_slide_num = fiushimi_inari_slide_num + 700;
        if(fiushimi_inari_slide_num>0){fiushimi_inari_slide_num = -1400}
        if(fiushimi_inari_slide_num== 0) { $('#fiushimi_inari_slidebt>li:nth-child(1)').css({'background-color':'#fff'}).siblings('#fiushimi_inari_slidebt>li').css({'background-color':'transparent'})}
        if(fiushimi_inari_slide_num==-700) { $('#fiushimi_inari_slidebt>li:nth-child(2)').css({'background-color':'#fff'}).siblings('#fiushimi_inari_slidebt>li').css({'background-color':'transparent'})}
        if(fiushimi_inari_slide_num==-1400) { $('#fiushimi_inari_slidebt>li:nth-child(3)').css({'background-color':'#fff'}).siblings('#fiushimi_inari_slidebt>li').css({'background-color':'transparent'})}
        $('#fiushimi_inari_slide').stop().animate({'left':fiushimi_inari_slide_num+'px'})
    })
    $('#fiushimi_inari_slidebt>li').click(function(){
        $(this).css({'background-color':'#fff'}).siblings().css({'background-color':'transparent'})
        $('#fiushimi_inari_slide').stop().animate({'left':     $(this).index()*-700+'px'})
    })

    ///////////////////////금각사 slide/////////////////////////
    let kinkakuji_slide_num = 0;
    $('#kinkakuji_slide_nextbt').click(function(){
        kinkakuji_slide_num = kinkakuji_slide_num - 400;
        if(kinkakuji_slide_num<-800){kinkakuji_slide_num = 0}
        $('#kinkakuji_slide').stop().animate({'left':kinkakuji_slide_num+'px'})
    })
    $('#kinkakuji_slide_prevbt').click(function(){
        kinkakuji_slide_num = kinkakuji_slide_num + 400;
        if(kinkakuji_slide_num>0){kinkakuji_slide_num = -800}
        $('#kinkakuji_slide').stop().animate({'left':kinkakuji_slide_num+'px'})
    })
    
    ///////////////////////은각사 slide/////////////////////////
    let ginkakuji_slide_num = 0;
    $('#ginkakuji_slide_nextbt').click(function(){
        ginkakuji_slide_num = ginkakuji_slide_num - 400;
        if(ginkakuji_slide_num<-800){ginkakuji_slide_num = 0}
        $('#ginkakuji_slide').stop().animate({'left':ginkakuji_slide_num+'px'})
    })
    $('#ginkakuji_slide_prevbt').click(function(){
        ginkakuji_slide_num = ginkakuji_slide_num + 400;
        if(ginkakuji_slide_num>0){ginkakuji_slide_num = -800}
        $('#ginkakuji_slide').stop().animate({'left':ginkakuji_slide_num+'px'})
    })
    /////////////////////트래블 팁//////////////////////////////
    let travel_slide_num = 0;
    $('#travel_nextbt').click(function(){
        travel_slide_num = travel_slide_num - 310;
        if(travel_slide_num<-930){travel_slide_num = 0}
        $('#travel_slide').stop().animate({'left':travel_slide_num+'px'})
    })
    $('#travel_prevbt').click(function(){
        travel_slide_num = travel_slide_num + 310;
        if(travel_slide_num>0){travel_slide_num = -930}
        $('#travel_slide').stop().animate({'left':travel_slide_num+'px'})
    })
    ///////////////////////교토 bg 슬라이드//////////////////////////////
    let kyoto_bg_slide_num = 0;
    $('#main_slide_nextbt').click(function(){
        $('html,body').animate({'scrollTop':'1000px'})
    })
    $('#main_slide_prevbt').click(function(){
        location.href = "index.html";
    })

    ////////////////more버튼//////////////////////////
    $('#fiushimi_inari_bt>img').click(function(){
        alert('준비중입니다')
    })
    $('#kiyomizudera_bt>img').click(function(){
        alert('준비중입니다')
    })
    $('#sanjusangendo_bt').click(function(){
        alert('준비중입니다')
    })
    $('#gionmatsuri_bt').click(function(){
        alert('준비중입니다')
    })
    $('#travel_slide>li:nth-child(5)').click(function(){
        alert('준비중입니다')
    })
    $('#travel_slide>li:nth-child(even)').click(function(){
        alert('준비중입니다')
    })
 })//////마지막