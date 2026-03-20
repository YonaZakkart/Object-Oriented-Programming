"use strict";
// Crear una clase abstracta Empleado con el método calcularSalario(). El sistema debe 
// permitir registrar empleados por horas, empleados fijos y empleados por comisión. Cada 
// tipo de empleado debe implementar su propio cálculo de salario.
Object.defineProperty(exports, "__esModule", { value: true });
class Empleado {
}
class EmpleadosHoras extends Empleado {
    calcularSalario(salarioPorHora, horas) {
        let salarioTotal = parseFloat(salarioPorHora) * parseFloat(horas);
        console.log(`Su salario es de: ${salarioTotal}`);
    }
}
class EmpleadosFijos extends Empleado {
    calcularSalario(salarioFijo) {
        let salarioTotal = parseFloat(salarioFijo);
        console.log(`Su salario es de: ${salarioTotal}`);
    }
}
class EmpleadosComision extends Empleado {
    calcularSalario(cantidadVentas, precioProducto) {
        let salarioTotal = parseFloat(cantidadVentas) * parseFloat(precioProducto) * 0.15;
        console.log(`Su salario es de: ${salarioTotal}`);
    }
}
const empleadoPorHoras = new EmpleadosHoras();
empleadoPorHoras.calcularSalario('2.50', '120');
const empleadoFijo = new EmpleadosFijos();
empleadoFijo.calcularSalario('400');
const empleadoComision = new EmpleadosComision();
empleadoComision.calcularSalario('2', '1000');
//# sourceMappingURL=Ejercicio4.js.map