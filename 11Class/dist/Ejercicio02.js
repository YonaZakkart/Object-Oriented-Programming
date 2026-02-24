"use strict";
// Desarrollar un sistema de autenticación que valide usuario, contraseña.
// Si el login es correcto, mostrar el rol al que pertenece el usuario:
// • 1 = Administrador
// • 2 = Cliente
// • 3 =1 Invitado
// Si el usuario no existe, mostrar mensaje de usuario incorrecto.
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
        this.pedirUsuario();
    }
    pedirUsuario() {
        this.rl.question("ingrese su usuario: ", (usuarioInput) => {
            const usuario = usuarioInput;
            this.rl.question("Ingrese su contrasenia: ", (passInput) => {
                const contrasenia = passInput;
                this.validarUsuario(usuario, contrasenia);
            });
        });
    }
    validarUsuario(usuario, contrasenia) {
        let user1 = "Yona";
        let pass1 = "1234";
        let rol1 = "Invitado";
        if (usuario === user1 && contrasenia === pass1) {
            console.log(`
                Inicio de sesion Exitoso!
                bienvenido: ${usuario}
                Rol: ${rol1}`);
            this.cerrar();
        }
        else {
            console.log(`
                Usuario o contrasenia no valido.
                Por favor intente nuevamente`);
            this.iniciar();
        }
    }
    cerrar() {
        this.rl.close();
    }
}
const usuario1 = new App();
usuario1.iniciar();
//# sourceMappingURL=Ejercicio02.js.map