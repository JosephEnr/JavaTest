function Looop(){
  for(var i=0;i<10;i++){

    document.write("For Loop #: " + i + "<br>");

  } 
}
function RLoop(){
  var rng = Math.floor(Math.random() * 10)+1;
  for(var x=0; x<=10;x++){
    document.write("Random #: " + rng + "<br>");
 }
}
function sLoop(){
  var start = 100;
  var end = 0;

  while(start >= end, start--){
    document.write("While Count: " + start + "<br>");
  }
}
function RSLoop(){
  var rand = Math.floor(Math.random() * 10)+1;
  var sqrt = Math.sqrt(rand);
  
  for(var y=0; y<=10;y++){
    document.write("Random Squared #: " + sqrt + "<br>");
  }
}
