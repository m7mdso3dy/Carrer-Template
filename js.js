



		var	trig1 = ($('.education').offset().top),
			trig2 = $('.services>ul').offset().top,
			trig3 = $('.catalog').offset().top,
			trig4 = $('.testimonial>ul').offset().top,
			trig5 = $('.row2').offset().top,
			widTrig = $('.employment2').offset().top;
			
document.addEventListener('scroll',function(){
		var sc = $(document).scrollTop();
		var trig11 = trig1 - sc,
			trig22 = trig2 - sc,
			trig33 = trig3 - sc,
			trig44 = trig4 - sc,
			widTrig1 = widTrig -sc,
			trig55 = trig5 - sc;
	
	
		
		//titles animation
	if(trig11 < 800 ){
		
			$('.head1').animate({
				top: "0px",
				
			},700);
		}
		 if(trig22 < 800){
			$('.head2').animate({
				top: "0px",
				
			},700);
		} 
		if(trig33 < 800){
			$('.head3').animate({
				top: "0px",
				
			},700);
		} 
		if(trig44 < 800){
			$('.head4').animate({
				top: "0px",
				
			},700);
		}
		if(trig55 < 800){
			$('.head5').animate({
				top: "0px",
				
			},700);
		}
	//header animation
	if(sc>30){
		$('header').addClass('main-head');
	}
	if(sc<30){
		$('header').removeClass('main-head');
	}
	//width animation
	if(widTrig1 < 600){
		$('.wid801').animate({
			width:'80%'
		},700);
		$('.wid802').animate({
			width:'80%'
		},700);
		$('.wid90').animate({
			width:'90%'
		},700);
		$('.wid60').animate({
			width:'60%'
		},700);
		$('.wid50').animate({
			width:'50%'
		},700);
	}
	
	
	},false);


var btntrig = document.querySelector('.trig');
var nav = document.querySelector('nav');
btntrig.addEventListener('click',function(){
	nav.classList.toggle('show');
},false);
/* header activation*/
var list = $('nav>ul.nav-bar>li');

list.each(function(i){ 
	this.addEventListener('click',function(e){  if(e.currentTarget.tagName == "LI") {
		e.currentTarget.classList.toggle('active');
		for(var i=0;i<list.length;i++){
			if(list[i].className == "active" && list[i].innerText != e.currentTarget.innerText ){
				list[i].className = "";
			}
		}
	}                      
	 
	 },false);        

});
/*catalog activation*/
var catList = $('.catalog>label');

catList.each(function(i){ 
	this.addEventListener('click',function(e){  if(e.currentTarget.tagName == "LABEL") {
		e.currentTarget.classList.toggle('cat-active');
		for(var i=0;i<catList.length;i++){
			if(catList[i].className == "cat-active" && catList[i].innerText != e.currentTarget.innerText ){
				catList[i].className = "";
			}
		}
	}                      
	 
	 },false);
});

/*catalo activation */
var catlog = document.querySelector('.catalog');
var artwork= document.querySelectorAll('.artwork>div');



catlog.addEventListener('click',function(e){
						
	console.log(e.target.tagName);
	console.log(e.target.id);
	if(e.target.tagName == "INPUT"){
		for( var x = 0;x < artwork.length;x++){
			if(artwork[x].classList.contains(e.target.id)){
				artwork[x].style.display = "block";
			}
			else if(!artwork[x].classList.contains(e.target.id)){
				artwork[x].style.display = "none";
			}
		}
	}
























},false);


