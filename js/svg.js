var svg1 = new Vivus('mysvg1');
var svg2 = new Vivus('mysvg2',{duration:50});
var svg3 = new Vivus('mysvg3');
var svg4 = new Vivus('mysvg4');

$(window).scroll(function(){
	
	/*	if($(this).scrollTop() > $('#mysvg1').offset().top-500){
				svg1.play();
		}else{
				svg1.reset();
		}*/
	var wsc= $(this);
	
	starAni(wsc,'#mysvg1',svg1);	
	starAni(wsc,'#mysvg2',svg2);	
	starAni(wsc,'#mysvg3',svg3);	
	starAni(wsc,'#mysvg4',svg4);	
	
});

	

function starAni(th,ms,vv){
	if(th.scrollTop() > $(ms).offset().top-500){
			vv.play();
	}else{
			vv.reset();
	}
}



//anime
anime({
  targets: '.anime1',
	//path 가 대상일때 points 대신 d하면 된다.
  points: [
    { value: '479,289 300,289 121,289 121,200 121,111 300,200 479,111 479,200' },
    { value: '479,289 300,200 121,289 121,200 121,111 300,200 479,111 479,200' },
    { value: '479,289 300,200 121,289 67,204.3 121,111 300,200 479,111 479,200' },
    { value: '479,289 300,200 121,289 67,204.3 121,111 300,200 479,111 532.3,200' },
    { value: '479,289 300,289 121,289 121,200 121,111 300,111 479,111 479,200' }
  ],
  easing: 'easeOutQuad',
  duration: 1000,
  loop: true
});
















