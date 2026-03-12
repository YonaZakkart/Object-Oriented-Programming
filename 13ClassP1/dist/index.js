"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
class App {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar() {
        this.pedirDatos();
    }
    pedirDatos() {
        this.rl.question("Ingrese su nombre: ", (nombreRecibido) => {
            const nombre = nombreRecibido;
            this.rl.question("Ingrese su fecha de nacimiento (anio): ", (fechaRecibida) => {
                const fecha = Number(fechaRecibida);
                this.rl.question("Ingrese su estado familiar: ", (estadoRecibido) => {
                    const estadoFamiliar = estadoRecibido;
                    this.rl.question("Ingrese su sueldo: ", (sueldoRecibido) => {
                        const sueldo = Number(sueldoRecibido);
                        this.evaluarDatos(nombre, fecha, estadoFamiliar.toLocaleLowerCase(), sueldo);
                        this.cerrar();
                    });
                });
            });
        });
    }
    evaluarDatos(nombre, fecha, estadoFamiliar, sueldo) {
        const edad = 2026 - fecha;
        let estado = "";
        if (estadoFamiliar.toLocaleLowerCase() === "soltero") {
            estado = "Soltero";
        }
        else if (estadoFamiliar.toLocaleLowerCase() === "casado") {
            estado = "Casado";
        }
        else if (estadoFamiliar.toLocaleLowerCase() === "viudo") {
            estado = "Viudo";
        }
        this.evaluarPrestamo(nombre, edad, estado, sueldo);
    }
    evaluarPrestamo(nombre, edad, estado, sueldo) {
        let prestamo;
        if (estado === "Casado" && edad > 22 && sueldo >= 450 && sueldo <= 600) {
            prestamo = 2000;
            this.mostrar(nombre, edad, estado, sueldo, prestamo);
        }
        else if (estado === "Casado" && edad > 32 && sueldo >= 601 && sueldo <= 1000) {
            prestamo = 3000;
            this.mostrar(nombre, edad, estado, sueldo, prestamo);
        }
        else if (estado === "Soltero" && edad > 22 && sueldo >= 400 && sueldo <= 600) {
            prestamo = 2500;
            this.mostrar(nombre, edad, estado, sueldo, prestamo);
        }
        else if (estado === "Soltero" && edad > 30 && sueldo >= 601 && sueldo <= 1000) {
            prestamo = 3500;
            this.mostrar(nombre, edad, estado, sueldo, prestamo);
        }
        else if (estado === "Viudo" && edad > 35 && sueldo >= 600 && sueldo <= 1500) {
            prestamo = 4000;
            this.mostrar(nombre, edad, estado, sueldo, prestamo);
        }
        else {
            console.log(`
                No se le puede otorgar un prestamo`);
        }
    }
    mostrar(nombre, edad, estado, sueldo, prestamo) {
        console.log(`
            ${nombre}, ${estado} de ${edad} anios con un sueldo de $${sueldo}
            Se le permite otorgar el prestamo de $${prestamo}`);
    }
    cerrar() {
        this.rl.close();
    }
}
const usuario = new App();
usuario.iniciar();
//funciona, a base de fe pero si funciona :D
//# sourceMappingURL=index.js.map