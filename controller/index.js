let isDirectionActive = false;
let directionalInterval = null;
let countDownInterval = null;
let isClutched = false;
const clutchBtn = document.getElementById("clutch");
const turnL = document.getElementById("turn-left");
const turnR = document.getElementById("turn-right");
const gas = document.getElementById("gas");
const freno = document.getElementById("break");
const countDown = document.getElementById("count-down");


this.frenoManualActivado();
 
const cambio = new Cajacambios();
const pedal = new pedals();
const direccion = new Direccion();
const viaje = new travel()

cambio.testNeutra();
addCountDown();

function addCountDown(params) {
  clearInterval(countDownInterval);
  let seconds = 0;
  let min = 0;

  countDown.innerHTML = `${formatTime(min)}:${formatTime(seconds)}`
  countDownInterval = setInterval(() => {
    seconds += 1;
    if(seconds == 60) {
      min += 1;
      sec = 0
    }
    countDown.innerHTML = `${formatTime(min)}:${formatTime(seconds)}`
  }, 1000)
}

function formatTime(time) {
  return time < 10 ? `0${time}`: time;
}


///******************************************PANTALLA DE STOP******************************************************/
function hideStopDialog() {
  const stopContainer = document.getElementById("stopWindow");
  if (
    stopContainer.style.visibility == "visible" ||
    stopContainer.style.visibility == ""
  ) {
    return (stopContainer.style.visibility = "hidden");
  }
  stopContainer.style.visibility = "visible";
}

///****************************************** ENCENDIDO DEL AUTO ******************************************************/
let carro = "apagado";
let neutra = "ON";
let FrenoMano = "ON";


function AutoEncendido() {

  if (neutra == "ON" && FrenoMano == "ON") {
    
    carro = "encendido";
    console.log("Carro encendido");
    viaje.testtravel();

  } else {
    alert("Para encender el Auto debe estar en Neutra y tener el freno de mano activado");
  }
  console.log("SE DISPONE EL AUTO PARA ARRANCAR");

  setTimeout(function () {
    arranque();
  }, 10000);


}

function botonON() {

  const botonOn = document.getElementById("encendido");
  this.AutoEncendido();

}
///******************************************FRENO DE MANO******************************************************/
function frenoManualDesac() {

  const frenoM = document.getElementById("frenoM");
  console.log("freno de mano desactivado\nPONER PRIMERA");
  frenoM.style.background = "#ff0000";

  return FrenoMano = "OFF";

}

function frenoManualActivado() {

  console.log("freno de mano activado");

}

///******************************************     ARRANQUE         ******************************************************/

let clutch = "ON";
let frenoArranque = "ON";
function arranque() {
  freno.style.backgroundColor = "#1d1d1d";
  clutchBtn.style.backgroundColor = "#1d1d1d";
  if (clutch == "ON" && frenoArranque == "ON") {
    console.log("clutch y freno presionado\nDESACTIVANDO FRENO DE MANO...");

  } else {

    console.log("para poder arrancar necesita primero pisar el clutch y freno de mano");

  }

  setTimeout(function () {
    frenoManualDesac();
  }, 8000);
}
