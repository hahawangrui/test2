window.onload=function(){
	var odiv1=document.getElementById('languages');
	var odiv2=document.getElementById('language-select');
	var timer=null;
		odiv1.onclick=function(){
			clearTimeout(timer);
			odiv2.style.display='block';
		};
		odiv1.onmouseout=function(){
			timer=setTimeout(function(){odiv2.style.display='none';},500);
		};
		odiv2.onmouseover=function(){
			clearTimeout(timer);
		};
		odiv2.onmouseout=function(){
			timer=setTimeout(function(){odiv2.style.display='none';},500);
		};
		var imgs=["captcha.gif","captcha (1).gif","captcha (2).gif"];
		var oimg=document.getElementById('c-img');
		var odiv=document.getElementById('code-img-r');
		var i=0;
		odiv.onclick=function(){
			oimg.src='img/'+imgs[i++];
			if(i>2){i=0};
		};
}
