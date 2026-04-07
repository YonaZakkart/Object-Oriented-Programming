// 4. Modifique el ejercicio 3 a tal modo que si el POS donde se hará la transacción es Bac 
// acumule 3 puntos por cada dólar gastado, Banco Agricola 5 puntos por cada dólar y 
// otros bancos 0 puntos. Mostrar la cantidad de puntos que se va obteniendo.


import console from 'console';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

abstract class Tarjeta {
    protected saldo: number;
    protected puntos: number

    constructor(saldoInicial: number, puntosInicial: number) {
        this.saldo = saldoInicial;
        this.puntos = puntosInicial;
    }
    abstract iniciar(): void;
}

class TarjetaCredito extends Tarjeta {
    constructor() {
        super(3000, 0)
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
                rl.question(`A qué POS hará la transaccion?
                1. Bac
                2. Banco Agricola
                3. otro
                 (escriba un numero): `, (datoPOS) => {
                    const banco = parseFloat(datoPOS)
                    if (banco === 1) {
                        let calculo = monto * 3
                        this.puntos += calculo
                    } else if (banco === 2) {
                        let calculo = monto * 5
                        this.puntos += calculo
                    }

                    this.saldo -= monto;
                    console.log(`
                    transaccion realizada con exto. 
                    Saldo restante: $${this.saldo}
                    Puntos actuales: ${this.puntos}`)
                    this.procesarTransaccion();
                })

            }

        })
    }
}
const tarjeta = new TarjetaCredito();
tarjeta.iniciar();