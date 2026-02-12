"use strict";
// Crea una clase Empleado con:
// nombre (public)
// salario (protected)
// Crea una clase hija Gerente con método bono().
Object.defineProperty(exports, "__esModule", { value: true });
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
}
class Gerente extends Empleado {
    bono() {
        if (this.salario > 1000) {
            return this.salario * 0.2;
        }
        else {
            return this.salario * 0.1;
        }
    }
}
const empleado1 = new Gerente("Edwin", 300);
console.log(empleado1.bono());
//# sourceMappingURL=ejercicio03.js.map