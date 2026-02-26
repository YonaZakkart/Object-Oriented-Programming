"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animales {
    constructor(nombre, categoria, raza) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.raza = raza;
    }
    mostrar() {
        console.log(`${this.nombre} corre 40km/h ya que es un ${this.categoria} de la raza ${this.raza}`);
    }
}
class Encargado extends Animales {
    constructor(nombre, categoria, raza, duenio) {
        super(nombre, categoria, raza);
        this.duenio = duenio;
    }
    mensaje() {
        console.log(`El animal es un ${this.categoria}, se llama ${this.nombre} y su duenio es: ${this.duenio}`);
    }
}
class Vender extends Encargado {
    constructor(nombre, categoria, raza, duenio, precio) {
        super(nombre, categoria, raza, duenio);
        this.precio = precio;
    }
    vender() {
        console.log(`El ${this.categoria}, se vendió a $${this.precio} dolares`);
    }
}
let cliente1 = new Vender("Pipo", 'Perro', 'chiguagua', 'Juan', 45);
cliente1.mostrar();
cliente1.mensaje();
cliente1.vender();
//# sourceMappingURL=index.js.map