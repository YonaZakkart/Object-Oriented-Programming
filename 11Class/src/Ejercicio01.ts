// Desarrollar una aplicación en consola que permita ingresar la nota de un
// estudiante y determinar su estado académico.
// Usar if / else if para clasificar:
// • 9 – 10 = Excelente
// • 7 – 8.9 = Bueno
// • 6 – 6.9 = Regular
// • Menor a 6 = Reprobado

import * as readline from "readline";
class AppNotas {
    private rl: readline.Interface;
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar(): void {
        this.pedirNota();
    }
    pedirNota(): void {
        this.rl.question("ingrese su nota: ", (respuesta: string) => {
            const nota = Number(respuesta);
            this.evaluarNota(nota)
            this.cerrar();
        })
    }
    evaluarNota(nota: number): void {
        if (nota >= 0 && nota < 6) {
            console.log("Estado: Reprobado")
        } else if (nota >= 6 && nota < 7) {
            console.log("Estado: Regular")
        } else if (nota >= 7 && nota < 9) {
            console.log("Estado: Bueno")
        } else if (nota >= 9 && nota <= 10) {
            console.log("Estado: Exelente!!")
        } else {
            console.log("Ingrese una nota valida")
        }
    }
    cerrar(): void {
        this.rl.close();
    }
}
const estudiante = new AppNotas();
estudiante.iniciar()