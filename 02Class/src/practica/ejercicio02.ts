let estudiante = {
    nombre: "Smith",
    carrera: "Ingenieria en software",
    saludar(): void {
        console.log("Hola soy " + this.nombre + " soy estudiante de " + this.carrera)
    }
};

estudiante.saludar()