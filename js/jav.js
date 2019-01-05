var cover=document.getElementById('cover');
window.onscroll=function(){
	var st=document.documentElement.scrollTop||document.body.scrollTop;
	if(st>40){
		cover.style.position='fixed'
	}else{
		cover.style.position='static'
	}
}
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
			var isStop = true;
			for(var attr in json){
				var now = 0;
				if(attr == 'opacity'){
					now = parseInt(getStyle(obj,attr)*100);
				}else{
					now = parseInt(getStyle(obj,attr));
				}
				var speed = (json[attr] - now) /8;
				speed = speed>0?Math.ceil(speed):Math.floor(speed);
				var cur = now + speed;
				if(attr == 'opacity'){
					obj.style[attr] = cur / 100;
				}else{
					obj.style[attr] = cur + 'px';
				}
				if(json[attr] !== cur){
					isStop = false;
				}
			}
			if(isStop){
				clearInterval(obj.timer);
				callback&&callback();
			}
		}, 30)
	}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	animate(cenr1c,{top:-28*index},function(){
		if(index==15){
			cenr1c.style.top = '-56px';
			index = 2;
		}
		isMoving = false;
	});
}
var str="";
var arc1=document.getElementById('arc1');
arc1.value="输入商品网址或关键词，直通全网，快速帮5购!";
var arc2p=document.getElementById('arc2p');
arc2p.onclick=function(){
	arc1.value="输入商品网址或关键词，直通全网，快速帮5购!";
}
var sele=document.getElementById('sele');
str=sele.options[0].text;
var spap=document.getElementById('spap');
spap.innerHTML=str;
sele.onclick=function(){
	var index=this.value;
	str=sele.options[index].text;
	spap.innerHTML=str;
}
var cenin=document.getElementById('cenin');
cenin.value="请输入手机号";
var but=document.getElementById('but');
but.onclick=function(){
	cenin.value="请输入手机号";
}
var cenr1b = document.getElementById('cenr1b');
var cenr1ba = document.getElementById('cenr1ba');
var cenr1c = document.getElementById('cenr1c');
var index = 1;
var timer;
var isMoving = false;
cenr1b.onmouseover = function(){
	clearInterval(timer)
}
cenr1b.onmouseout = function(){
	timer = setInterval(next, 1000);
}
timer = setInterval(next, 1000);
var box = document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index1 = 1;
var timer1;
var isMoving1 = false;
box.onmouseover = function(){
	animate(left,{opacity:50})
	animate(right,{opacity:50})
	clearInterval(timer1)
}
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer1 = setInterval(next1, 3000);
}
right.onclick = next1;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
	oNavlist[i].index1 = i;
	oNavlist[i].onclick = function(){
		index1 = this.index1+1;
		navmove();
		animate(slider,{left:-800*index1});
	}
}
function next1(){
	if(isMoving1){
		return;
	}
	isMoving1 = true;
	index1++;
	navmove();
	animate(slider,{left:-800*index1},function(){
		if(index1==7){
			slider.style.left = '-800px';
			index1 = 1;
		}
		isMoving1 = false;
	});
}
function prev(){
	if(isMoving1){
		return;
	}
	isMoving1 = true;
	index1--;
	navmove();
	animate(slider,{left:-800*index1},function(){
		if(index1==0){
			slider.style.left = '-4800px';
			index1 = 6;
  		}
		isMoving1 = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index1>6 ){
		oNavlist[0].className = "active";
	}else if(index1<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index1-1].className = "active";
	}
}
timer1 = setInterval(next1, 3000);
var qqimg=document.getElementById('qqimg');
qqimg.onclick=function(){
	open('index1.html');
}
var timera,timer1a,timerb,timer1b,timerc,timer1c;
var timerd,timer1d;
function fun(a){
	a.onmouseover=function(){
		timera=setInterval(function(){
			if(parseInt(getStyle(a,'right'))<-10){
				a.style.right=parseInt(getStyle(a,'right'))+1+'px';
			}
		},1)
		clearInterval(timer1a);
	}
	a.onmouseout=function(){
		clearInterval(timera);
		timer1a=setInterval(function(){
			if(parseInt(getStyle(a,'right'))!=-84){
				a.style.right=parseInt(getStyle(a,'right'))-1+'px';
			}
		},1)
		clearInterval(timera);
	}
}
var img1=document.getElementById('img1');
var img2=document.getElementById('img2');
var img3=document.getElementById('img3');
var img4=document.getElementById('img4');
var img4a=document.getElementById('img4a');
var big=document.getElementById('big');
fun(img1);
img2.onmouseover=function(){
	timerb=setInterval(function(){
		if(parseInt(getStyle(img2,'right'))<-10){
			img2.style.right=parseInt(getStyle(img2,'right'))+1+'px';
		}
	},1)
	clearInterval(timer1b);
}
img2.onmouseout=function(){
	timer1b=setInterval(function(){
		if(parseInt(getStyle(img2,'right'))!=-90){
			img2.style.right=parseInt(getStyle(img2,'right'))-1+'px';
		}
	},1)
	clearInterval(timerb);
}
img3.onmouseover=function(){
	timerc=setInterval(function(){
		if(parseInt(getStyle(img3,'right'))<-10){
			img3.style.right=parseInt(getStyle(img3,'right'))+1+'px';
		}
	},1)
	clearInterval(timer1c);
}
img3.onmouseout=function(){
	timer1c=setInterval(function(){
		if(parseInt(getStyle(img3,'right'))!=-100){
			img3.style.right=parseInt(getStyle(img3,'right'))-1+'px';
		}
	},1)
	clearInterval(timerc);
}
img4.onmouseover=function(){
	timerd=setInterval(function(){
		if(parseInt(getStyle(img4,'right'))<-10){
			img4.style.right=parseInt(getStyle(img4,'right'))+1+'px';
		}
	},1)
	big.style.display="block";
	img4a.style.display="none";
	clearInterval(timer1d);
}
img4.onmouseout=function(){
	timer1d=setInterval(function(){
		if(parseInt(getStyle(img4,'right'))!=-100){
			img4.style.right=parseInt(getStyle(img4,'right'))-1+'px';
		}
	},1)
	big.style.display="none";
	img4a.style.display="block";
	clearInterval(timerd);
}