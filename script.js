// Your JS goes here
var body=document.getElementsByTagName('body');
var hex="ABCDEFG1234567890";
var hexarray=hex.split("");
createBoard([9,7])
change()
function change(){
  var stuff=setInterval(function(){
    changeColors()
}, 1000);
}
function changeColors(){
  var blocks=document.getElementsByTagName('div');
  for(var i=0; i<blocks.length; i++){
    blocks[i].setAttribute('style',"background-color:"+randomHex()+"; width: 11.1%; height: 11.1%; float: left; padding-bottom: 11.1%; margin: 0; padding-top:0;")
  }
}
function createBoard(size){ //size is formatted: rowlength, columns
    for(var i=1; i<=size[1]; i++){
      (i%2===0)? createRow(size[0]): createRow(size[0]);
    }
}
function createRow(length){
  for(var i=1; i<=length; i++){
    createBlock();
  }
}
function createBlock(){
  var style="background-color:"+randomHex()+"; width: 11.1%; height: 11.1%; float: left; padding-bottom: 11.1%; margin: 0; padding-top:0";
  var block=document.createElement('div');
  block.setAttribute('style',style)
  body[0].appendChild(block);
}
function randomHex(){
  var out="#";
  for(var i=0; i<6; i++){
    out+=hexarray[getRandomInt(0,hex.length)]
  }
  return out;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
