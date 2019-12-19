
//VIVUS
new Vivus('mysvg1',{duration:60},function(){$('#mysvg1').attr('style','fill:#fff');});
new Vivus('mysvg2',{duration:60},function(){$('#mysvg2').attr('style','fill:#fff');});
new Vivus('mysvg3',{duration:60},function(){$('#mysvg3').attr('style','fill:#fff');});

//parallax
var th = $(this);
var par18 = $('.cont18');
var par19 = $('.cont19');
var par20 = $('.cont20');
var par21 = $('.cont21');
var par22 = $('.cont22');
var par23 = $('.cont23');
    
//모바일 분기
$(window).scroll(function(){
    var th = $(this);
    sAniM2(th,par18,'AniD');	 
    sAniM2(th,par19,'AniD');	 
    sAniM2(th,par20,'AniD');
    sAniM2(th,par21,'AniD');
    sAniM2(th,par22,'AniD');
    sAniM2(th,par23,'AniD');
});

if($(window).width() >= 768){
    $(window).scroll(function(){                    
     
    sAni2(th,par18,'AniD');	 
    sAni2(th,par19,'AniD');	 
    sAni2(th,par20,'AniD');	
    sAni2(th,par21,'AniD');	
    });
}

//페러럭스 함수화.            
function sAniM2(th,vv,mm){
    if(th.scrollTop() > vv.offset().top -800){
            vv.addClass(mm);
    }else{
            vv.removeClass(mm);
    }
}

function sAni2(th,vv,mm){
    if(th.scrollTop() > vv.offset().top -1500){
            vv.addClass(mm);
    }else{
            vv.removeClass(mm);
    }
}

function sAniSlide(th,vv){
    if(th.scrollTop() > vv.offset().top -1500){
            vv.slideDown();
    }else{
            vv.hide();
    }
}
