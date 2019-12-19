//VIVUS
var svg1 = new Vivus('mysvg1', { duration: 60 }, function () { $('#mysvg1').attr('style', 'fill:rgba(14,45,66,1)'); });
var svg2 = new Vivus('mysvg2', { duration: 60 }, function () { $('#mysvg2').attr('style', 'fill:rgba(14,45,66,1)'); });
var svg3 = new Vivus('mysvg3', { duration: 60 }, function () { $('#mysvg3').attr('style', 'fill:#fff'); });
var svg4 = new Vivus('mysvg4', { duration: 60 }, function () { $('#mysvg4').attr('style', 'fill:rgba(14,45,66,1)'); });

$(window).scroll(function () {
    var wsc = $(this);
    starAniVm(wsc, '#mysvg1', svg1);
    starAniVm(wsc, '#mysvg2', svg2);
    starAniVm(wsc, '#mysvg3', svg3);
    starAniVm(wsc, '#mysvg4', svg4);
});

anime({
    targets: '.rectTurn',
    scale: .8,
    rotate: '1turn',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 3000,
    loop: true
});

//parallax
var th = $(this);
var par1 = $('.cont1');
// var par2 = $('.cont2');
// var par3 = $('.cont3');
// var par4 = $('.cont4');
// var par5 = $('.cont5');
// var par6 = $('.cont6');
// var par7 = $('.cont7');
// var par8 = $('.cont8');
// var par9 = $('.cont9');
// var par10 = $('.cont10');
// var par11 = $('.cont11');
// var par12 = $('.cont12');
// var par13 = $('.cont13');
// var par14 = $('.cont14');

//모바일 분기    
$(window).scroll(function () {
    var th = $(this);
    starAniM2(th, par1, 'AniR');
    starAniM2(th, par2, 'AniR');
    starAniM2(th, par3, 'AniD');
    starAniM2(th, par4, 'AniR');
    starAniM2(th, par5, 'AniD');
    starAniM2(th, par6, 'AniD');
    starAniM2(th, par7, 'AniR');
    starAniM2(th, par8, 'AniD');
    starAniM2(th, par9, 'big');
    starAniM2(th, par10, 'big');
    starAniM2(th, par11, 'AniD');
    starAniM2(th, par12, 'AniD');
    starAniM2(th, par13, 'AniD');
    starAniM2(th, par14, 'AniD');
});

if ($(window).width() >= 768) {
    $(window).scroll(function () {
        var th = $(this);
        starAni2(th, par1, 'AniR');
        starAni2(th, par2, 'AniR');
        starAni2(th, par3, 'AniD');
        starAni2(th, par4, 'AniR');
        starAni2(th, par5, 'AniD');
        starAni2(th, par6, 'AniD');
        starAni2(th, par7, 'AniR');
        starAni2(th, par8, 'AniD');
        starAni2(th, par9, 'big');
        starAni2(th, par10, 'big');
        starAni2(th, par11, 'AniD');
        starAni2(th, par12, 'AniD');
        starAni2(th, par13, 'AniD');
        starAni2(th, par14, 'AniD');
    });
}