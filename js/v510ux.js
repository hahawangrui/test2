window.onload=function(){
	var off=document.getElementById('Eye-care-off');
	var on=document.getElementById('Eye-care-on');
	var simg=document.getElementById('screen-img');
	off.onclick=function(){
		var a="url(img/inscreen_eyecare_after.jpg)";
		simg.style.backgroundImage=a;
	};
	on.onclick=function(){
		var a1="url(img/inscreen_eyecare_before.jpg)";
		simg.style.backgroundImage=a1;
	};
}
