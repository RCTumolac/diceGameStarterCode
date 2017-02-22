/*global $ */
/*global rolldice */

$(document).ready(function(){
  
  $("#roll-dice").click(function(){
    rolldice();
  });
  
  function rolldice(){
  //Place your code here 
  var x =  Math.floor(Math.random()*(6)+1);
  var x2 =  Math.floor(Math.random()*(6)+1);
  console.log(x);
  console.log(x2);
  
  if(x == 1){
    $("#first-die").html('<img id="Dice 1" src="images/1.png" />');
    console.log("1");
    }
  else if(x == 2){
    $("#first-die").html('<img id="Dice 2" src="images/2.png" />');
    console.log("2");
  }
  else if(x == 3){
    $("#first-die").html('<img id="Dice 3" src="images/3.png" />');
    console.log("3");
  }
  else if(x == 4){
    $("#first-die").html('<img id="Dice 4" src="images/4.png" />');
    console.log("4");
  }
  else if(x == 5){
    $("#first-die").html('<img id="Dice 5" src="images/5.png" />');
    console.log("5");
  }
  else{
    $("#first-die").html('<img id="Dice 6" src="images/6.png" />');
    console.log("6");
  }
//----------------------SECOND DICE------------------------------------------
   if(x2 == 1){
    $("#second-die").html('<img id="Dice 1" src="images/1.png" />');
    console.log("1");
    }
  else if(x2 == 2){
    $("#second-die").html('<img id="Dice 2" src="images/2.png" />');
    console.log("2");
  }
  else if(x2 == 3){
    $("#second-die").html('<img id="Dice 3" src="images/3.png" />');
    console.log("3");
  }
  else if(x2 == 4){
    $("#second-die").html('<img id="Dice 4" src="images/4.png" />');
    console.log("4");
  }
  else if(x2 == 5){
    $("#second-die").html('<img id="Dice 5" src="images/5.png" />');
    console.log("5");
  }
  else{
    $("#second-die").html('<img id="Dice 6" src="images/6.png" />');
    console.log("6");
  }
  
  }
  
});


