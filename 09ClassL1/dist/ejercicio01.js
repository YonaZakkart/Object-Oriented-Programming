"use strict";
// EJERCICIO 1
Object.defineProperty(exports, "__esModule", { value: true });
// let persona = {
//     nombre: "Will",
//     apellido: "Gonzales",
//     telefono: 70002981,
//     correo: "willgonza@gmail.com",
//     codIdentificacion: "A20152971"
// }
// console.log(`
//     nombre: ${persona.nombre}
//     Apellido: ${persona.apellido}
//     telefono: ${persona.telefono}
//     correo: ${persona.correo}`)
class Persona {
    constructor(nombre, apellido, telefono, correo, codIdentificacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificacion = codIdentificacion;
    }
}
let usuario1 = new Persona("Will", "gonzales", 70002981, "willgonza@gmail.com", "A20142816");
console.log(`
    nombre: ${usuario1.nombre}
    apellido: ${usuario1.apellido}
    telefono: ${usuario1.telefono}
    gmail: ${usuario1.correo}`);
//${usuario1.codIdentificacion} no se puede acceder
//# sourceMappingURL=ejercicio01.js.map