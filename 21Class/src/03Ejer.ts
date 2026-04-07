// Ejercicio 3: Desarrollar un algoritmo que permita manejar una tarjeta de crédito, que 
// cuando se inicie, el saldo sea de $3000.00 y preguntar, digite el monto de la transacción 
// e írselo restando, el programa se debe de cerrar solo si el cliente finaliza o se queda a 
// 0 la cuenta de lo contrario siempre preguntar digite el monto de la transacción. 

import console from 'console';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

abstract class Tarjeta {
    protected saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }
    abstract iniciar(): void;
}

class TarjetaCredito extends Tarjeta {
    constructor() {
        super(3000)
    }

    iniciar(): void {
        console.log(`Saldo inicial: $${this.saldo}`);
        this.procesarTransaccion();
    }

    private procesarTransaccion(): void {
        if (this.saldo <= 0) {
            console.log(`
                Saldo agotado. cuenta cerrada`);
            rl.close();
            return
        }

        rl.question(`Digite el monto de la transaccion ( 0 para salir): `, (dato) => {
            const monto = parseFloat(dato);
            if (isNaN(monto) || monto < 0) {
                console.log(`ingrese un monto valido`);
                return this.procesarTransaccion();
            }
            if (monto === 0) {
                console.log(`Operacio finalizada`);
                rl.close()
                return
            }
            if (monto > this.saldo) {
                console.log(`Saldo insuficiente`);
            } else {
                this.saldo -= monto;
                console.log(`transaccion realizada. saldo restante: $${this.saldo}`)
            }
            this.procesarTransaccion();
        })
    }
}
const tarjeta = new TarjetaCredito();
tarjeta.iniciar();