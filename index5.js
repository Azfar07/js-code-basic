// var newElement = document.createElement("li");
// var newText = document.createTextNode("this is mango");
// newElement.appendChild(newText);
// var target= document.getElementById("list");
// var oldElement = target.children[0];
// target.removeChild(oldElement);

// var target = document.getElementById("list1").children[0];
// var copyElement =target.cloneNode(true);
// // console.log(copyElement);
// var target2 =document.getElementById("list2").appendChild(copyElement);
// var parent = document.getElementById("test");
// var target1 = document.getElementById("abc");
// var find =parent.contains(target1);
// console.log(find);

// var parent = document.getElementById("test");
// var target = document.getElementById("abc");
// var find =parent.hasAttribute("class");
// console.log(find);

// var parent = document.getElementById("test");
// var target = document.getElementById("abc");
// var find =parent.hasChildNodes();
// console.log(find);

// var target1=document.getElementById("list-1").firstElementChild;
// var target2=document.getElementById("list-2").firstElementChild;
// var equal=target1.isEqualNode(target2);
// console.log(equal);

var target1=document.getElementById("list-1").firstElementChild;
var target2=document.getElementById("list-2").children[1];
var equal=target1.isEqualNode(target2);
console.log(equal);
