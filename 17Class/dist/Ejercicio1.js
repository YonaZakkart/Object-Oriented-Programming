"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    comer() {
        console.log(`${this.nombre} está comiendo`);
    }
}
class Perro extends Animal {
    hacerSonido() {
        console.log(`Guau`);
    }
}
class Gato extends Animal {
    hacerSonido() {
        console.log(`Miau`);
    }
}
const perro = new Perro("Firulais");
perro.comer();
perro.hacerSonido();
//# sourceMappingURL=Ejercicio1.js.map