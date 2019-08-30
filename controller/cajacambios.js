class Cajacambios {

    testNeutra() {

        console.log("neutra activada");

    }
}



    function testcambios(cambio) {
        const cam = document.getElementById(cambio);
        const mensaje = console.log("ha pasado a " + cambio);
        const acelerando = console.log("ACELERANDO...");

        switch (cambio) {
            case "primera":
                console.log("Se ha soltado el freno y el clutch progresivamente\nACELERANDO...");
                freno.style.backgroundColor = "#323332";
                TiempoCambio();
                mensaje;
                break;
            case "segunda":
                acelerando;
                clutchBtn.style.backgroundColor = "#323332";
                TiempoCambio2();
                mensaje;
                break;
            case "tercera":
                acelerando;
                TiempoCambio2();
                mensaje;
                break;
            case "cuarta":
                acelerando;
                TiempoCambio2();
                mensaje;
                break;
            case "quinta":
                acelerando;
                TiempoCambio2();
                mensaje;
                break;
            case "sexta":
                acelerando;
                mensaje;
                break;
            case "neutra":
                console.log("ha pasado a neutra")
                parqueo();
                break;
            case "reversa":
                console.log("El auto está en reversa\nDireccionales encendidas");
                break;
        }

        function parqueo() {
            const frenoM = document.getElementById("frenoM");
            console.log("freno de mano activado");
            frenoM.style.background = "#00ff2a";

        }

        function TiempoCambio() {
            setTimeout(function () {
                console.log("Poner cambio siguiente o neutra");
            }, 5000);

        }

        function TiempoCambio2() {
            setTimeout(function () {
                console.log("Poner cambio siguiente o anterior");
            }, 5000);

        }

    }

