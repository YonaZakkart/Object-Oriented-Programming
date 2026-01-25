// Ejercicio 2
// Modelar un producto con información comercial y una función para mostrarla.

let producto = {
    nombre: "Telefono",
    precio: 1200,
    modelo: "GT 40",
    color: "Negro",

    mostrar(): void {
        console.log("Producto: " + this.nombre + ", precio: " + this.precio + ", modelo: " + this.modelo + ", color: " + this.color)
    }
}

producto.mostrar()