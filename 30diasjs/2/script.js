"use strict";
let mSegundos = document.querySelector(".segundos");
let minutero = document.querySelector(".minutos");
let mHoras = document.querySelector("horas");

function relojs() {
    let now = new Date();

    let segundos = now.getSeconds();
    let segundosGrados = ((segundos / 60) * 360) + 90;
    mSegundos.style.transform = `rotate(${segundosGrados}deg)`;

    const minutos = now.getMinutes();
    const minutosGrados = ((minutos / 60) * 360) + ((segundos/60)*6) + 90;
    minutero.style.transform = `rotate(${minutosGrados}deg)`;

    const hora = now.getHours();
    const horasGrados = ((hora / 12) * 360) + ((minutos/60)*30) + 90;
    mHoras.style.transform = `rotate(${horasGrados}deg)`;
  }

setInterval(relojs, 1000);

relojs();