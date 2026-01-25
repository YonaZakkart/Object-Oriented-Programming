//Ejercicio  1
// Representar una persona con datos básicos y una acción que describe quién
// es.

let persona = {
    nombre: "Yona",
    edad: 21,
    altura: 170,
    peso: 75,
    profesion: "Estudiante",
    carrera: "Ingenieria e Software",

    saludar(): void {
        console.log("Hola soy " + this.nombre + ", tengo " + this.edad + " anios, soy " + this.profesion + " de " + this.carrera)
    }
}

persona.saludar()