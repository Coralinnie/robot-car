let isDirectionActive = false;
let directionalInterval = null;
<<<<<<< HEAD
let countDownInterval = null;
=======
>>>>>>> c1d3344476d35cc511f1d7ac7a85c812efa6e990
let isClutched = false;
const clutchBtn = document.getElementById("clutch");
const turnL = document.getElementById("turn-left");
const turnR = document.getElementById("turn-right");
const gas = document.getElementById("gas");
const freno = document.getElementById("break");
<<<<<<< HEAD
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


=======

const pedal = new pedals();
const direccion = new Direccion();




window.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    case 67:
      pedal.testClutch();
      clutchBtn.style.backgroundColor = "#1d1d1d";
      break;
    case 76:
      direccion.testDireccionLeft();
      turnL.style.opacity = 0.6;
      break;
    case 82:
      direccion.testDireccionRight();
      turnR.style.opacity = 0.6;
      break;
    case 66:
      pedal.testGas();
      gas.style.backgroundColor = "#1d1d1d";
      break;
      case 86: 
      pedal.testBreak();
      freno.style.backgroundColor = "#1d1d1d";
      break;
    default:
      console.log('default');
  }
});

window.addEventListener("keyup", function (event) {
  switch (event.keyCode) {
    case 67:
      clutchBtn.style.backgroundColor = "#323332";
      break;
    case 76:
      turnL.style.opacity = 1;
      break;
    case 82:
      turnR.style.opacity = 1;
      break;
    case 66:
      gas.style.backgroundColor = "#323332";
      break;
      case 86:
      freno.style.backgroundColor = "#323332";
      break;
    default:
      console.log('default');
  }
});

this.travel();
>>>>>>> c1d3344476d35cc511f1d7ac7a85c812efa6e990
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
<<<<<<< HEAD

///****************************************** ENCENDIDO DEL AUTO ******************************************************/
let carro = "apagado";
let neutra = "ON";
let FrenoMano = "ON";


function AutoEncendido() {

  if (neutra == "ON" && FrenoMano == "ON") {
    
    carro = "encendido";
    console.log("Carro encendido");
    viaje.testtravel();

=======
/******************************************DIRECCIONALES******************************************************/
function turnDirectionLightsOn(dir) {
  clearInterval(directionalInterval);
  clearDirectional();
  const directional = document.getElementById(dir);
  const border = dir == "arrow-left" ? "borderRight" : "borderLeft";
  console.log("DirecCional " + dir + " encendida");
  /******************************************ENCENDIDO Y APAGADO******************************************************/
  if (!isDirectionActive) {
    directionalInterval = setInterval(() => {
      if (
        directional.style[border] == "" ||
        directional.style[border] == "15px solid rgba(255, 187, 0, 0.4)"
      ) {
        console.log(`${dir} APAGADO`);
        directional.style[border] = "15px solid rgb(255, 187, 0)";
      } else {
        console.log("${dir}  PRENDIDO");
        directional.style[border] = "15px solid rgba(255, 187, 0, 0.4)";
      }
    }, 300);
>>>>>>> c1d3344476d35cc511f1d7ac7a85c812efa6e990
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
<<<<<<< HEAD
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
=======
/******************************************CICLO DE VIAJESSSSSSSSSSSSSSS ******************************************************/
function travel() {
  const km = Math.round(Math.random() * 250) + 10;
  console.log("El recorrido es de " + km + "Km");
  const Stops = km / 2;
  const time = Math.round(Math.random() * 10) + 4;
  console.log("se hará una parada por cada: " + Stops + "Km\n de " + time + "min");
  //const Speed = Math.round(Math.random()* 200 ) + 60

  //const ExtraTime = time*2;
}

function clutch() {
  isClutched = !isClutched;
}
>>>>>>> c1d3344476d35cc511f1d7ac7a85c812efa6e990
