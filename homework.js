//顶部浮动
window.onload=function(){
	var head=document.getElementsByClassName("tt")[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop || document.body.scrollTop;
		if(st>130){
			head.style.position="fixed"
		}else{
			head.style.position="static"
		}
	}
	window.onload = zonglunbo(30);
	function zonglunbo(t) {
	    var u1 = document.getElementById("u1");
	    var u2 = document.getElementById("u2");
	    var fuwuqi = document.getElementById("fuwuqi");
	    u2.innerHTML = u1.innerHTML;
	    fuwuqi.scrollTop = 0;
	    var timer = setInterval(zongStart, t);
	    fuwuqi.onmouseover = function () {
	        clearInterval(timer)
	    }
	    fuwuqi.onmouseout = function () {
	        timer = setInterval(zongStart, t);
	    }
	}
	function zongStart() {
		var fuwuqi = document.getElementById("fuwuqi");
	    if (fuwuqi.scrollTop >= u1.scrollHeight) {
	        fuwuqi.scrollTop = 0;
	    } else {
	        fuwuqi.scrollTop++;
	    }
	}
}
//选钱复选框
var m= document.getElementById('money');
var m1=document.getElementById('money1');
m1.innerHTML=m.value;
	m.onchange=function(){
	var m1=document.getElementById('money1');
	m1.innerHTML="¥"+m.value;
}
//轮播
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
			var speed = (json[attr] - now) / 8;
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
var box =document.getElementById('box');
var oNavlist =document.getElementById('nav').children;
var slider =document.getElementById('slider');
var left =document.getElementById('sleft');
var right=document.getElementById('sright');
var index =1;
var timer;
var isMoving =false;
function next(){
	if(isMoving){
		return;
	}
	isMoving=true;
	index++;
	navChange();
	animate(slider,{left:-800*index},function(){
		if(index===7){
			slider.style.left="-800px";
			index=1;
		}
		isMoving=false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving=true;
	index--;
	navChange();
	animate(slider,{left:-800*index},function(){
		if(index===0){
			slider.style.left="-px";
			index=6;
		}
		isMoving=false;
	});
} timer =setInterval(next,2000);
box.onmouseover=function(){
	animate(left,{opacity:50});
	animate(right,{opacity:50});
	clearInterval(timer);
}
box.onmouseout=function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	timer=setInterval(next,2000);
}
right.onclick=next;
left.onclick=prev;
for(var i=0;i<oNavlist.length;i++){
	oNavlist[i].idx=i;
	oNavlist[i].onclick=function(){
		index =this.idx+1;
		navChange();
		animate(slider,{left:-800*index});
	}
}
function navChange(){
	for(var i =0; i<oNavlist.length;i++){
		oNavlist[i].className='';
	}
	if(index>6){
		oNavlist[0].className='active';
	}
	else if(index<=0){
		oNavlist[5].className='active';
	}
	else{
		oNavlist[index-1].className='active';
	}	
}








var li4 = document.getElementById("r1");
li4.onmouseover = function(){
    startMove5(10);
}
li4.onmouseout = function(){
    startMove5(100);
}
var timer1 = null;
function startMove5(s){
    clearInterval(timer1);
    var li4 = document.getElementById("r1");
    timer5 = setInterval(function(){
        var speed = 0;
        if(li4.offsetLeft > s){
            speed = -10;
        }else{
            speed = 10;
        }
        if(li4.offsetLeft == s){
            clearInterval(timer5);
        }else{
            li4.style.left = li4.offsetLeft+speed+'px';
        }
    },10);
} 
var li = document.getElementById("r2");
li.onmouseover = function(){
    startMove1(10);
}
li.onmouseout = function(){
    startMove1(100);
}
var timer1 = null;
function startMove1(s){
    clearInterval(timer1);
    var li = document.getElementById("r2");
    timer1 = setInterval(function(){
        var speed = 0;
        if(li.offsetLeft > s){
            speed = -10;
        }else{
            speed = 10;
        }
        if(li.offsetLeft == s){
            clearInterval(timer1);
        }else{
            li.style.left = li.offsetLeft+speed+'px';
        }
    },10);
} 
var li1 = document.getElementById("r3");
li1.onmouseover = function(){
    startMove2(10);
}
li1.onmouseout = function(){
    startMove2(100);
}
var timer2 = null;
function startMove2(s){
    clearInterval(timer2);
    var li1 = document.getElementById("r3");
    timer2 = setInterval(function(){
        var speed = 0;
        if(li1.offsetLeft > s){
            speed = -10;
        }else{
            speed = 10;
        }
        if(li1.offsetLeft == s){
            clearInterval(timer2);
        }else{
            li1.style.left = li1.offsetLeft+speed+'px';
        }
    },10);
} 
var li3 = document.getElementById("r4");
li3.onmouseover = function(){
    startMove4(10);
}
li3.onmouseout = function(){
    startMove4(100);
}
var timer4 = null;
function startMove4(s){
    clearInterval(timer4);
    var li3 = document.getElementById("r4");
    timer4= setInterval(function(){
        var speed = 0;
        if(li3.offsetLeft > s){
            speed = -10;
        }else{
            speed = 10;
        }
        if(li3.offsetLeft == s){
            clearInterval(timer4);
        }else{
            li3.style.left = li3.offsetLeft+speed+'px';
        }
    },10);
} 