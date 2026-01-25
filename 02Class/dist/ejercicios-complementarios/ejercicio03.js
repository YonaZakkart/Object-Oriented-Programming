"use strict";
// Ejercicio 3
// Simular una cuenta bancaria donde el saldo cambia según una acción.
Object.defineProperty(exports, "__esModule", { value: true });
let cuenta = {
    nombre: "Maria",
    saldo: 100
};
console.log("Titular: " + cuenta.nombre);
console.log("Saldo inicial: $" + cuenta.saldo);
cuenta.saldo = cuenta.saldo + 150;
console.log("Después de depositar $150: $" + cuenta.saldo);
// Retirar dinero
cuenta.saldo = cuenta.saldo - 200;
console.log("Después de retirar $200: $" + cuenta.saldo);
//# sourceMappingURL=ejercicio03.js.map