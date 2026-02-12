"use strict";
//1
// class Usuario {
//     public nombre: string;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(nombre: string) {
//         this.nombre = nombre;
//     }
// }
// const u = new Usuario("Juan");
// console.log(u.nombre);
//2
// class Usuario {
//     private password: string;
//     constructor(pass: string) {
//         this.password = pass;
//     }
//     validar(pass: string): boolean {
//         return this.password === pass;
//     }
// }
// const u = new Usuario("1234");
// console.log(u.validar("1234"));
//3
class Persona {
    constructor(edad) {
        this.edad = edad;
    }
}
class Estudiante extends Persona {
    mostrarEdad() {
        return (this.edad);
    }
}
const e = new Estudiante(20);
console.log(e.mostrarEdad());
//# sourceMappingURL=class.js.map