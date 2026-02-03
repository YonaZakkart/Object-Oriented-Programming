"use strict";
// EJERCICIO 1.
// Un GYM necesita un programa que evalué el IMC (índice de masa muscular) de 
// los hombres y mujeres que mes a mes se inscriben en sus membresías, el 
// cliente solicita que solo se coloquen sus datos respectivos para la formula y que 
// el programa muestre el resultado de su IMC. 
Object.defineProperty(exports, "__esModule", { value: true });
class GYM {
    constructor(peso, estatura) {
        this.peso = peso;
        this.estatura = estatura;
    }
    IMC() {
        let imc = (this.peso / (this.estatura * this.estatura));
        let estado;
        if (imc < 18.59) {
            estado = "Bajo peso";
        }
        else if (imc >= 18.6 && imc <= 24.99) {
            estado = "Peso normal";
        }
        else if (imc >= 25 && imc <= 29.99) {
            estado = "Sobrepeso";
        }
        else if (imc >= 30) {
            estado = "Obesidad";
        }
        console.log(`Su IMC es: ${imc.toFixed(2)}, su estado es: ${estado}`);
    }
}
let cliente = new GYM(72, 1.70);
cliente.IMC();
//# sourceMappingURL=Ejercicio1.js.map