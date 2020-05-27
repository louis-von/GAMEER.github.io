onscroll=function (){
				var aa=document.getElementById("aa");
				var scr=document.body.scrollTop||document.documentElement.scrollTop;
				if(scr>40){
					document.getElementById("d").style.position="fixed";
					document.getElementById("d").style.top="0px";
				}else{
					document.getElementById("d").style.position="absolute";
					document.getElementById("d").style.top="36px";
				}
				
				if(scr > 200){
					$('.tu1').css('transition','2s');
            		$('.tu1').css('opacity',1)
				}
				if(scr > 600) {
            		$('.tu2').css('transition','2s');
            		$('.tu2').css('opacity',1)
            	}
            	if(scr > 850){
            		$('.tu3').css('transition','2s');
            		$('.tu3').css('opacity',1)
            	}
            	if(scr > 1200){
            		$('.tu4').css('transition','2s');
            		$('.tu4').css('opacity',1)
            	}
            	
            	if(scr > 1600){
            		$('.banner').css('transition','2s');
            		$('.banner').css('opacity',1)
            	}
}