"use strict";
// Ejercicio 3: Desarrollar un algoritmo que permita manejar una tarjeta de crédito, que 
// cuando se inicie, el saldo sea de $3000.00 y preguntar, digite el monto de la transacción 
// e írselo restando, el programa se debe de cerrar solo si el cliente finaliza o se queda a 
// 0 la cuenta de lo contrario siempre preguntar digite el monto de la transacción. 
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = __importDefault(require("console"));
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Tarjeta {
    saldo;
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }
}
class TarjetaCredito extends Tarjeta {
    constructor() {
        super(3000);
    }
    iniciar() {
        console_1.default.log(`Saldo inicial: $${this.saldo}`);
        this.procesarTransaccion();
    }
    procesarTransaccion() {
        if (this.saldo <= 0) {
            console_1.default.log(`
                Saldo agotado. cuenta cerrada`);
            rl.close();
            return;
        }
        rl.question(`Digite el monto de la transaccion ( 0 para salir): `, (dato) => {
            const monto = parseFloat(dato);
            if (isNaN(monto) || monto < 0) {
                console_1.default.log(`ingrese un monto valido`);
                return this.procesarTransaccion();
            }
            if (monto === 0) {
                console_1.default.log(`Operacio finalizada`);
                rl.close();
                return;
            }
            if (monto > this.saldo) {
                console_1.default.log(`Saldo insuficiente`);
            }
            else {
                this.saldo -= monto;
                console_1.default.log(`transaccion realizada. saldo restante: $${this.saldo}`);
            }
            this.procesarTransaccion();
        });
    }
}
const tarjeta = new TarjetaCredito();
tarjeta.iniciar();
//# sourceMappingURL=03Ejer.js.map