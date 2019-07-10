/*

*/


function start(e) {
    var name = [
    {
       char: '黃',
       big5: 'B6C0',
       cns: '1-6327',
       unicode: '9EC3'

    },
    {
       char: '雋',
       big5: 'B96D',
       cns: '1-6755',
       unicode: '96CB'      
   },
   {
       char: '祥',
       big5: 'B2BB',
       cns: '1-5C40',
       unicode: '7965'
        }
   ];
   
   var ele = document.getElementById("div1");

for (var i = 0; i < 3; i++) {
    ele.innerHTML += name[i].char;
    ele.innerHTML += ' big5 = ';
    ele.innerHTML += name[i].big5;
    ele.innerHTML += ' cns = ';
    ele.innerHTML += name[i].cns;
    ele.innerHTML +=' unicode = ';
    ele.innerHTML += name[i].unicode;
    ele.innerHTML += '<br>';
  }
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
