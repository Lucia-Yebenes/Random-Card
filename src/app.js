/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //llamo a al elemento que quiero modificar y lo almaceno en variable,
  //en este caso seria al elemento que tiene la clase icono1 lo almaceno en variable llamoIcono
  //esto me devuelve un array de 2 elementos xq yo yengo en mi html 2 elementos con la misma clase
  let llamoIcono = document.getElementsByClassName("icono1");
  //abajo hago para que me devuelva aleatorio

  let simbolo = ["♦", "♥", "♠", "♣"];
  function AleatorioSimbolo() {
    var RandomSimbolo = simbolo[Math.floor(Math.random() * 4)];
    return RandomSimbolo;
  }

  //creo variable para almacenar el resultado de la funcion (un simbolo solo)
  var SimboloAl = AleatorioSimbolo();

  switch (SimboloAl) {
    case "♥":
      llamoIcono[0].style.color = "red";
      llamoIcono[1].style.color = "red";
      break;
    default:
      llamoIcono[0].style.color = "black";
      llamoIcono[1].style.color = "black";
      break;
  }
  //hago que modifique le digo q a la variable llamoIcon.innerhtml sea igual al
  //simbolo que me devolvio la funcionn

  llamoIcono[0].innerHTML = SimboloAl;
  llamoIcono[1].innerHTML = SimboloAl;

  //llamoIcono[0].style.color = "red";

  //llamo elementos de array que me genero cuando use className x eso pongo llamoIcono[0]
  //llamo a al elemento que quiero modificar y lo almaceno en variable,
  let llamoNum = document.getElementById("num");

  let Numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "K", "Q", "J"];
  function AleatorioNumero() {
    var RandomNumero = Numero[Math.floor(Math.random() * 12)];
    return RandomNumero;
  }
  var paloAL = AleatorioNumero();
  llamoNum.innerHTML = paloAL;
};
