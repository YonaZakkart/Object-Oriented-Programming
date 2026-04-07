"use strict";
// Ejercicio 1: Crear un código que solicite el sueldo de una persona y si es mayor de 
// $500.00 brindar una tarjeta de crédito de $700, si es mayor a $800 una tarjeta de 
// $1100 y si es mayor de $1300 una tarjeta de $2500.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Persona {
    sueldo = 0;
}
class Cliente extends Persona {
    pedirSueldo() {
        rl.question(`Ingrese su sueldo: `, (dato) => {
            this.sueldo = parseFloat(dato);
            this.evaluarCredito();
            rl.close();
        });
    }
    evaluarCredito() {
        console.log(`Sueldo ingresado: $${this.sueldo}`);
        if (this.sueldo > 1300) {
            console.log(`Tarjeta aprobada por 2500`);
        }
        else if (this.sueldo > 800) {
            console.log(`tarjeta aprobada por 1100`);
        }
        else if (this.sueldo > 500) {
            console.log(`Trajeta aprobada por $700`);
        }
        else {
            console.log(`No aplica para tarjeta de credito`);
        }
    }
}
const cliente1 = new Cliente();
cliente1.pedirSueldo();
//# sourceMappingURL=01Ejer.js.map