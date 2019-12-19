//VIVUS
var svg7 = new Vivus('mysvg5',{duration:60},function(){$('#mysvg5').attr('style','fill:#fff');});
var svg8 = new Vivus('mysvg6',{duration:60},function(){$('#mysvg6').attr('style','fill:#fff');});
var svg9 = new Vivus('mysvg7',{duration:60},function(){$('#mysvg7').attr('style','fill:#fff');});
var svg10 = new Vivus('mysvg8',{duration:60},function(){$('#mysvg8').attr('style','fill:#fff');});

//imgslide
$('.imageSlide').find('.wraper').find('div').each(function(){
    var timer;
    var wrapper = $(this);
    
    function changeImg(){
        var img = wrapper.find('a');
        var first = img.eq(0);
        var second = img.eq(1);
        
        first.fadeIn().appendTo(wrapper);
        second.fadeOut();
    }
    
    function startTimer(){
        timer = setInterval(changeImg,2000);
    }
    
    startTimer();
    //img 로 변경
});