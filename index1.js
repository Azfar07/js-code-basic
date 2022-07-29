// var element
// document.getElementById("header").innerText="WOW";
// document.querySelector("#header").innerHTML="<h1>WOW</h1>";
// element=document.querySelectorAll("#header h1");
// document.getElementById("header").attribute[1].value="xyz";
//element=document.query("header").setAttribute("class","yui");
// document.getElementById("header").removeAttribute("class");
// document.querySelector("#header").className='abc xyz';
// element = document.querySelector("#header").className;
// document.querySelector("#header").classList.remove("xyz");
// element = document.querySelector("#header").classList;
// console.log(element);

// document.getElementById("header").onclick=abc;

// function abc(){
// 		document.getElementById("header").style.background='blue';	
// }

// document.getElementById("header").onmouseenter=abc;

// function abc(){
// 		document.getElementById("header").style.background='blue';	
// }

// document.getElementById("header").addEventListener("click",function(){
// 	this.style.border='10px solid red';
// });
// document.getElementById("header").addEventListener("click",abc);
// document.getElementById("header").addEventListener("mouseenter",function(){
// 	document.getElementById("header").style.border='10px solid red';
// });
// function abc(){
// 		document.getElementById("header").style.background='blue';	
// }

// document.getElementById("header").addEventListener("click",xyz);
// function xyz(){
// 		document.getElementById("header").removeEventListener('mouseleave',abc);	
// }
// document.getElementById("header").addEventListener("mouseleave",abc);
// function abc(){
// 		document.getElementById("header").style.background='blue';	
// }

// document.getElementById("header").addEventListener("click",abc);
// function abc(){
// 		document.getElementById("header").classList.add("xyz");
// 		var a=document.getElementById("header").classList;
// 		console.log(a);	
// }

// document.getElementById("header").addEventListener("click",abc);
// function abc(){
// 		document.getElementById("header").classList.remove("xyz");
// 		var a=document.getElementById("header").classList;
// 		console.log(a);	
// }

// document.getElementById("header").addEventListener("click",abc);
// function abc(){
// 		var a=document.getElementById("header").classList.toggle("xyz");
// 		console.log(a);	
// }

// document.getElementById("header").addEventListener("click",abc);
// function abc(){
// 		var a=document.getElementById("header").classList.iteam(1);
// 		console.log(a);	
// }

document.getElementById("header").addEventListener("click",abc);
function abc(){
		var a=document.getElementById("header").classList.contains("first");
		console.log(a);	
}