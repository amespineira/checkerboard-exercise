// Your JS goes here
var body=document.getElementsByTagName('body');

createBoard([9,7],'red','black')

function createBoard(size, color1, color2){ //size is formatted: rowlength, columns
    for(var i=1; i<=size[1]; i++){
      (i%2===0)? createRow(color1,color2,size[0]): createRow(color2,color1,size[0]);
    }
}
function createRow(color1, color2, length){
  for(var i=1; i<=length; i++){
    (i%2===0)? createBlock(color2) : createBlock(color1);
  }
}

function createBlock(color){
  var style="background-color:"+color+"; width: 11.1%; height: 11.1%; float: left; padding-bottom: 11.1%; margin: 0; padding-top:0";
  var block=document.createElement('div');
  block.setAttribute('style',style)
  body[0].appendChild(block);
}
