//VIVUS
var svg1 = new Vivus('mysvg1', { duration: 60 }, function () { $('#mysvg1').attr('style', 'fill:rgba(14,45,66,1)'); });
var svg2 = new Vivus('mysvg2', { duration: 60 }, function () { $('#mysvg2').attr('style', 'fill:rgba(14,45,66,1)'); });
var svg3 = new Vivus('mysvg3', { duration: 60 }, function () { $('#mysvg3').attr('style', 'fill:#fff'); });
var svg4 = new Vivus('mysvg4', { duration: 60 }, function () { $('#mysvg4').attr('style', 'fill:rgba(14,45,66,1)'); });

anime({
    targets: '.rectTurn',
    scale: .8,
    rotate: '1turn',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 3000,
    loop: true
});