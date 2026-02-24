"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
class Programa {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar() {
        this.pedirNumero();
    }
    pedirNumero() {
        this.rl.question("ingrese un numero: ", (respuesta) => {
            const numero = Number(respuesta);
            this.evaluarNumero(numero);
            this.cerrar();
        });
    }
    evaluarNumero(numero) {
        if (numero > 10) {
            console.log("Es mayor que 10");
        }
        else if (numero === 10) {
            console.log("Es igual a 10");
        }
        else {
            console.log("es menor que 10");
        }
    }
    cerrar() {
        this.rl.close();
    }
}
const app = new Programa();
app.iniciar();
//# sourceMappingURL=index.js.map