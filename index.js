// document.write("Hello again <br>");

// var z = "Azfar";

// //Override

//  z="Azfar Bin Arshad"
//  let x = "Ahmed";
//  const a = "abc"
// document.write("<br>");
// document.write(z);

// document.write("<br>");
// document.write(x);

// document.write("<br>");
// document.write(a);
// document.write("<br>");
// //string
// 	let b ="hello";
// 	document.write(b);
// 	document.write("<br>");
// 	document.write(typeof b);

// //number

// let c =25;
// document.write("<br>");
// 	document.write(c);
// 	document.write("<br>");
// 	document.write(typeof c);

// //boolean

// let d=true;
// document.write("<br>");
// 	document.write(d);
// 	document.write("<br>");
// 	document.write(typeof d);

// //null

// let y=null;
// document.write("<br>");
// 	document.write(y);
// 	document.write("<br>");
// 	document.write(typeof y);

// //undefined

// let q;
// document.write("<br>");
// 	document.write(q);
// 	document.write("<br>");
// 	document.write(typeof q);

// //arithmetic operators

// let j = 5;
// let k = 4;
// let l = k + j;
// document.write(l);

// let q = 5;
// let w = 4;
// let e = q - w;
// document.write(e);

// let r =5;
// let t =4;
// let u = t * r;
// document.write(u);

// let i = 5;
// let o = 4;
// let p = i / o;
// document.write(p);
// //modulus(remainder)
// let v= 5;
// let b= 4;
// let n = v % b;
// document.write(n);

// let a = 5;
// let s = 4;
// let d = a ** s;
// document.write(d);

// let f = 5;
// let g = 4;
// document.write(f+g);
// document.write("<br>");
// f++;
// document.write(f+g);

// let h = 5;
// let m = 4;
// document.write(h+j);
// document.write("<br>");
// h--;
// document.write(h+j);


// //assignment operators
// let j = 5;
// let k = 4;
// j += k;
// document.write(j);

// let q = 5;
// let w = 4;
//  q -= w;
// document.write(q);

// let r =5;
// let t =4;
// t *= r;
// document.write(t);

// let i = 5;
// let o = 4;
//  i /= o;
// document.write(i);
// //modulus(remainder)
// let v= 5;
// let b= 4;
// v %= b;
// document.write(v);

// let a = 5;
// let s = 4;
// a **= s;
// document.write(a);

// let x = 50;
// console.log([1,2,3]);
// console.table([1,2,3]);
// console.error("something is wrong");
// console.warn("This is jus a warning");
// console.timeEnd("Test12");
// let a=10;
// let b=10;
// console.timeEnd(a==b);
// let a=10;
// let b="10";
// console.timeEnd(a===b);
// console.timeEnd(2 != 3);
// console.timeEnd(2 != 2);
// console.timeEnd(2 !== "2");
// console.timeEnd(2>4);
// console.timeEnd(4>2);
// console.timeEnd(4>=2);
// console.timeEnd(4>=4);
// console.timeEnd(4>4);
// console.timeEnd(2<4);
// console.timeEnd(2<=4);

	//if-else statement

// let a =10
// let b = 20
// if (b>a) {
// 	document.write("B is greater")
// }

// let a =10
// let b = 20
// if (b>a) {
// 	document.write("B is greater");
// }else{
// 	document.write("A is greater");
// }

// let age =21
// if (age=>18 && age<=21) {
// 	document.write("You are eligible");
// }

// let age =21
// if (age=>18 && age<=21) {
// 	document.write("You are eligible");
// }else{
// 	document.write("You are not eligible");
// }

// let a =10;
// let b = 15;
// if (a=>10 || b<=20) {
// 	document.write("You are eligible");
// }

	//if-else-if statement

// let age =21;
// console.log(!age>=12);
// if (!age=>18) {
// 	document.write("You are eligible");
// }
// let per = 20;
// if (per>=80 && per<=100) {
// 	document.write("you are in merit");
// } else if(per>=60 && per<=80) {
// 	document.write("you are in 1st division");
// } else if(per>=45 && per<=60) {
// 	document.write("you are in 2nd division");
// } else if(per>=33 && per<=45) {
// 	document.write("you are in 3rd division");
// } else if(per<33) {
// 	document.write("you are fail");
// }else{
// 	document.write("enetr valid percentage");
// }

	//conditional ternary

// let a=100;
// let b;
// b= "Value is "+(a>10 ? "True":"False");
// document.write(b);

	//switch statement

// var day =1 ;
// switch(day){
// 	case 0:
// 	document.write("today is monday");
// 	break;

// 		case 1:
// 	document.write("today is tuesday");
// 	break;

// 		case 2:
// 	document.write("today is wednesday");
// 	break;

// 		case 3:
// 	document.write("today is thursday");
// 	break;

// 		case 4:
// 	document.write("today is friday");
// 	break;

// 		case 5:
// 	document.write("today is saturday");
// 	break;

// 		case 6:
// 	document.write("today is sunday");
// 	break;
// }

	//if-else statement

// var a=10;
// var b=20;
// if (a>b) {
// 	alert("value of A is "+a);
// } else {
// 	alert("value of B is "+b);
// }

// var a = confirm("do you like our website ?");
// if (a) {
// 	alert("Thanks");
// } else {
// 	alert("Sorry");
// }

	//if-else-if statement

// let per = prompt("enter your percentage : ");
// if (per>=80 && per<=100) {
// 	document.write("you are in merit");
// } else if(per>=60 && per<=80) {
// 	document.write("you are in 1st division");
// } else if(per>=45 && per<=60) {
// 	document.write("you are in 2nd division");
// } else if(per>=33 && per<=45) {
// 	document.write("you are in 3rd division");
// } else if(per<33) {
// 	document.write("you are fail");
// }else{
// 	document.write("enetr valid percentage");
// }

	//functions

// function hello(){
// 	document.write("hello world");
// }
// hello();

// function hello(fname,lname){
// 	document.write("hello "+fname+" "+lname);
// }
// hello("Azfar","Arshad");

// function fullname(fname,lname){
// 	var a = fname+" "+lname;
// 	return a;
// }
// var fu=fullname("Azfar","Arshad");
// document.write("Hello "+fu);

// function sum(math,eng,pak){
// 	var a = math+eng+pak;
// 	return a;
// }
// function percentage(tt){
// 	var per =tt/100*300 ;
// 	document.write(per)
// }
// var total=sum(80,60,21);
// document.write(total);
// document.write("<br>");
// percentage(total);

// function hello(){
// 	document.write("hello world");
// }
// function hello1(){
// 	alert("hello world");
// }
	// while loops

// var a =1;
// document.write("<ul>")
// while(a <= 10){
// document.write(a + ") hello world <br>");
// a=a+1;
// }
// document.write("<ul>");

// var a =10;
// document.write("<ul>")
// while(a >= 1){
// document.write(a + ") hello world <br>");
// a=a-1;
// }
// document.write("<ul>");

	// do-while loop

// var a =1;
// document.write("<ul>")
// do{
// 	document.write(a + ") hello world <br>");
// 	a++;
// }
// while(a <= 10)
// document.write("<ul>");

// var a =1;
// document.write("<ul>")
// do{
// 	document.write(a + ") hello world <br>");
// 	a=a-1;
// }
// while(a >= 10)
// document.write("<ul>");
	//for lopp
// for (var i = 1; i <= 10; i++){
// 	document.write("hello azfar <br>");
// }

	//continue and break

// for (var i = 1; i <= 10; i++){
// 	if(i==3){
// 		document.write("Hey : "+i+" <br>");
// 		continue;
// 	}
// 	document.write("Number : "+i+" <br>");
// }

// for (var i = 1; i <= 10; i++){
// 	if(i==3){
// 		document.write("Hey : "+i+" <br>");
// 		break;
// 	}
// 	document.write("Number : "+i+" <br>");
// }

	//even-odd example

// for (var i = 1; i <= 10; i++){
// 	if(i % 2 == 0){
// 		document.write(i+" <br>");
// 	}
// }
	//nested loop
// for (var a = 1; a <= 100; a+10) {
// 	for (var b = a ; b < a+10 ; b++) {
// 	document.write(b + " ");
// 	}
// 	document.write("<br>");
// }

// for (var a = 1; a <= 5; a++) {
// 	for (var b = 1; b <= a; b++) {
// 	document.write(b + " ");
// 	}
// 	document.write("<br>");
// }

// for (var a = 1; a <= 5; a++) {
// 	for (var b = 1; b <= a; b++) {
// 	document.write(a + " ");
// 	}
// 	document.write("<br>");
// }

// for (var a = 5; a >= 1; a--) {
// 	for (var b = 1; b <= a; b++) {
// 	document.write(a + " ");
// 	}
// 	document.write("<br>");
// }

// for (var a = 5; a >= 1; a--) {
// 	for (var b = a; b >= 1; b++) {
// 	document.write(a + " ");
// 	}
// 	document.write("<br>");
// }

//arrays

// var arr=[10,20,30,40,50];
// for (var a = 0; a <= 4; a++) {
// 	document.write(arr[a]+"<br>");
// }


// var arr=[10,20,30,40,50];
// var sum=0
// for (var a = 0; a <= 4; a++) {
// 	document.write(arr[a]+"<br>");
// 	sum = sum +arr[a];
// }
// document.write("Total sum : "+sum);

// var arr=new Array();
// for (var a = 0; a <= 4; a++) {
// 	arr[a]=prompt("Enter Value : ");
// }

// for (var a = 0; a <= 4; a++) {
// 	document.write(arr[a]+"<br>");
// }

// var arr=[
// 			["Azfar",22,"Male","BSSE"],
// 			["Hashir",22,"Male","BSEE"],
// 			["Aymen",24,"Male","BSMC"],
// 			["Muaaz",23,"Male","BSPE"]
// 		];
// for (var a = 0; a < 4; a++) {
// 	for (var b = 0; b < 4; b++) {
// 			document.write(arr[a][b]+ "  ");
// 	}
// 	document.write("<br>");
// }

// var arr=[
// 			["Azfar",22,"Male","BSSE"],
// 			["Hashir",22,"Male","BSEE"],
// 			["Aymen",24,"Male","BSMC"],
// 			["Muaaz",23,"Male","BSPE"]
// 		];
// document.write("<table border = '1px' cellspacing='1'>")
// for (var a = 0; a < 4; a++) {
// 	document.write("<tr>");
// 	for (var b = 0; b < 4; b++) {
// 			document.write("<td>"+arr[a][b]+ "</td>");
// 	}
// 	document.write("</tr>");
// }
// document.write("</table>");

// var arr=[["Azfar",22,"Male","BSSE"]];
// document.write(arr+"<br>");
// arr[0]="Hashim";
// document.write(arr+"<br>");
// delete arr[0][1];
// document.write(arr+"<br>");

// document.write(arr[1]+"<br>");

// var arr=["Dawar","Bilal","Ehtasham","Azfar"];
// document.write(arr+"<br><br>");
// arr.sort();
// document.write(arr+"<br><br>");

// arr.reverse();
// document.write(arr+"<br><br>");

// arr.pop();
// document.write(arr+"<br><br>");

// arr.push("Hashim");
// document.write(arr+"<br><br>");

// arr.shift();
// document.write(arr+"<br><br>");

// arr.unshift("Yawar");
// document.write(arr+"<br><br>");

// var a=["Raheem","Soman","Shaheer","Ali"];
// document.write(a+"<br><br>")
// var b=a.concat("Awais","Hashir","Muaaz");
// document.write(b+"<br><br>");

// var b=["Awais","Hashir","Muaaz"]
// var c=a.concat(b);
// document.write(c+"<br><br>");

// var d=c.join("/");
// document.write(d+"<br><br>");

// var a=["Dawar","Bilal","Ehtasham","Azfar"];
// document.write(a+"<br><br>");
// var b = a.slice(1,3);
// document.write(b+"<br><br>");

// var a=["Dawar","Bilal","Ehtasham","Azfar"];
// document.write(a+"<br><br>");
// var b = a.slice(1);
// document.write(b+"<br><br>");

// var a=["Dawar","Bilal","Ehtasham","Azfar"];
// document.write(a+"<br><br>");
// var b = a.slice(-2);
// document.write(b+"<br><br>");

// var a=["Dawar","Bilal","Ehtasham","Azfar"];
// document.write(a+"<br><br>");
// a.splice(2,0,"hashim","hashir");
// document.write(a+"<br><br>");

// var a=["Dawar","Bilal","Ehtasham","Azfar"];
// document.write(a+"<br><br>");
// a.splice(2,1,"hashim","hashir");
// document.write(a+"<br><br>");

// var a=["Dawar","Bilal","Ehtasham","Azfar"];
// document.write(a+"<br><br>");
// a.splice(-2,1,"hashim","hashir");
// document.write(a+"<br><br>");

// var arr=["Dawar","Bilal","Ehtasham","Azfar"];
// var a=20;
// if(Array.isArray(arr)){
// 						document.write("This is an array. <br><br>");
// }else{
// 	document.write("This is an not an array. <br><br>");
// }

// var b=30;
// if(Array.isArray(b)){
// 						document.write("This is an array. <br><br>");
// }else{
// 	document.write("This is an not an array. <br><br>");
// }

// var arr=["Dawar","Bilal","Ehtasham","Azfar","Dawar"];
// document.write(arr+"<br><br>");
// var b=arr.indexOf("Dawar",1);
// document.write(b+"<br><br>");

// var arr=["Dawar","Bilal","Ehtasham","Azfar","Dawar"];
// document.write(arr+"<br><br>");
// var b=arr.lastIndexOf("Dawar",3);
// document.write(b+"<br><br>");

// var arr=["Dawar","Bilal","Ehtasham","Azfar","Dawar"];
// document.write(arr+"<br><br>");
// var b=arr.includes("Dawar");
// document.write(b+"<br><br>");

// function checkadult(age){
// 	return age>=18;
// }
// var ages=[10,13,17,18,21,22];
// document.write(ages+"<br>");
// var b=ages.some(checkadult);
// document.write(b+"<br>");

// function checkadult(age){
// 	return age>=18;
// }
// var ages=[10,13,17,18,21,22];
// document.write(ages+"<br>");
// var b=ages.every(checkadult);
// document.write(b+"<br>");

// function checkadult(age){
// 	return age>=18;
// }
// var ages=[100,23,27,18,21,22];
// document.write(ages+"<br>");
// var b=ages.every(checkadult);
// document.write(b+"<br>");

// function checkadult(age){
// 	return age>=18;
// }
// var ages=[10,13,17,18,21,22];
// document.write(ages+"<br>");
// var b=ages.find(checkadult);
// document.write(b+"<br>");

// function checkadult(age){
// 	return age>=18;
// }
// var ages=[10,13,17,18,21,22];
// document.write(ages+"<br>");
// var b=ages.findIndex(checkadult);
// document.write(b+"<br>");

// function checkadult(age){
// 	return age>=18;
// }
// var ages=[10,13,17,18,21,22];
// document.write(ages+"<br>");
// var b=ages.filter(checkadult);
// document.write(b+"<br>");

// var arr=["Dawar","Bilal","Ehtasham","Azfar","Dawar"];
// document.write(arr.valueOf());

// var arr=["Dawar","Bilal","Ehtasham","Azfar","Dawar"];
// arr.fill("Hashir")
// document.write(arr);

// var arr=["Dawar","Bilal","Ehtasham","Azfar","Dawar"];
// arr.toString();
// document.write(arr);

//foreach loop

// var arr=["Dawar","Bilal","Ehtasham","Azfar","Dawar"];
// arr.forEach(function (value,index) {
// 	document.write(index +": "+value+"<br>");
// });

//object
// let g={first:"jhon",second:"doe"};
// document.write("<br>");
// 	document.write(g);
// 	document.write("<br>");
// 	document.write(typeof g);

// var a={
// 	fname:'jhon',
// 	lname:'doe',
// 	age:25,
// 	email:'jhon.doe@gmail.com',
// 	favMovies:['JhonWick','Equilizer','Fast And Furious'],
// 	salary: function () {
// 		return 25000;
// 	},
// 	living:{
// 		city:'Islamabad',
// 		country:'Pakistan'
// 	},
// 	fullName:function(){
// 		return this.fname+" "+this.lname;
// 	}
// }
// console.log(a);
// document.write(a.favMovies+"<br><br>");
// document.write(a.salary()+"<br><br>");
// document.write(a.fullName()+"<br><br>");
// document.write(a.living.city+"<br><br>");

// var person=new Object();
// person.name='azfar';
// person.age=23;
// person.city='islamabad';
// console.log(person);
// document.write(person.name);

// //Array of objects
// var student = [
// {name:"Qazi",age:18},
// {name:"Hashim",age:18},
// {name:"Hashir",age:18},
// {name:"Aymen",age:18},
// {name:"Azfar",age:18}
// ];
// console.log(student);
// for (var a = 0; a < student.length; a++) {
// 	document.write(student[a].name+" "+student[a].age+"<br>");
// }

//constant
// const a =[10,20,30,40];
// document.write(a);
// a[1]=45;
// a[2]=56;//this is acceptable in const
// // a=[56,43,23,57]//this is not acceptable in const
// console.log(a);
// const b ={name:"Raheem",age:22}
// b.name="Ali";//this is acceptable in const
// // b ={name:"Mian",age:42};//this is not acceptable in const
// console.log(b)

//forin loop

// var a={
// 	fname:'jhon',
// 	lname:'doe',
// 	age:25
// }
// for(var key in a){
// 	document.write(key+" "+a[key]+"<br>")
// }

//map function
// map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array.

// var ary = [11,22,33,44];
// var b=ary.map(test);
// document.write(b);
// function test (x){
// 	return x*10;
// }

// var ary =[{fname:'azfar',lname:'arshad',age:22},
// {fname:'aymen',lname:'mughal',age:24},
// {fname:'qazi',lname:'muaaz',age:23}] ;
// var b=ary.map(test);
// document.write(b);
// function test (x){
// 	return x.fname+" "+x.lname+" "+x.age ;
// }

//string methods

// var str="java is great language";
// var a =str.length;
// var b =str.toLowerCase();
// var c =str.toUpperCase();
// var d =str.includes("great");
// // var d =str.includes("great");//do not work because case sensitive
// var e =str.startsWith("java");
// var f =str.endsWith("language");
// document.write(a)

// var str="java is great language";
// var a =str.serch(is);
// var b =str.match(/is/g);//returns an array
// var c =str.indexOf("is");
// var d =str.lastIndexOf("is");
// var e =str.replace("java","php");
// var f =str.replace(/is/g,"are");
// var g =str.trim("language");
// document.write(a)

// var str="java is great language";
// var str2="Hello"
// var b =str.charAt(3);
// var c =str.charCodeAt(1);//returns ASCI code
// var d =String.fromCharCode(65);
// var e =str.concat(str2);
// var f =str.split(" ");//returns an array after splitting
// var g =str.repeat(2);
// document.write(a)

// var str="java is great language";
// var str2=50
// var a =str.slice(3,10);
// var b =str.substr(2,10);
// var c =str.substr(2);
// var d =str.substr(2);
// var e =str.substring(3,5);//does not count the last value
// var f =str.toString();
// document.write(f +20);
// var g =str.valueOf();
// document.write(str);

//Number Methods

// var a =100;
// var num =Number(a);
// document.write(num);
// document.write(num+100);

// var a ="100 99";
// var num =parseInt(a); //returns first integer in a string and does not return a float value
// document.write(num);

// var a =100;
// var num =parseFloat(a);
// document.write(num);

// var a =100;
// var num =Number.isFinite(a);
// document.write(num);

// var a =100;
// var num =Number.isInteger(a);
// document.write(num);

// var a =5.56786;
// var num =a.toFixed(3);//this value in the bracket tells how many value to take after the decimal point
// document.write(num);

// var a =100;
// var num =a.toPrecision(3);
// document.write(num);

//Math Methods

// var a=Math.floor(2.35);//gives nearest downward value
// document.write(a);
// var b=Math.round(2.6);//gives downward value if less than 0.5 in any value and upper if greater than 0.5
// document.write(b);
// var c=Math.trunc(7.8);//returns only integer value and remove decimal value
// document.write(c);
// var d=Math.max(2,3,4,5,6);//returns the highest number
// document.write(d);
// var e=Math.min(1,2,3,4,-10,-2);//returns the lowest number
// document.write(e);
// var f=Math.sqrt(64);//returns the squrate of the value
// document.write(f);
// var g=Math.cbrt(78);//returns the cube root of the value
// document.write(g);
// var h=Math.pow(4,3);//returns the power a value interms of x^y
// document.write(h);
// var i=Math.random();//returns a random value
// document.write(i);
// var j=Math.abs(5.25);//returns absolute value
// document.write(j);
// var k=Math.PI;
// document.write(k);
// var l=Math.ceil(5.2);//gives nearest upper value
// document.write(l);
// var m=Math.floor(Math.random()*10)+1;//returns a random value
// document.write(m);

//Date Methods

// const now = new Date();
// document.write(now.toDateString());
// document.write(now.getDate());
// document.write(now.getFullYear());
// document.write(now.getMonth());
// document.write(now.getDay());
// document.write(now.getHours());
// document.write(now.getMinutes());
// document.write(now.getSeconds());
// document.write(now.getMilliseconds());
// now.setDay();
// document.write(now);
// now.setDate(20);
// document.write(now);
// now.setFullYear(2020);
// document.write(now);
// now.setMonth(4);
// document.write(now);
// now.setHours(14);
// document.write(now);
// now.setMinutes();
// document.write(now);
// now.setSeconds();
// document.write(now);
// now.setMilliseconds();
// document.write(now);

//DOM Manipulation

// var element;
// element = document.all;
// element = document.head;
// element = document.title;
// element=document.body;
// console.log(element);
// element = document.links;
// element = document.links[0];
// element = document.images;
// element = document.forms;
// element = document.doctype;
// element = document.URL;
// element = document.domain;
// element = document.baseURI;
// element = document.getElementById("header");
// element = document.getElementsByClassName("list");
// element = document.getElementsByClassName("list")[0]
// element = document.getElementsByTagName("ul");
// element = document.getElementsByTagName("ul")[2]

// var element;
//element = document.getElementById("header").innerText;
//element = document.getElementById("content").innerText;
//element = document.getElementById("content").innerHTML;
//element = document.getElementById("header").innerHTML;
//element = document.getElementById("header").getAttribute("class");
//element = document.getElementById("header").getAttribute("style");
//element = document.getElementById("header").getAttribute("onClick");
//element = document.getElementById("header").getAttributeNode("onClick");
//element = document.getElementById("header").getAttributeNode("style");
//element = document.getElementById("header").getAttributeNode("style").value;
//element = document.getElementById("header").attributes;
//element = document.getElementById("header").attributes[1];
//element = document.getElementById("header").attributes[2].name;

/* DOM Set/Get Method */

//document.getElementById("header").innerHTML = "<h1>WOW</h1>";
//element = document.getElementById("header").setAttribute("style","border:10px dotted yellow");
//element = document.getElementById("header").attributes[1].value = "xyz";
// element = document.getElementById("header").removeAttribute("style");
// element = document.getElementById("header").removeAttribute("class");
// console.log(element);

//DOM query selector

//element = document.querySelector("#header").innerHTML = "<h1>WOW</h1>";
//element = document.querySelector("#header").getAttribute ("class");
//element = document.querySelectorAll(".list");
// element = document.querySelectorAll(".list")[1].innerHTML;
// element = document.querySelectorAll("ul");
// element = document.querySelectorAll("ul")[1].innerHTML;
// element = document.querySelectorAll("#header h1");
// element = document.querySelectorAll("#header h1")[1].innerHTML;
// console.log(element);

//DOM CSS

// var element;

//element = document.querySelector("#header").style.border;

//element = document.querySelector("#header").style.color;

//document.querySelector("#header").style.backgroundColor = "tan";

//document.querySelector("#header").style.color = "blue";

//document.querySelector("#header").className = "abc xyz";

//element = document.querySelector("#header").className;

//document.querySelector("#header").classList = "abc xyz";

//element = document.querySelector("#header").classList;

//document.querySelector("#header").classList.add("xyz","efg");

//element = document.querySelector("#header").classList;

//document.querySelector("#header").classList.remove("xyz");

// element = document.querySelector("#header").classList;

//console.log(element);

//DOM event listener

// onclick event
//document.getElementById("header").onclick = abc;

// onmouseenter event
//document.getElementById("header").onmouseenter = abc;

// with addEventListener

/* document.getElementById("header").addEventListener("mouseenter",abc);
   document.getElementById("header").addEventListener("click", function(){
       document.getElementById("header").style.border = "10px solid red";
   }); */

/* document.getElementById("header").addEventListener("click", abc);
   document.getElementById("header").addEventListener("click", function() {
      this.style.border = "10px solid red";
   });  */

// with removeEventListener

//document.getElementById("header").removeEventListener('mouseleave',abc);

//document.getElementById("header").addEventListener("click",xyz);

// function abc(){
//     document.getElementById("header").style.background = "green";
// }

// function xyz() {
//     document.getElementById("header").removeEventListener('mouseleave',abc);
// }

// document.querySelector("#inner").addEventListener('click',function(){
//   alert('Inner Div');
// },false);

// document.querySelector("#outer").addEventListener('click',function(){
//   alert('Outer Div');
// },false);

// <!-- <button onclick="hello()">Click Me</button>
// <p onclick="hello1()">Click Me 1</p>
// <button ondblclick="hello1()">Click Me 2</button>
// <p oncontextmenu="hello1()">Click Me 3</p>
// <p onmouseenter="hello1()" >Click Me 4</p>
// <p onmouseout="hello1()">Click Me 5</p>
// <p onmousedown="hello1()">Click Me 6</p>
// <p onmouseup="hello1()">Click Me 7</p>
// <button >Click Me 8</button>
// <button onkeydown="hello1()">Click Me 9</button>
// <button onkeyup="hello1()">Click Me 10</button>
// <button onload="hello1()">Click Me 11</button>
// <button onunload="hello1()">Click Me 12</button>
// <button onresize="hello1()">Click Me 13</button>
// <button onscroll="hello1()">Click Me 14</button>

//DOM classList Methods

// document.getElementById("header").addEventListener("click", abc);

// function abc() {
//     //document.getElementById("header").classList.add("xyz","efg");

    //document.getElementById("header").classList.remove("xyz");

    //var a = document.getElementById("header").classList.length;//tells the length of the classes

    //document.getElementById("header").classList.toggle("xyz");//toggle between classes (e.g add class on one click and remove a class on another click)

    //var a = document.getElementById("header").classList;

    //var a = document.getElementById("header").classList.item(0);//tells about the class on the respective index

//     var a = document.getElementById("header").classList.contains("first");//tells weather the class name exist in the class or not

//     console.log(a);
// }

//DOM parent element and parent nodes

//var a = document.getElementById("inner").parentElement;
//var a = document.getElementById("outer").parentElement;
//var a = document.body.parentElement;
//var a = document.getElementById("inner").parentElement.style.background = "red";
/* document.getElementById("-c").parentElement.style.background = "red";
    var a = document.getElementById("-c").parentElement; */
//
// document.getElementById("-c").parentElement.style.background = "red";
// var a = document.getElementById("main").parentNode;
//
// console.log(a);

//DOM ren and Nodes

//var a = document.getElementById("outer").ren;//smiply returns html tag

//var a = document.getElementById("inner").ren;

//var a = document.getElementById("inner").ren[1];

/* document.getElementById("inner").ren[1].style.background = "red";
var a = document.getElementById("inner").ren[1]; */

/* document.getElementById("inner").ren[0].style.background = "red";
var a = document.getElementById("inner").ren[0].innerHTML; */

//var a = document.getElementById("inner").Nodes;//it also returns text node

//var a = document.getElementById("inner").Nodes[0].innerHTML;

// document.getElementById("inner").Nodes[3].style.background = "red";
// var a = document.getElementById("inner").Nodes[3];
//
// console.log(a);

//DOM last  and last elemet  node

// nextSibling returns the next sibling node: An element node, a text node, or a comment node.
// Whitespace between elements are also text nodes.
// nextElementSibling returns the next sibling element (ignores text and comments).

// The previousElementSibling property returns the previous element of the specified element, in the same tree level.
// The difference between this property and previousSibling, is that previousSibling returns the previous sibling node as an element node,
//  a text node or a comment node,
//  while previousElementSibling returns the previous sibling node as an element node (ignores text and comment nodes).

//The lastElement property returns the last  element (ignores text and comment nodes).

/* document.getElementById("outer").lastElement.style.background = "red";
    var a = document.getElementById("outer").lastElement; */

/* document.getElementById("inner").lastElement.style.background = "red";
    var a = document.getElementById("inner").lastElement;  */


//var a = document.getElementById("inner").first;

// last returns the list  node: An element node, a text node, or a comment node.
// Whitespace between elements are also text nodes.


//var a = document.getElementById("inner").last;

//var a = document.getElementById("-c").first;

// var a = document.getElementById("-c").last;
// console.log(a);

 //DOM next element sibling, next sibling,previous element sibling and previous sibling

 //var a = document.getElementById("-C").nextElementSibling;

//var a = document.getElementById("-C").previousElementSibling;

//var a = document.getElementById("-C").previousElementSibling.innerHTML ;

/* document.getElementById("-C").previousElementSibling.style.background = "red";
    var a = document.getElementById("-C").previousElementSibling.innerHTML; */

/* document.getElementById("-C").nextElementSibling.style.background = "red";
    var a = document.getElementById("-C").nextElementSibling;  */

//var a = document.getElementById("-E").nextElementSibling;
//var a = document.getElementById("-head").previousElementSibling;
//var a = document.getElementById("-C").previousSibling;
// var a = document.getElementById("-C").nextSibling;
// console.log(a);

//DOM create createTextNode
//var newElement = document.createElement("p");

// var newElement = document.createElement("h2");
//
// console.log(newElement);
//
// var newText = document.createTextNode("This is just text");
//
// console.log(newText);
//
// /* Dom Create  Comment*/
//
// var newComment = document.createComment("this is comment");
//
// console.log(newComment);

//DOM append and insertBefore


/* Dom Create */
//var newElement = document.createElement("p");

// var newElement = document.createElement("h2");
//
// console.log(newElement);
//
// var newText = document.createTextNode("This is just text");
//
// console.log(newText);
//
// /* JavaScript Append*/
//
// newElement.append(newText);
//
// //document.getElementById("test").append(newElement);
//
//
// /* JavaScript  InsertBefore */
//
// var target = document.getElementById("test");
// target.insertBefore(newElement,target.Nodes[0])

//DOM insert insertAdjacentElement

//  insertAdjacentElement Method

// var newElement = document.createElement("h2");
//
// var newText = document.createTextNode("This is just element");
//
// newElement.append(newText);
//
// var target = document.getElementById("test");
//
// target.insertAdjacentElement("afterbegin",newElement);


//  insertAdjacentHTML Method

// var newElement = "<h2>This is just Html</h2>";
//
// var target = document.getElementById("test");
//
// target.insertAdjacentHTML("afterend",newElement);
//
// //  insertAdjacentText Method
//
// var newText = "<h2>This is just Text</h2>";
//
// var target = document.getElementById("test");
//
// target.insertAdjacentHTML("beforeend",newText);
//

/*DOM Replace*/

/*var newElement = document.createElement("li");

var newText = document.createTextNode("WOW new Text");

newElement.append(newText);

var target = document.getElementById("list");

var oldElement = target.ren[0];*/

//console.log(oldElement);

//target.replace(newElement,oldElement);

/*DOM Remove*/

// var target = document.getElementById("list");
//
// var oldElement = target.ren[1];


/* dom CloneNode*/
//
// var target = document.getElementById("list1").ren[0];
//
// var copyElement = target.cloneNode(true);//when true it display the whole li that is cloned inculding what is in the node
// var copyElement = target.cloneNode(false); //when false it only display the tags and class name
//
// console.log(copyElement);
//
//
// document.getElementById("list2").append(copyElement);
//
// document.getElementById("test").append(copyElement);

/* DOM Contains Method*/
//
// var parentElement = document.getElementById("test");
//
// var target = document.getElementById("abc");
//
// var find = parentElement.contains(target);
//
// console.log(find);

/*DOM hasAttribute*/
//
// var target  = document.getElementById("test");
//
// var find = target.hasAttribute("class");
//
// console.log(find);


/* DOM hasNodes*/
//
// var target  = document.getElementById("test");
//
// var find = target.hasNodes(); //would return true even if no id or class is present only there is space and would return false if there is no class,id or space present
//
// console.log(find);

//DOM isEqualNode
//must have:
//same node type
//same node name
//same node value
//same node node
//same attributes
//same attributes values

// var target1 = document.getElementById("list-1").firstElement;
//
// var target2 = document.getElementById("list-2").ren[1];
//
// var equal = target1.isEqualNode(target2);
//
// console.log(equal);


/*  DOM Focus Event  */
  //
  // function focusFunction(element){
  //   element.style.background = "lime";
  // }
  //
  // /*  DOM Blur Event  */
  //   function blurFunction(element){
  //     element.style.background = "";
  //   }
  //
  // /*  DOM Input Event  */
  //   function inputFunction(element){
  //     var x = element.value;
  //     document.getElementById("test").innerHTML = x;

  /*  DOM Change Event  */

        // function onchangeFunction(element){
  			// 	var x = element.value;
  			// 	document.getElementById("test").innerHTML = x;
  			// }
        //

        /*  DOM Select Event  */

        // function selectFunction(){
  			// 	console.log("You selected some text.");
  			// }
        //
  			/* DOM Submit Event */

  			/*function submitFunction(){
  				alert("You submitted a form.");
  			}*/

  			// function submitFunction(){
  			// 	var x = document.getElementById("fname").value;
  			// 	alert("Hello " + x);
  			// }

//DOM set and clear interval

//  var a=0;
// setInterval(Anim,1000)
// function Anim(){
//   a=a+10;
//   // console.log("Hello");
//   // console.log(a);
//   var target= document.getElementById("test");
//   target.style.marginLeft = a + 'px';
// }

// var a=0;
// var interval=setInterval(Anim,1000)
// function Anim(){
//  a=a+10;
// if (a===200) {
//   clearInterval(interval);
// } else {
//   var target= document.getElementById("test");
//   target.style.marginLeft = a + 'px';
//
// }
// }

// var a=0;
// var interval=setInterval(Anim,1000)
// function Anim(){
//  a=a+10;
// if (a===200) {
//   clearInterval(interval);
// } else {
//   var target= document.getElementById("test");
//   target.style.width = a + 'px';
//
// }
// }

//DOM set and clear time interval
//  var timeOut=setTimeout(Anim,3000)
//  function Anim() {
//    var target = document.getElementById("test");
//    target.style.width = "500px";
//  }
// function stopAnim(){
//   clearTimeout(timeOut);
// }
// var timeOut=setTimeout(Anim,3000)
// function Anim() {
//   var target = document.getElementById("test");
//   target.style.marginLeft = "50px";
// }
// function stopAnim(){
//  clearTimeout(timeOut);
// }
//
// var timeOut=setTimeout(function() {
//   var target = document.getElementById("test");
//   target.style.marginLeft = "50px";
// }
// ,3000)
//
// function stopAnim(){
//  clearTimeout(timeOut);
// }

//BOM (Browser Object Model)

//Get width and height of browser window
//Open and close browser window
//move and resize browser window
//scroll to browser window
//get URL,hostname,protocal of browser window
//get history of browser window

//BOM inner and outer height and width

// function resizeFunction(){
//   console.clear();
//   var iWidth = window.innerWidth;
//   console.log("Inner Width "+ iWidth);
//
//   var oWidth = window.outerWidth;
//   console.log("Outer Width "+ oWidth);
// }

// var iHeight = window.innerHeight;
//   console.log("Inner Height "+ iHeight);
//
//   var oHeight = window.outerHeight;
//   console.log("Outer Height "+ oHeight);

//BOM window open and close method

// function openWindow() {
//   window.open();
// }
// var myWindow;
//
// function openWindow() {
  // window.open("https://www.yahoobaba.net","_blank");
//   myWindow = window.open("https://www.yahoobaba.net","","width:300px, height:200px, top=300px");
// }
//
// function closeWindow(){
//   myWindow.close();
// }

//Template String use

// let user= "Azfar";
// let marks = 77;
// let hello = `Hello ${user} your marks are ${marks}`;
// document.write(hello);
//
// let fname = "azfar";
// let lname = "arshad";
// function fullname(fname,lname){
//   return `${fname} ${lname}`;
// }
//  let hello1 = `Hello ${fullname(fname,lname)}`;
//  document.write(hello1);

//Arrow Function

// let welcome = (fname,lname) =>{
//   `${fname}-${lname}`;
// }

// let welcome = (fname,lname) => `${fname}-${lname}`;
// console.log(welcome("azfar","arshad"));

//Rest operators

// function sum(name,...args){
//   console.log(arguments);
//   document.write(`${name}`);
//   let sum = 0;
//   for (let i in args) {
//     sum +=args[i]
//   }
//   document.write(sum+"<br>");
// }
// sum("azfar",20,30);

//Spread operator

// function sum(name,...args){
//   console.log(arguments);
//   document.write(`${name}`);
//   let sum = 0;
//   for (let i in args) {
//     sum +=args[i]
//   }
//   document.write(sum+"<br>");
// }
// varr arr = [10,20,30];
// sum("azfar",arr);
// sum("azfar",...arr);

// var arr = [10,20,30];
// console.log(arr);
// console.log(...arr);
// console.log([...arr]);

// var arr = [10,20,30];
// var arr2 = arr;
// arr.push(40);
// console.log(...arr2);

// var arr = [10,20,30];
// var arr2 = arr;
// arr.push(40);
// console.log([...arr2]);
// console.log(arr);
// console.log(arr2);

// var arr = [10,20,30];
// var arr2 = [40,50,60];
//concat using spread operator
//var arr3 = [...arr,...arr2];
//add new value using spread operator in the concat array
//var arr3 = [34,...arr,...arr2,56];
//can also be used with ObjectToSource
// var obj1={name : "azfar"};
// var obj2={age : "22"};
// var obj3 = {...obj1,...obj2};
// console.log(obj3);


//Object literals
// let n ="name;"
// var obj1 = {
//   [n]:"Azfar",
//   age : 22
// }
// console.log(obj1);

// let n ="student";
// var obj1 = {
//   [n+"name"]:"Azfar",
//   age : 22,
//   detail: function(){
//   },
//     return`${this.studentname} age is ${this.age}`
// };
// console.log(obj1);
// console.log(obj1.name);
//console.log(obj1.detail());

// let n ="student";
// var obj1 = {
//   [n+"name"]:"Azfar",
//   age : 22,
//   'detail show'(){
//     return`${this.studentname} age is ${this.age}`
//   },
// };
// console.log(obj1['detail show']());
//
// let name = "Azfar";
// let age = 22;
//
// function student(name,age){
//   return{name,age};
// }
// console.log(student(name,age));
//
// let fname = "Azfar";
// let lname = "Arshad";
// let age = 22;
//
// function student(fname,lname,age){
//   let fullname = fname + " "+ lname;
//   return{fullname,age};
// }
// let s =student(fname,lname,age);
// console.log(s.fullname);
//console.log(student(fname,lname,age));

//array destructring

// let user = ["Azfar",25,"Islamabad"];
// let [name ,age,city] = user;
// console.log(name);
// console.log(age);
// console.log(city);
//
// let user = ["Azfar",25,""];
// let [name ,age,city] = user;
// console.log(name);
// console.log(age);
// console.log(city);
//
// let user = ["Azfar",,"Islamabad"];
// let [name ,age = 20,city] = user;
// console.log(name);
// console.log(age);
// console.log(city);

// let user = ["Azfar",25,"Islamabad",["Male",25000]];
// let [name ,age = 20,city,[gender,salary]] = user;
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(gender);
// console.log(salary);

// let user = ["Azfar",25,"Islamabad"];
// let [name ,...args] = user;
// console.log(name);
// console.log(args);

// function user([name ,age = 20,city]){
//   console.log(name);
//   console.log(age);
//   console.log(city);
// }
// user (["Azfar",22,"Islamabad"]);

// function user(){
//   return ["Azfar",22,"Islamabad"];
// }
// var [name ,age = 20,city] = user();
// console.log(city);

// let user ={name : "azfar",age : 22, city : "islamabad"};
// let {name,age,city}=user;
// console.log(name);
// console.log(age);
// console.log(city);

// let user ={name : "azfar",age : 22, city : "islamabad"};
// let {name:n,age:a,city:c}=user;
// console.log(n);
// console.log(a);
// console.log(c);

//Promise

      // let complete = true;
      // let prom = new Promise(function(resolve,reject){
      //   if (complete) {
      //     resolve("I am successful");
      //   }else{
      //     reject("I failed");
      //   }
      // }
      // );
      // let complete = false;
      // let prom = new Promise(function(resolve,reject){
      //   if (complete) {
      //     resolve("I am successful");
      //   }else{
      //     reject("I failed");
      //   }
      // }
      // );
    //   function prom(complete){
    //     return new Promise(function(resolve,reject){
    //       if (complete) {
    //         resolve("I am successful");
    //       }
    //       else
    //       {
    //         reject("I failed");
    //       }
    //     }
    //   );
    // }
    //   console.log(prom(false));

  //   function prom(complete){
  //     return new Promise(function(resolve,reject){
  //       if (complete) {
  //         resolve("I am successful");
  //       }
  //       else
  //       {
  //         reject("I failed");
  //       }
  //     }
  //   );
  // }
  //   console.log(prom(true));

//   function prom(complete){
//     return new Promise(function(resolve,reject){
//       console.log("Fetching Data, Please Wait.");
//       setTimeout(() =>{
//         if (complete){
//           resolve("I am successfull")
//         }
//         else{
//           reject("I failed")
//         }
//       },1000)
//     });
// }

  // let onFulfilment = (result) =>{
  //   console.log(result);
  // }
  // let onRejection = (error) =>{
  //   console.log(result);
  // }

  // prom(true).then(onFulfilment);
  // prom(true).catch(onRejection);

  // prom(false).then(onFulfilment);
  // prom(false).catch(onRejection);

  // prom(true).then(onFulfilment).catch(onRejection);
  // prom(false).then(onFulfilment).catch(onRejection);

  // prom(true).then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error);});
  //
  // prom(false).then((result) =>{
  //   console.log(result);
  // }).catch((error) =>{
  //   console.log(error);});


  // function prom(a,b){
  //   return new Promise(function(resolve,reject){
  //     console.log("Fetching Data, Please Wait.");
  //     var c = a/b;
  //     setTimeout(() =>{
  //       if (a,b){
  //         resolve(`Answer is ${c}`);
  //       }
  //       else{
  //         reject("Answer could not be calculated");
  //       }
  //     },1000)
  //   });
  // }
  // prom(5,0).then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error);});

      //Ajax in Promise

    //   function prom(a,b){
    //     return new Promise(function(resolve,reject){
    //       console.log("Fetching Data, Please Wait.");
    //       setTimeout(() =>{
    //         $.get("https://jsonplaceholder.typicode.com/posts",function(data){
    //           console.log(data);
    //         }
    //         )
    //       },1000)
    //     });
    // }
    // prom(5,0).then((result) => {
    //   console.log(result);
    // }).catch((error) => {
    //   console.log(error);});

      // function prom(a,b){
      //   return new Promise(function(resolve,reject){
      //     console.log("Fetching Data, Please Wait.");
      //     setTimeout(() =>{
      //       $.get("https://jsonplaceholder.typicode.com/posts",function(data){
      //         resolve(data);
      //       }).fail(err =>{reject("Failed to load JSON");})
      //     },1000)
      //   });
      // }
      // prom(5,0).then((result) => {
      // console.log(result);
      // }).catch((error) => {
      // console.log(error);});

//Promise.all() function use

// let p1 = new Promise((resolve,reject) =>{
//   setTimeout(() =>{ console.log(`The first promise has resolved`);
//     resolve(10);
//   },3000);
// });
// let p2 = new Promise((resolve,reject) =>{
//   setTimeout(() =>{ console.log(`The first promise has resolved`);
//     resolve(20);
//   },3000);
// });
// let p3 = new Promise((resolve,reject) =>{
//   setTimeout(() =>{ console.log(`The first promise has resolved`);
//     resolve(30);
//   },3000);
// });
// var total = 0;
// Promise.all([p1,p2,p3]).then((result) =>{
//   for (var i in result) {
//     total +=result[i];
//     console.log(`Results : ${result}`);
//     console.log(`Total : ${total}`);
//   }
// }).catch((error) =>{
//   console.log(`Error : ${error}`);
// })

// let p1 = new Promise((resolve,reject) =>{
//   setTimeout(() =>{ console.log(`The first promise has resolved`);
//     resolve(10);
//   },3000);
// });
// let p2 = new Promise((resolve,reject) =>{
//   setTimeout(() =>{ console.log(`The second promise has resolved`);
//     reject(20);
//   },3000);
// });
// let p3 = new Promise((resolve,reject) =>{
//   setTimeout(() =>{ console.log(`The third promise has resolved`);
//     resolve(30);
//   },3000);
// });
// var total = 0;
// Promise.all([p1,p2,p3]).then((result) =>{
//   for (var i in result) {
//     total +=result[i];
//     console.log(`Results : ${result}`);
//     console.log(`Total : ${total}`);
//   }
// }).catch((error) =>{
//   console.log(`Error : ${error}`);
// })

// let promiseCall = function(returnData,message){
//   function(resolve,reject){
//     setTimeout(() =>{ console.log(`The ${message} promise has resolved`);
//       resolve(returnData);
//     },returnData*100);
//   }
//
//   let p1 = new Promise(promiseCall(10,"First");
//   let p2 = new Promise(promiseCall(20,"Second");
//   let p3 = new Promise(promiseCall(30,"Third");
//   let p4 = new Promise(function(resolve,reject) {
//     reject(`The fourth promise has been rejected`);
//   });
// var total = 0;
// Promise.all([p1,p2,p3]).then((result) =>{
//   for (var i in result) {
//     total +=result[i];
//     console.log(`Results : ${result}`);
//     console.log(`Total : ${total}`);
//   }
// }).catch((error) =>{
//   console.log(`Error : ${error}`);
// });
