let isDirectionActive = false;
let directionalInterval = null;
let isClutched = false;
const clutchBtn = document.getElementById("clutch");
const turnL = document.getElementById("turn-left");
const turnR = document.getElementById("turn-right");
const gas = document.getElementById("gas");
const freno = document.getElementById("break");

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
  } else {
    directional.style[border] = "15px solid rgba(255, 187, 0, 0.4)";
    clearInterval(directionalInterval);
  }
}

function clearDirectional() {
  const left = document.getElementById("arrow-left");
  const right = document.getElementById("arrow-right");
  left.style.borderRight = "15px solid rgba(255, 187, 0, 0.4)";
  right.style.borderLeft = "15px solid rgba(255, 187, 0, 0.4)";
}
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