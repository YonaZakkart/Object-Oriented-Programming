import * as readline from "readline";
class App {
    private rl: readline.Interface;
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar(): void {
        this.pedirDatos()
    }
    pedirDatos(): void {
        this.rl.question("Ingrese su nombre: ", (nombreRecibido: string) => {
            const nombre = nombreRecibido
            this.rl.question("Ingrese su fecha de nacimiento (anio): ", (fechaRecibida: string) => {
                const fecha = Number(fechaRecibida)
                this.rl.question("Ingrese su estado familiar: ", (estadoRecibido: string) => {
                    const estadoFamiliar = estadoRecibido
                    this.rl.question("Ingrese su sueldo: ", (sueldoRecibido: string) => {
                        const sueldo = Number(sueldoRecibido)
                        this.evaluarDatos(nombre, fecha, estadoFamiliar.toLocaleLowerCase(), sueldo)
                        this.cerrar()
                    })
                })
            })
        })
    }
    evaluarDatos(nombre: string, fecha: number, estadoFamiliar: string, sueldo: number): void {
        const edad = 2026 - fecha
        let estado = ""
        if (estadoFamiliar.toLocaleLowerCase() === "soltero") {
            estado = "Soltero"
        } else if (estadoFamiliar.toLocaleLowerCase() === "casado") {
            estado = "Casado"
        } else if (estadoFamiliar.toLocaleLowerCase() === "viudo") {
            estado = "Viudo"
        }

        this.evaluarPrestamo(nombre, edad, estado, sueldo)
    }

    evaluarPrestamo(nombre: string, edad: number, estado: string, sueldo: number): void {
        let prestamo
        if (estado === "Casado" && edad > 22 && sueldo >= 450 && sueldo <= 600) {
            prestamo = 2000
            this.mostrar(nombre, edad, estado, sueldo, prestamo)
        } else if (estado === "Casado" && edad > 32 && sueldo >= 601 && sueldo <= 1000) {
            prestamo = 3000
            this.mostrar(nombre, edad, estado, sueldo, prestamo)
        } else if (estado === "Soltero" && edad > 22 && sueldo >= 400 && sueldo <= 600) {
            prestamo = 2500
            this.mostrar(nombre, edad, estado, sueldo, prestamo)
        } else if (estado === "Soltero" && edad > 30 && sueldo >= 601 && sueldo <= 1000) {
            prestamo = 3500
            this.mostrar(nombre, edad, estado, sueldo, prestamo)
        } else if (estado === "Viudo" && edad > 35 && sueldo >= 600 && sueldo <= 1500) {
            prestamo = 4000
            this.mostrar(nombre, edad, estado, sueldo, prestamo)
        } else {
            console.log(`
                No se le puede otorgar un prestamo`)
        }
    }
    mostrar(nombre: string, edad: number, estado: string, sueldo: number, prestamo: number): void {
        console.log(`
            ${nombre}, ${estado} de ${edad} anios con un sueldo de $${sueldo}
            Se le permite otorgar el prestamo de $${prestamo}`)
    }
    cerrar(): void {
        this.rl.close()
    }
}

const usuario = new App()
usuario.iniciar()
//funciona, a base de fe pero si funciona :D