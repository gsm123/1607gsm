var $ = require('./common/libs/zepto-modules/zepto');
require('./common/libs/zepto-modules/event');
require('./common/libs/zepto-modules/ajax');
require('./common/libs/zepto-modules/fx');
require('./common/libs/zepto-modules/touch');

var Swiper = require('./common/libs/swiper/swiper.min.js');
var swiperAni = require('./common/libs/swiper/swiper.animate1.0.2.min.js');
var IScroll = require('./common/libs/iscroll/iscroll.js');


$("#first .swiper-container").show();
$("#mainContainer").hide();

var swiper = new Swiper('#first .swiper-container',{
  onInit: function(swiper){ 
    swiperAni.swiperAnimateCache(swiper); 
    swiperAni.swiperAnimate(swiper); 
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAni.swiperAnimate(swiper); 
    var index=swiper.activeIndex;
    if(index==4&&localStorage.user){
		arr=JSON.parse(localStorage.user);

	   if (arr[0].name==true) {
	   	 $('#hides').hide();
	   	 $('#mainContainer').show();
	   	 swper();

	   }
	}
  } 
});
var myScroll;
$("#enter").click(function(){
	$("#first .swiper-container").hide();
	$("#mainContainer").show();
	swper();
    var kg={
    	'name':true
    }
    var arr=[];
    arr.push(kg);
    localStorage.user=JSON.stringify(arr);  
	
	
})


function swper(){	
	var swiper = new Swiper('#scroller .swiper-container',{
	  onInit: function(swiper){ 
	    swiperAni.swiperAnimateCache(swiper); 
	    swiperAni.swiperAnimate(swiper); 

	  }, 

	  onSlideChangeEnd: function(swiper){ 
        myScroll.scrollTo(0,0);
	    myScroll.refresh();
	    swiperAni.swiperAnimate(swiper); 
	    var index=swiper.activeIndex;
	    $('#footer li').eq(index).addClass('active').siblings('li').removeClass('active');
	  } 
	});
$.post('http://localhost:8000/skill',function(data){
		var datalength=data.length;
		var str='';
		for (var i = 0; i <datalength; i++) {
			str+='<li style="background:url(../img/1.jpg)">';
            str+='<h3 class="oh3" style="width:40%; opacity:0; height:80%; transform:rotate(30deg); color:#8481FF; background:pink;">'+data[i].category+'</h3>';
            str+='<p class="op">'+data[i].name+'</p>'
            str+='<p class="op">'+data[i].time+'</p>'
            str+='<p class="op">'+data[i].level+'</p>'
            str+='</li>'

		}
		$('#swi1').append(str);
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	});

    $('#footer li').tap(function(){
	    var index = $(this).index()
	    $('#footer li').eq(index).addClass('active').siblings('li').removeClass('active')
	    swiper.slideTo(index, 500, true);
	    myScroll.scrollTo(0,0);
	    myScroll.refresh();
	});
   setTimeout(function(){
   	  $('.oh3').animate({
	    	opacity:1
	    },600,function(){
            $('.op').animate({
            	position:'relative',
            	zIndex:3,
            	fontSize:18,
            	color:'#8481FF'
            },400)
	    })
   	},400);

	
	$.post('http://localhost:8000/project',function(data){
		var str='';
		var datalength=data.length;
			for (var i = 0; i < datalength; i++) {
				str+='<li>'+data[i].category+'</li>';
				str+='<li>'+data[i].name+'</li>';
				str+='<li>'+data[i].url+'</li>';
				str+='<li>'+data[i].image+'</li>';
				str+='<li>'+data[i].detail+'</li>';
				str+='<li>'+data[i].tech+'</li>';
			}
		$('.txt').append(str);
		var myScroll;
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	})
   

   $.post('http://localhost:8000/work',function(data){
		var str='';
		var datalength=data.length;
			for (var i = 0; i < datalength; i++) {
				str+='<li>'+data[i].category+'</li>';
				str+='<li>'+data[i].name+'</li>';
				str+='<li>'+data[i].url+'</li>';
				str+='<li>'+data[i].image+'</li>';
				str+='<li>'+data[i].time+'</li>';
				str+='<li>'+data[i].posts+'</li>';
				str+='<li>'+data[i].time+'</li>';
				str+='<li>'+data[i].posts+'</li>';
				str+='<li>'+data[i].time+'</li>';
				str+='<li>'+data[i].posts+'</li>';
			}
		$('.title').append(str);
		var myScroll;
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	})

}

       


//var $color=(Math.random()*255,Math.random()*255,Math.random()*255,Math.random());
//console.log(c);
setInterval(function(){
	var c = '#';
	var cArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
	for(var i = 0; i < 6;i++)
	{
	  var cIndex = Math.round(Math.random()*15);
	  c += cArray[cIndex];
	} 
	$('.icon-shape2').css('color',c);

	
},800)
var time,time1,time2,time3,time4,time5,time6;
function fn(){
	time=setInterval(function(){
		var c = '#';
		var cArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
		for(var i = 0; i < 6;i++)
		{
		  var cIndex = Math.round(Math.random()*15);
		  c += cArray[cIndex];
		} 
		$('.icon1').css('color',c);

		
	},800)
	time1=setInterval(function(){
		var c = '#';
		var cArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
		for(var i = 0; i < 6;i++)
		{
		  var cIndex = Math.round(Math.random()*15);
		  c += cArray[cIndex];
		} 
		$('.icon2').css('color',c);

		
	},800)
	time2=setInterval(function(){
		var c = '#';
		var cArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
		for(var i = 0; i < 6;i++)
		{
		  var cIndex = Math.round(Math.random()*15);
		  c += cArray[cIndex];
		} 
		$('.icon3').css('color',c);

		
	},800)
	time3=setInterval(function(){
		var c = '#';
		var cArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
		for(var i = 0; i < 6;i++)
		{
		  var cIndex = Math.round(Math.random()*15);
		  c += cArray[cIndex];
		} 
		$('.icon4').css('color',c);

		
	},800)
	time5=setInterval(function(){
		var c = '#';
		var cArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
		for(var i = 0; i < 6;i++)
		{
		  var cIndex = Math.round(Math.random()*15);
		  c += cArray[cIndex];
		} 
		$('.icon5').css('color',c);

		
	},800)
	time6=setInterval(function(){
		var c = '#';
		var cArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
		for(var i = 0; i < 6;i++)
		{
		  var cIndex = Math.round(Math.random()*15);
		  c += cArray[cIndex];
		} 
		$('.icon6').css('color',c);

		
	},800)
}
fn();
var mc=document.getElementById('music');

$('.stop').click(function(){
     if(mc.paused){
            mc.play();
            fn();
       }else{
         	mc.pause();
         	clearInterval(time);
         	clearInterval(time1);
         	clearInterval(time2);
         	clearInterval(time3);
         	clearInterval(time4);
         	clearInterval(time5);
         	clearInterval(time6);
       	   
       }
})

//setInterval(function(){
	$('.swiper-slide1').find('h1').css({
			'color':'orange'
		})


//},300)