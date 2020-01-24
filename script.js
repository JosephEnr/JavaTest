function myLoop1(){
  var start = document.getElementById("start").value;
  
  var end = document.getElementById("end").value;
  
  for(var i=start; i<=end; i++){
    document.write('<p>'+i);
  }
  for(var i=start; i>=end; i--){
    document.write('<p>'+i);
  }

}
for(var i=50;i>0;i--){

  document.write("For Loop #: " + i + "<br>")

}
for(var x=0; x<=30;x++){

  document.write("Random #: " + rng + "<br>")

  var rng = Math.floor(Math.random() * 10)+1;

 }
var start = 200;

var end = 0;

while(start >= end){

  document.write("While Count: " + start + "<br>")

  start=start-10;

}
for(var y=0; y<=10;y++){

  var rand = Math.floor(Math.random() * 10)+1;

  var sqrt = Math.sqrt(rand)

  document.write("Random Squared #: " + sqrt + "<br>")
 }
function myLoop2(){
  var start2 = document.getElementById("start2").value;
  var end2 = document.getElementById("end2").value;
  var jump= document.getElementById("jump").value;

  console.log(typeof start2);
  console.log(typeof end2);
  console.log(typeof jump);
  
  start2 = Number(start2);
  end2 = Number(end2);
  jump = Number(jump);
  
    for(var i=start2; i<=end2; i+=jump){
    document.write('<p>'+ i);
    
  }
}
