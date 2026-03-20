"use strict";
// Crear una clase abstracta Producto con los métodos calcularPrecioFinal() y 
// mostrarInformacion(). El sistema debe permitir registrar productos electrónicos, ropa y 
// alimentos. Cada tipo de producto debe aplicar diferentes reglas de impuestos o descuentos 
// para calcular el precio final. 
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    constructor(nombre, precio) {
        this.precio = precio;
        this.nombre = nombre;
    }
}
class Electronico extends Producto {
    constructor(nombre, precio) {
        super(nombre, precio);
    }
    calcularPrecioFinal() {
        let precioFinal = this.precio + (this.precio * 0.15);
        return precioFinal;
    }
    mostrarInformacion() {
        console.log(`
            nombre del producto: ${this.nombre}
            precio del producto: $${this.precio}
            precio final (con impuestos): $${this.calcularPrecioFinal()}`);
    }
}
class Ropa extends Producto {
    constructor(nombre, precio) {
        super(nombre, precio);
    }
    calcularPrecioFinal() {
        let precioFinal = this.precio - (this.precio * 0.10);
        return precioFinal;
    }
    mostrarInformacion() {
        console.log(`
            nombre del producto: ${this.nombre}
            precio del producto: $${this.precio}
            precio final (con desduento del 10%): $${this.calcularPrecioFinal()}`);
    }
}
class Alimentos extends Producto {
    constructor(nombre, precio) {
        super(nombre, precio);
    }
    calcularPrecioFinal() {
        let precioFinal = this.precio + (this.precio * 0.05) - (this.precio * 0.08);
        return precioFinal;
    }
    mostrarInformacion() {
        console.log(`
            nombre del producto: ${this.nombre}
            precio del producto: $${this.precio}
            precio final $${this.calcularPrecioFinal()}`);
    }
}
const electronico = new Electronico("Lpatop", 1000);
electronico.mostrarInformacion();
const ropa = new Ropa("camisa", 15);
ropa.mostrarInformacion();
const alimento = new Alimentos("caja de jugos", 12);
alimento.mostrarInformacion();
console.log(alimento.calcularPrecioFinal()); //solo devuelve un number, que es el precio final
//# sourceMappingURL=Ejercicio8.js.map