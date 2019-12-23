
//VIVUS
new Vivus('textBoxStroke1',{duration:60},function(){$('.textBoxStroke').attr('style','fill:#fff');});
new Vivus('textBoxStroke2',{duration:60},function(){$('.textBoxStroke').attr('style','fill:#fff');});
new Vivus('textBoxStroke3',{duration:60},function(){$('.textBoxStroke').attr('style','fill:#fff');});

//모바일 분기
// function parallax (){
//         $(window).scroll(function(){
//                 if($(window).width() >= 768){
//                         $(window).scroll(function(){                    
//                         var th = $(this);	
//                         sAniM2(th,aniu,'AniU');	 
//                         sAniM2(th,anid,'AniD');
//                         });
//                 }
//                 var th = $(this);
//                 sAniM2(th,aniu,'AniU');	 
//                 sAniM2(th,anid,'AniD');
//         });
// }

//페러럭스 함수화.            
//mobile
// function starAniM2(th, vv, mm) {
//         if (th.scrollTop() > vv.offset().top - 780) {
//             vv.addClass(mm);
//         } else {
//             vv.removeClass(mm);
//         }
//     }
    
//     //pc
//     function starAni2(th, vv, mm) {
//         if (th.scrollTop() > vv.offset().top - 1290) {
//             vv.addClass(mm);
//         } else {
//             vv.removeClass(mm);
//         }
//     }