import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {





//crear latarjeta
//DONE div to create the card
//DONE create the 3ps
//Create a function to randomize the card result
function generateRandomCard(){
  console.log("working")
  let suit =["♦", "♥", "♠", "♣"]
  let result =["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
  let randomIndexResult = Math.floor(Math.random()* result.length)
  let randomResult = result[randomIndexResult]
  let randomIndexSuit = Math.floor(Math.random()* suit.length )
  let randomSuit = suit[randomIndexSuit]
  const color = randomSuit === "♥" || randomSuit === "♦" ? "red" : "black";
  document.getElementById("result").textContent = randomResult
  document.getElementById("suit").textContent = randomSuit
  document.getElementById("invertSuit").textContent = randomSuit
  
  
   document.getElementById("suit").style.color = color;
   document.getElementById("result").style.color = color;
   document.getElementById("invertSuit").style.color = color;
}  
generateRandomCard();
//create 2 arrays (suit,,result)
//add suit,invertsymbo,and result to the the HTML
//put suit, invertsuit, and result on the card as the picture.
//DONE call the funtion


  



  console.log("Hello Rigo from the console!");
};
