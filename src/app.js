/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function cambiarCarta() {
  const valor = cambioDeValores();
  const signo = cambioDeSignos();

  document.querySelector(".valor").innerHTML = valor;
  document.querySelector(".signo-arriba").innerHTML = signo;
  document.querySelector(".signo-abajo").innerHTML = signo;
}

window.onload = () => {
  setInterval(cambiarCarta, 10000);
};

document.getElementById("boton").addEventListener("click", cambiarCarta);

let cambioDeValores = () => {
  const valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  return valores[Math.floor(Math.random() * valores.length)];
};

let cambioDeSignos = () => {
  const signos = ["♣", "♦", "♥", "♠"];
  return signos[Math.floor(Math.random() * signos.length)];
};
