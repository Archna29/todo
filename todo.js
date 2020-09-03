function set(){
	field.focus();
	field.style.color="red";
	field.style.borderColor="blue";
}
window.addEventListener("DOMContentLoaded",set,false);
function item(e){
	var target,par,grp;
	target=e.target;
	par=target.parentElement;
	par.removeChild(target);
	count();
}
var par=document.getElementById("lis");
function m()
{
var todolist=document.getElementById("task").value;
 var pa=document.createElement("li");
 var msg=document.createTextNode(todolist);
 pa.appendChild(msg);
 if(par.childElementCount==0){
 par.appendChild(pa);}
else{
	 par.insertBefore(pa,par.firstChild);
 }
field.value="";
set();
}
par.addEventListener("mouseup",function(e){
 item(e);}
 ,false);
function clear(){
	var par=document.getElementById("lis");
par.innerHTML=" ";
	set();
}
var a=document.getElementById("add");
a.addEventListener("click",m,false);
var field=document.getElementById("task");
var cl=document.getElementById("cl");
cl.addEventListener("click",clear,false);
function count(){
	var list=ellist.getElementsByTagName("li").length;
	document.getElementById("l").textContent="No. of Works :" + " "+list;
}

var ellist=document.getElementById("lis");
ellist.addEventListener("DOMNodeInserted",count,false);
