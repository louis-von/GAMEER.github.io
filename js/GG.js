// JavaScript Document
$(document).ready(function(){
	
	var i=0;//判断图片的数量
	var clone = $(".banner .img li").first().clone();//克隆第一张图片
	$(".banner .img").append(clone);
	var size=$(".banner .img li").size();//总共的图片
	//alert(size);
	for(var j =0; j<size-1; j++){
		$(".banner .num").append("<li></li>");
	};
	$(".banner .num li").first().addClass("on");
	/*鼠标划入*/
	$(".banner .num li").hover(
		function(){
			var index = $(this).index();
			i = index;
			$(".banner .img").stop().animate({left:-index*1920},500);
			$(this).addClass("on").siblings().removeClass("on");
	});
	/*自动轮播*/
	var t=setInterval(moveL,4000);
	/*对banner定时器的操作*/
	$(".banner").hover(
		function(){
			clearInterval(t);
		},
		function(){
			t=setInterval(moveL,4000);
		}
	);
	/*向左的按钮*/
    $(".banner .btn_l").click(function(){
		moveL();
	});
	/*右左的按钮*/
	$(".banner .btn_r").click(function(){
		moveR();
	});
	/*向左滑动*/
	function moveL(){
		i++
		if(i == size){
			$(".banner .img").css({left:0});
			i=1;
		}
		$(".banner .img").stop().animate({left:-i*1920},500);
		if(i == size - 1){
			$(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");
		}else{
			$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
		}
	}
	/*向右滑动*/
	function moveR(){
		i--
		if(i == -1){
			$(".banner .img").css({left:-(size - 1)*1920});
			i=size - 2;
		}
		$(".banner .img").stop().animate({left:-i*1920},500);
		$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
	}
});