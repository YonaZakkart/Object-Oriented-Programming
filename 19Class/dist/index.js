"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CuentaBancaria {
    constructor(saldo) {
        this._saldo = saldo;
    }
    //getter
    get saldo() {
        return this._saldo;
    }
    //setter 
    set saldo(valor) {
        if (valor < 0) {
            console.log('No se permite saldo negativo');
        }
        else {
            this._saldo = valor;
        }
    }
    //metodo para depositar
    depositar(monto) {
        if (monto > 0) {
            this._saldo += monto;
        }
    }
}
const cuenta = new CuentaBancaria(2000);
cuenta.saldo = 5000; //
cuenta.depositar(500); //
console.log(cuenta.saldo);
//# sourceMappingURL=index.js.map