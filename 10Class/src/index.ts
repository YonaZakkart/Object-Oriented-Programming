// class Persona {
//     constructor(public nombre: string, public edad: number) { }
//     saludar(): void {
//         console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
//     }
// }

// let nombre: string = prompt("Ingrese su nombre") || "";
// let edad: number = Number(prompt("Ingrese su edad"));
// let persona = new Persona(nombre, edad);
// persona.saludar();

class Persona {
    nombre: string;
    edad: number;
    telefono: number;
    constructor(nombre: string,
        edad: number,
        telefono: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }
    mostrar(): void {
        alert(`
            Su nombre es: ${this.nombre}
            su edad es: ${this.edad}
            numero de telefono: ${this.telefono}`)
    }
}

let nombre: string = prompt("Ingrese su nombre") || "";
let edad: number = Number(prompt("Ingrese su edad"));
let telefono: number = Number(prompt("Ingrese su numero de telefono"))
let people = new Persona(nombre, edad, telefono);
people.mostrar();