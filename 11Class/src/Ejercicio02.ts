// Desarrollar un sistema de autenticación que valide usuario, contraseña.
// Si el login es correcto, mostrar el rol al que pertenece el usuario:
// • 1 = Administrador
// • 2 = Cliente
// • 3 =1 Invitado
// Si el usuario no existe, mostrar mensaje de usuario incorrecto.

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
        this.pedirUsuario();
    }
    pedirUsuario(): void {
        this.rl.question("ingrese su usuario: ", (usuarioInput: string) => {
            const usuario = usuarioInput;
            this.rl.question("Ingrese su contrasenia: ", (passInput: string) => {
                const contrasenia = passInput;
                this.validarUsuario(usuario, contrasenia)
            })
        })
    }
    validarUsuario(usuario: string, contrasenia: string): void {
        let user1 = "Yona"
        let pass1 = "1234"
        let rol1 = "Invitado"

        if (usuario === user1 && contrasenia === pass1) {
            console.log(`
                Inicio de sesion Exitoso!
                bienvenido: ${usuario}
                Rol: ${rol1}`)
            this.cerrar();
        } else {
            console.log(`
                Usuario o contrasenia no valido.
                Por favor intente nuevamente`)
            this.iniciar()
        }
    }
    cerrar(): void {
        this.rl.close();
    }
}

const usuario1 = new App();
usuario1.iniciar()
