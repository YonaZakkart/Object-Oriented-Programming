// Crea una clase Empleado con:
// nombre (public)
// salario (protected)
// Crea una clase hija Gerente con método bono().

class Empleado {
    constructor(
        public nombre: string,
        protected salario: number
    ) { }
}

class Gerente extends Empleado {
    bono(): number {
        if (this.salario > 1000) {
            return this.salario * 0.2;
        } else {
            return this.salario * 0.1;
        }
    }
}

const empleado1 = new Gerente("Edwin", 300);
console.log(empleado1.bono())