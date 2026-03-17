"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehiculo {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class Carro extends Vehiculo {
    mover() {
        console.log(`El Carro avanza a 80km/h`);
    }
}
class Bicicleta extends Vehiculo {
    mover() {
        console.log(`la bicicleta avanza a 20km/h`);
    }
}
class Moto extends Vehiculo {
    mover() {
        console.log(`la moto se desplaza a 60km/h`);
    }
}
const auto = new Carro("Honda");
auto.mover();
//# sourceMappingURL=Ejercicio2.js.map