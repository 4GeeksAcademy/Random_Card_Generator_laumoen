import "bootstrap";
import "./style.css";

window.onload = function() {

  let palo = ['♠', '♥', '♦', '♣'];
    let símbolo = Math.floor(Math.random() * palo.length);
  let elementosPalo = document.getElementsByClassName("palos");
    for (let i = 0; i < elementosPalo.length; i++) {
      elementosPalo[i].innerHTML = palo[símbolo];
        if (palo[símbolo] === '♥' || palo[símbolo] === '♦') {
          elementosPalo[i].style.color = 'red';
        } else {
          elementosPalo[i].style.color = 'black';
        }
      }

  let número = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let cantidad = Math.floor(Math.random() * número.length);
  document.querySelector("#randomNumber").innerHTML = número[cantidad];
 
};