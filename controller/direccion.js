class Direccion{

    testDireccionLeft(){
        console.log('Volteando hacia la izquierda');
    
    }

    testDireccionRight(){
        console.log('Voltiando hacia la derecha');
    }
<<<<<<< HEAD

}

function turnDirectionLightsOn(dir) {
  
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
          console.log(`${dir}  PRENDIDO`);
          directional.style[border] = "15px solid rgba(255, 187, 0, 0.4)";
        }
      }, 300);
    } else {
      directional.style[border] = "15px solid rgba(255, 187, 0, 0.4)";
      clearInterval(directionalInterval);
    }
  }
  
function clearDirectional() {
    clearInterval(directionalInterval);
    const left = document.getElementById("arrow-left");
    const right = document.getElementById("arrow-right");
    left.style.borderRight = "15px solid rgba(255, 187, 0, 0.4)";
    right.style.borderLeft = "15px solid rgba(255, 187, 0, 0.4)";
}

  
=======
}
>>>>>>> c1d3344476d35cc511f1d7ac7a85c812efa6e990
