// document.querySelector('#inner').addEventListener('click',function () {
//   alert('Inner Div');
// });
// document.querySelector('#outer').addEventListener('click',function () {
//   alert('Outer Div');
// });

// document.querySelector('#inner').addEventListener('click',function () {
//   alert('Inner Div');
// },true);
// document.querySelector('#outer').addEventListener('click',function () {
//   alert('Outer Div');
// },true);


document.querySelector('#inner').addEventListener('click',function () {
  alert('Inner Div');
},false);
document.querySelector('#outer').addEventListener('click',function () {
  alert('Outer Div');
},false);