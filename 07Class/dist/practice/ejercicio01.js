"use strict";
// Crea una clase Usuario con:
// username (public)
// password (private)
// Agrega un método login() que valide la contraseña.
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    login(pass) {
        if (pass === this.password) {
            return `Acceso concedido, bienvenido ${this.username}`;
        }
        else {
            return "Contraseña incorrecta";
        }
    }
}
const e = new Usuario("yona", "admin123");
console.log(e.login("admin123"));
//# sourceMappingURL=ejercicio01.js.map