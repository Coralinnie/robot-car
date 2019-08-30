class pedals {
testClutch(){
    console.log('Clutch presionado');
}
testBreak(){
    console.log('Freno presionado')
}
testGas(){
    console.log('Acelerador presionado');
}
<<<<<<< HEAD

}
window.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
      case 67:
        pedal.testClutch();
        clutchBtn.style.backgroundColor = "#1d1d1d";
        break;
      case 76:
        turnDirectionLightsOn("arrow-left");
        direccion.testDireccionLeft();
        turnL.style.opacity = 0.6;
        break;
      case 82:
        turnDirectionLightsOn("arrow-right");
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
        console.log("se ha soltado el clutch");
        break;
      case 76:
        turnL.style.opacity = 1;
        clearDirectional();
        break;
      case 82:
        turnR.style.opacity = 1;
        clearDirectional();
        break;
      case 66:
        gas.style.backgroundColor = "#323332";
        console.log("se ha soltado el acelerador");
        break;
      case 86:
        freno.style.backgroundColor = "#323332";
        console.log("se ha soltado el freno");
        break;
      default:
        console.log('default');
    }
  });
  
=======
}
>>>>>>> c1d3344476d35cc511f1d7ac7a85c812efa6e990
