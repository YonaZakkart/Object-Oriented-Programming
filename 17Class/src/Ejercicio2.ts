abstract class Vehiculo {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre
    }

    abstract mover(): void;
}

class Carro extends Vehiculo {
    mover(): void {
        console.log(`El Carro avanza a 80km/h`)
    }
}
class Bicicleta extends Vehiculo {
    mover(): void {
        console.log(`la bicicleta avanza a 20km/h`)
    }
}

class Moto extends Vehiculo {
    mover(): void {
        console.log(`la moto se desplaza a 60km/h`)
    }
}

const auto = new Carro("Honda")
auto.mover()

const moto = new Moto("Honda")
moto.mover()