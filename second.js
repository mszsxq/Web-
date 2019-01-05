var  ml150 =document.getElementById('ml150');
var  ml200 =document.getElementById('ml200');
var  xuanze =document.getElementById('xuanze');
ml150.onclick=function(){
 	xuanze.innerHTML="'150ml'";
 	ml150.style.backgroundImage="url('images/duigou.png')";
 	ml150.style.backgroundRepeat="no-repeat";
 	ml150.style.backgroundPosition="23px 4px";
 	ml200.style.backgroundImage=""

}
ml200.onclick=function(){
	xuanze.innerHTML="'200ml'";
	ml200.style.backgroundImage="url('images/duigou.png')";
	ml200.style.backgroundRepeat="no-repeat";
 	ml200.style.backgroundPosition="23px 4px";
	ml150.style.backgroundImage="";
}
var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
var shumu=document.getElementById('shumu');
btn1.onclick=function(){
		if(shumu.value>1){
			shumu.value--;
			btn2.style.cursor="pointer";
		}
		else{
			btn1.style.cursor="not-allowed";
		}
}
btn2.onclick=function(){
	if(shumu.value<5){
		btn1.style.cursor="pointer";
		shumu.value++;
	}
	else{
		btn2.style.cursor="not-allowed";
	}
}


var  mengzhao =document.getElementById('mengzhao');
var gouwucghe =document.getElementById('gouwuche');
var jixu =document.getElementById('jixu');
var cha=document.getElementById('cha');
gouwuche.onclick=function(){
	mengzhao.style.display='block';
}
jixu.onclick=function(){
	mengzhao.style.display='none';
}
cha.onclick=function(){
	mengzhao.style.display='none';
}