
  document.getElementById("head1").innerHTML = "<h1>Login Form</h1>"
  var append1 = document.getElementById("main");
//email label
  var head1 = document.createElement("label");
  var text1 = document.createTextNode("Username/Email");
  var a = head1.appendChild(text1);
append1.append(a,document.createElement('br'));
//email input field
var input2 = document.createElement("INPUT");
 input2.setAttribute("type", "email");
 input2.setAttribute("id", "email");
 document.body.appendChild(input2);
append1.append(input2,document.createElement('br'));
//password label
  var head2 = document.createElement("label");
  var text2 = document.createTextNode("Password");
  var b = head2.appendChild(text2);
  append1.appendChild(b);
append1.append(b,document.createElement('br'));
//password unput field
  var input1 = document.createElement("INPUT");
   input1.setAttribute("type", "password");
   input1.setAttribute("type", "password");
   input1.setAttribute("value", "");
   input1.setAttribute("id", "pass");
   document.body.appendChild(input1);
append1.append(input1,document.createElement('br'));
//submit button
var bt = document.createElement('button')
btText=document.createTextNode("Submit");
bt.setAttribute("type", "submit");
bt.setAttribute("name", "bt");
bt.setAttribute("onclick", "validate()");
var e = bt.appendChild(btText);
document.body.appendChild(bt);
append1.append(bt,document.createElement('br'));


//table
var table = document.createElement('table');
table.setAttribute("id","Usertable");
table.setAttribute("style","border:1px solid black");
var thead = document.createElement('thead');
thead.setAttribute("style","border:1px solid black");
var tbody = document.createElement('tbody');
tbody.setAttribute("id", "Usertable1");
tbody.setAttribute('border','1');
tbody.setAttribute('cellpadding','100px');
// var tableRow = document.createElement('tr');
var tableHeading1 = document.createElement('th');
tableHeading1.setAttribute("style","border:1px solid black");
tableHeading1.innerHTML = "Username/Email";
var tableHeading2 = document.createElement('th');
tableHeading2.setAttribute("style","border:1px solid black");
tableHeading2.innerHTML = "Password";
// var tableData = document.createElement('td');

table.appendChild(thead);
table.appendChild(tbody);
thead.appendChild(tableHeading1);
thead.appendChild(tableHeading2);
append1.appendChild(table);
// tbody.appendChild(tableRow);
// tableRow.appendChild(tableData)
// tableHeading.appendChild(tableRow);
// tableRow.appendChild(tableHeading);
// tableHead.appendChild(tableData);

function validate(){
 if(document.getElementById("email").value == 0){
   alert("email missing");
   // return false;
 }if (document.getElementById("pass").value == 0) {
   alert("pass missing");
   // return false;
 }if(document.getElementById("email").value !== 0 && document.getElementById("pass").value !== 0) {
   insert();
 }
}

//function for adding data to the table
function insert() {

  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  var tblRow=document.createElement('tr');
  var tblData1 = tblRow.appendChild(document.createElement('td'));
tblData1.setAttribute("style","border:1px solid black");
  var tblData2 = tblRow.appendChild(document.createElement('td'));
tblData2.setAttribute("style","border:1px solid black");
tblData1.innerHTML = email;
tblData2.innerHTML = pass;
  var tb = document.getElementById("Usertable1").appendChild(tblRow);
   //document.getElementById("Usertable").appendChild("UserTable1");
}
