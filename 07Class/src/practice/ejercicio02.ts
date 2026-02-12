// Crea una clase Producto con:
// nombre (public)
// precio (private)
// Método evaluarPrecio():
// Menor a 10 → "Producto barato"
// Entre 10 y 50 → "Precio normal"
// Mayor a 50 → "Producto caro"

class Producto {
    constructor(
        public nombre: string,
        private precio: number
    ) { }

    evaluarPrecio(): string {
        if (this.precio < 10) {
            return "Producto barato";
        } else if (this.precio <= 50) {
            return "Precio normal";
        } else {
            return "Producto caro";
        }
    }
}

const e = new Producto("smartphone", 300);
console.log(e.evaluarPrecio())