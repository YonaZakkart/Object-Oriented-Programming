"use strict";
// 4. Modifique el ejercicio 3 a tal modo que si el POS donde se hará la transacción es Bac 
// acumule 3 puntos por cada dólar gastado, Banco Agricola 5 puntos por cada dólar y 
// otros bancos 0 puntos. Mostrar la cantidad de puntos que se va obteniendo.
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
    puntos;
    constructor(saldoInicial, puntosInicial) {
        this.saldo = saldoInicial;
        this.puntos = puntosInicial;
    }
}
class TarjetaCredito extends Tarjeta {
    constructor() {
        super(3000, 0);
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
                rl.question(`A qué POS hará la transaccion?
                1. Bac
                2. Banco Agricola
                3. otro
                 (escriba un numero): `, (datoPOS) => {
                    const banco = parseFloat(datoPOS);
                    if (banco === 1) {
                        let calculo = monto * 3;
                        this.puntos += calculo;
                    }
                    else if (banco === 2) {
                        let calculo = monto * 5;
                        this.puntos += calculo;
                    }
                    this.saldo -= monto;
                    console_1.default.log(`
                    transaccion realizada con exto. 
                    Saldo restante: $${this.saldo}
                    Puntos actuales: ${this.puntos}`);
                    this.procesarTransaccion();
                });
            }
        });
    }
}
const tarjeta = new TarjetaCredito();
tarjeta.iniciar();
//# sourceMappingURL=04Ejer.js.map