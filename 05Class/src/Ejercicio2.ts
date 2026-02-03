// EJERCICIO 2.
// Un ing. Eléctrico solicita un programa que calcule conversiones de temperatura 
// para el airea de refrigeración donde se trabaja con instalación y mantenimiento 
// de aire acondicionados. El cliente solicita que el usuario coloque la temperatura 
// y la escala y permita hacer diferentes conversiones como 
// Fahrenheit – Celsius. 
// Celsius – Fahrenheit. 
// Kelvin – Fahrenheit. 
// Kelvin – Celsius. 

class Conversor {
    temp: number;
    constructor(temp: number) {
        this.temp = temp
    }
    public FC(): void {
        let celsius
        celsius = (this.temp - 32) * 5 / 9
        console.log(`${this.temp}°F son ${celsius}° grados celsius`)
    }

    public CF(): void {
        let fahrenheit
        fahrenheit = (this.temp * 9 / 5) + 32
        console.log(`${this.temp}°C son ${fahrenheit}° grados Fahrenheit`)
    }

    public KF(): void {
        let fahrenheit
        fahrenheit = (this.temp - 273.15) * 9 / 5 + 32
        console.log(`${this.temp}°K son ${fahrenheit}° grados Fahrenheit`)
    }

    public KC(): void {
        let celsius
        celsius = this.temp - 273.15
        console.log(`${this.temp}°C son ${celsius}° grados Kelvin`)
    }
}

let cliente = new Conversor(23)
cliente.FC()
cliente.CF()
cliente.KF()
cliente.KC()