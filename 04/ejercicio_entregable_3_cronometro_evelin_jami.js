let estado = false;
let conteo = 0;
let intervaloID = null;

const tiempo = document.getElementById("tiempo");
document.addEventListener("click", () => {
  if (estado == false) {
    estado = true;
    intervaloID = setInterval(() => {
      conteo++;
      conversionTiempo();
    }, 1000);
  } else {
    estado = false;
    clearInterval(intervaloID);
  }
});

function conversionTiempo() {
  let horas = Math.floor(conteo / 3600);
  let minutos = Math.floor((conteo % 3600) / 60);
  let segundos = conteo % 60;

  let h = horas < 10 ? "0" + horas : horas;
  let m = minutos < 10 ? "0" + minutos : minutos;
  let s = segundos < 10 ? "0" + segundos : segundos;

  tiempo.textContent = `${h}:${m}:${s}`;
}
