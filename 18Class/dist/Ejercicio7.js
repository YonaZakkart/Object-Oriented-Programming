"use strict";
// Crear una clase abstracta Transporte con el método calcularCosto(). El usuario 
// seleccionará entre Taxi, Autobús o Uber e ingresará la distancia recorrida para calcular el 
// costo del viaje. 
Object.defineProperty(exports, "__esModule", { value: true });
class Transporte {
}
class Taxi extends Transporte {
    calcularCosto(distancia) {
        let costo = parseFloat(distancia) * 1.2; //supongamos que por cada km se cobra $1.20
        console.log(`El costo de su viaje en taxi es: $${costo}`);
    }
}
class Autobus extends Transporte {
    calcularCosto(distancia) {
        let costo = parseFloat(distancia) * 0.10; //cada Km = $0.10 aqui
        console.log(`El costo de su viaje en Autobus es: $${costo}`);
    }
}
class Uber extends Transporte {
    calcularCosto(distancia) {
        let costo = parseFloat(distancia) * 0.60; //$0.60 por cada km de distancia
        console.log(`El costo de su viaje en Uber es: $${costo}`);
    }
}
const viajeTaxi = new Taxi();
viajeTaxi.calcularCosto("10");
const viajeBus = new Autobus();
viajeBus.calcularCosto("10");
const viajeUber = new Uber();
viajeUber.calcularCosto("10");
//# sourceMappingURL=Ejercicio7.js.map