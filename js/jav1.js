var arc1=document.getElementById('arc1');
arc1.value="输入商品网址或关键词，直通全网，快速帮5购!";
arc2p.onclick=function(){
	arc1.value="输入商品网址或关键词，直通全网，快速帮5购!";
}
var m1=document.getElementById('m1');
var m2=document.getElementById('m2');
var dui=document.getElementById('dui');
var dui1=document.getElementById('dui1');
var spc=document.getElementById('spc');
var m1a=document.getElementById('m1a');
var m2a=document.getElementById('m2a');
var sp0=document.getElementById('sp0');
var sp1=document.getElementById('sp1');
var pp0=document.getElementById('pp0');
var pp1=document.getElementById('pp1');
var slider=document.getElementById('slider');
var Bimg=document.getElementById('Bimg');
var Bimg1=document.getElementById('Bimg1');
var left=document.getElementById('left');
var right=document.getElementById('right');
var ap1=document.getElementById('ap1');
var ap2=document.getElementById('ap2');
var ap3=document.getElementById('ap3');
spc.innerHTML="150ml";
m1.onmousemove=function(){
	dui.style.display="block";
	m1.style.border="1px solid red";
	dui1.style.display="none";
	m2.style.border="1px solid white";
}
m2.onmousemove=function(){
	dui1.style.display="block";
	m2.style.border="1px solid red";
	dui.style.display="none";
	m1.style.border="1px solid white";
}
m1.onclick=function(){
	spc.innerHTML=m1a.innerHTML;
}
m2.onclick=function(){
	spc.innerHTML=m2a.innerHTML;
}
left.onmouseover=function(){
	slider.style.display='block';
	right.style.display='block';
}
left.onmouseout=function(){
	slider.style.display='none';
	right.style.display='none';
}

left.onmousemove=function(ev){
	var ev=ev||event;
	var st=document.documentElement.scrollTop||document.body.scrollTop;
	var oL=ev.clientX-left.offsetLeft-slider.offsetWidth/2;
	var oT=ev.clientY-left.offsetTop-slider.offsetHeight/2+st;

	var oMaxw=left.offsetWidth-slider.offsetWidth;
	var oMaxh=left.offsetHeight-slider.offsetHeight;

	oL=oL>oMaxw?oMaxw:(oL<0?0:oL);
	oT=oT>oMaxh?oMaxh:(oT<0?0:oT);
	
	slider.style.left = oL+'px';
	slider.style.top = oT+'px' ;
	
	var oBmaxw = right.offsetWidth -Bimg.offsetWidth; 
	var oBmaxh = right.offsetHeight -Bimg.offsetHeight; 
	Bimg.style.display="block";
	Bimg1.style.display="none";
	Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px'
	Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px'
}
sp0.onmousemove=function(){
	sp0.style.border="2px solid orange";
	sp1.style.border="2px solid white";
	pp0.style.display="block";
	pp1.style.display="none";
	left.onmouseover=function(){
		slider.style.display='block';
		right.style.display='block';
	}
	left.onmouseout=function(){
		slider.style.display='none';
		right.style.display='none';
	}

	left.onmousemove=function(ev){
		var ev=ev||event;
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		var oL=ev.clientX-left.offsetLeft-slider.offsetWidth/2;
		var oT=ev.clientY-left.offsetTop-slider.offsetHeight/2+st;

		var oMaxw=left.offsetWidth-slider.offsetWidth;
		var oMaxh=left.offsetHeight-slider.offsetHeight;

		oL=oL>oMaxw?oMaxw:(oL<0?0:oL);
		oT=oT>oMaxh?oMaxh:(oT<0?0:oT);
		
		slider.style.left = oL+'px';
		slider.style.top = oT+'px' ;
		
		var oBmaxw = right.offsetWidth -Bimg.offsetWidth; 
		var oBmaxh = right.offsetHeight -Bimg.offsetHeight; 
		Bimg.style.display="block";
		Bimg1.style.display="none";
		Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px'
		Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px'
	}
}
sp1.onmousemove=function(){
	sp1.style.border="2px solid orange";
	sp0.style.border="2px solid white";
	pp1.style.display="block";
	pp0.style.display="none";
	left.onmouseover=function(){
		slider.style.display='block';
		right.style.display='block';
	}
	left.onmouseout=function(){
		slider.style.display='none';
		right.style.display='none';
	}

	left.onmousemove=function(ev){
		Bimg.style.display="none";
		Bimg1.style.display="block";
		var ev=ev||event;
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		var oL=ev.clientX-left.offsetLeft-slider.offsetWidth/2;
		var oT=ev.clientY-left.offsetTop-slider.offsetHeight/2+st;

		var oMaxw=left.offsetWidth-slider.offsetWidth;
		var oMaxh=left.offsetHeight-slider.offsetHeight;

		oL=oL>oMaxw?oMaxw:(oL<0?0:oL);
		oT=oT>oMaxh?oMaxh:(oT<0?0:oT);
		
		slider.style.left = oL+'px';
		slider.style.top = oT+'px' ;
		
		var oBmaxw = right.offsetWidth -Bimg1.offsetWidth; 
		var oBmaxh = right.offsetHeight -Bimg1.offsetHeight; 
		Bimg1.style.left = ( oL/oMaxw ) * oBmaxw + 'px'
		Bimg1.style.top = ( oT/oMaxh ) * oBmaxh + 'px'
	}
}
ap2.value=2;
ap1.onmouseover=function(){
	if(ap2.value==0){
		ap1.style.cursor="not-allowed";
		ap3.style.cursor="";
	}
}
ap1.onclick=function(){
	if(ap2.value<=5&&ap2.value>0){
		var num=parseInt(ap2.value);
		ap2.value=num-1;
	}
	if(ap2.value==0){
		ap1.style.cursor="not-allowed";
		ap3.style.cursor="";
	}
}
ap3.onmouseover=function(){
	if(ap2.value==5){
		ap1.style.cursor="";
		ap3.style.cursor="not-allowed";
	}else{
		ap3.style.cursor="";
	}
}
ap3.onclick=function(){
	if(ap2.value<5&&ap2.value>=0){
		var num=parseInt(ap2.value);
		ap2.value=num+1;
	}
	if(ap2.value==5){
		ap1.style.cursor="";
		ap3.style.cursor="not-allowed";
	}
}
var buya2=document.getElementById('buya2');
var back=document.getElementById('back');
var backcen=document.getElementById('backcen');
buya2.onclick=function(){
	back.style.display="block";
}
var buya1a=document.getElementById('buya1a');
var fuhao=document.getElementById('fuhao');
fuhao.onclick=function(){
	back.style.display="none";
}
buya1a.onclick=function(){
	back.style.display="none";
}