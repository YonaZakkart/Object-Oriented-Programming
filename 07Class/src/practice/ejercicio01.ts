// Crea una clase Usuario con:
// username (public)
// password (private)
// Agrega un método login() que valide la contraseña.

class Usuario {
    public username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    login(pass: string): string {
        if (pass === this.password) {
            return `Acceso concedido, bienvenido ${this.username}`;
        } else {
            return "Contraseña incorrecta";
        }
    }
}

const e = new Usuario("yona", "admin123");
console.log(e.login("admin123"))
