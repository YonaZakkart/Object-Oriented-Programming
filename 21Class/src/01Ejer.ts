// Ejercicio 1: Crear un código que solicite el sueldo de una persona y si es mayor de 
// $500.00 brindar una tarjeta de crédito de $700, si es mayor a $800 una tarjeta de 
// $1100 y si es mayor de $1300 una tarjeta de $2500.

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

abstract class Persona {
    protected sueldo: number = 0;

    abstract evaluarCredito(): void;
}

class Cliente extends Persona{
    pedirSueldo(): void{
        rl.question(`Ingrese su sueldo: `, (dato) => {
            this.sueldo = parseFloat(dato)
            this.evaluarCredito();
            rl.close();
        })
    }
    evaluarCredito(): void {
        console.log(`Sueldo ingresado: $${this.sueldo}`)

        if (this.sueldo > 1300){
            console.log(`Tarjeta aprobada por 2500`)
        }else if (this.sueldo>800){
            console.log(`tarjeta aprobada por 1100`)
        }else if (this.sueldo>500){
            console.log(`Trajeta aprobada por $700`)
        } else {
            console.log(`No aplica para tarjeta de credito`)
        }
    }
}

const cliente1 = new Cliente();
cliente1.pedirSueldo()