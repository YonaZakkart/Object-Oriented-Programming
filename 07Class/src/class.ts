//1
// class Usuario {
//     public nombre: string;

//     constructor(nombre: string) {
//         this.nombre = nombre;
//     }
// }

// const u = new Usuario("Juan");
// console.log(u.nombre);

//2
// class Usuario {
//     private password: string;

//     constructor(pass: string) {
//         this.password = pass;
//     }
//     validar(pass: string): boolean {
//         return this.password === pass;
//     }
// }
// const u = new Usuario("1234");
// console.log(u.validar("1234"));

//3
class Persona {
    protected edad: number;

    constructor(edad: number) {
        this.edad = edad;
    }
}
class Estudiante extends Persona {
    mostrarEdad() {
        return (this.edad)
    }
}

const e = new Estudiante(20);
console.log(e.mostrarEdad());