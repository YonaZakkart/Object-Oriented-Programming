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
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, telefono) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }
    Persona.prototype.mostrar = function () {
        alert("\n            Su nombre es: ".concat(this.nombre, "\n            su edad es: ").concat(this.edad, "\n            numero de telefono: ").concat(this.telefono));
    };
    return Persona;
}());
var nombre = prompt("Ingrese su nombre") || "";
var edad = Number(prompt("Ingrese su edad"));
var telefono = Number(prompt("Ingrese su numero de telefono"));
var people = new Persona(nombre, edad, telefono);
people.mostrar();
