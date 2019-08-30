class travel{

    testtravel() {
        const km = Math.round(Math.random() * 250) + 10;
        console.log("El recorrido es de " + km + "Km");
        const parada = Math.round(Math.random() * 3) + 1;
        console.log("El número de paradas es de: " + parada);
        const Stops = km / parada;
        const time = Math.round(Math.random() * 5) + 1;
        console.log("se hará una parada por cada " + Stops + "Km de " + time + "min");
        const speed = Math.round(Math.random() * 200) + 30;
        console.log("velocidad estimada: " + speed + "km/h");
        console.log("Tiempo de llegada estimado: " + Math.round(km / speed) + "h y " + (parada * time) + "min aproximadamente");
      
      }

}