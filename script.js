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
