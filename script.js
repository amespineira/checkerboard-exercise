// Your JS goes here
var body=document.getElementsByTagName('body');
var rgb1=[179, 179, 255];
var rgb2=[230, 179, 204];
createBoard([9,7])

function createBoard(size, color1, color2){ //size is formatted: rowlength, columns
    for(var i=1; i<=size[1]; i++){
      subtract(i-1);
      (i%2===0)? createRow("rgb("+rgb1.join(",")+")","rgb("+rgb2.join(",")+")",size[0]): createRow("rgb("+rgb2.join(",")+")","rgb("+rgb1.join(",")+")",size[0]);
    }
}
function subtract(i){
  rgb1[0]-=i*10
  rgb1[1]-=i*10
  rgb1[2]-=i*10
  rgb2[0]-=i*10
  rgb2[1]-=i*10
  rgb2[2]-=i*10
}
function createRow(color1, color2, length){
  console.log(color1);
  console.log(color2);
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
