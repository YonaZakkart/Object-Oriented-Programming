// Ejercicio 3
// Simular una cuenta bancaria donde el saldo cambia según una acción.

let cuenta: {
    nombre: string;
    saldo: number;
} = {
    nombre: "Maria",
    saldo: 100
}

console.log("Titular: " + cuenta.nombre);
console.log("Saldo inicial: $" + cuenta.saldo);

cuenta.saldo = cuenta.saldo + 150;
console.log("Después de depositar $150: $" + cuenta.saldo);

cuenta.saldo = cuenta.saldo - 200;
console.log("Después de retirar $200: $" + cuenta.saldo);