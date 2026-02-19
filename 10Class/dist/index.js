"use strict";
// class Persona {
//     constructor(public nombre: string, public edad: number) { }
//     saludar(): void {
//         console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// let nombre: string = prompt("Ingrese su nombre") || "";
// let edad: number = Number(prompt("Ingrese su edad"));
// let persona = new Persona(nombre, edad);
// persona.saludar();
class Persona {
    constructor(nombre, edad, telefono) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }
    mostrar() {
        alert(`
            Su nombre es: ${this.nombre}
            su edad es: ${this.edad}
            numero de telefono: ${this.telefono}`);
    }
}
let nombre = prompt("Ingrese su nombre") || "";
let edad = Number(prompt("Ingrese su edad"));
let telefono = Number(prompt("Ingrese su numero de telefono"));
let people = new Persona(nombre, edad, telefono);
people.mostrar();
//# sourceMappingURL=index.js.map