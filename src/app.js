import "bootstrap";
import "./style.css";

window.onload = function() {
  
  let palo = ['♠', '♥', '♦', '♣'];
    let símbolo = Math.floor(Math.random() * palo.length);
  document.querySelector("#randomSymbol").innerHTML = palo[símbolo] + número[cantidad];

  let número = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let cantidad = Math.floor(Math.random() * número.length);
  document.querySelector("#randomNumber").innerHTML = número[cantidad];

};