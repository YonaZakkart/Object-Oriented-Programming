"use strict";
// Crea una clase abstracta donde se solicite de manera publica el nickname de un jugador y el total de vida que es 100% en privado, Crear la clase mundo 1 que séra una clase hija, donde se creara un método aventura y en ese método se le restara el 30% de vida al jugador, Crear el metodo acuatico donde se le restara el 50% de vida y luego se le sumara el 10% y crear el método endgame donde se le restara el 50% de vida.  Cada método debe de imprimir el dato restante de vida que le quedo al jugador.  
Object.defineProperty(exports, "__esModule", { value: true });
// Ej 1
class Jugador {
    constructor(nickname, vida) {
        this.nickname = nickname;
        this.vida = vida;
    }
    get nuevoValor() {
        return this.vida;
    }
    set nuevoValor(valor) {
        if (valor >= 0) {
            this.vida = valor;
        }
        else {
            console.log(`Debe ser mayor a 0`);
        }
    }
}
class Mundo1 extends Jugador {
    constructor(nickname, vida) {
        super(nickname, vida);
    }
    mostrarInfo() {
        console.log(`
            Jugador: ${this.nickname} 
            Vida actual: ${this.nuevoValor}`);
    }
    aventura() {
        this.nuevoValor = this.nuevoValor - 30;
        console.log(`Modo aventura(-30) Vida restante: ${this.nuevoValor}`);
    }
    acuatico() {
        this.nuevoValor = this.nuevoValor - 50;
        this.nuevoValor = this.nuevoValor + 10;
        console.log(`modo acuatico (-50 y +10) Vida restante: ${this.nuevoValor}`);
    }
    endgame() {
        this.nuevoValor = this.nuevoValor - 50;
        console.log(`Modo Endgame (-50) Vida restante: ${this.nuevoValor}`);
    }
}
const jugador1 = new Mundo1("Yona", 100);
jugador1.mostrarInfo();
jugador1.aventura();
jugador1.acuatico();
jugador1.endgame();
// ejercicio 2
class Jugador2 {
    constructor(nickname) {
        this.nickname = nickname;
        this.vida = 100;
    }
    get nuevaVida() {
        return this.vida;
    }
    set nuevaVida(valor) {
        if (valor > 0) {
            this.vida = valor;
        }
        else {
            console.log("No se puede continuar");
        }
    }
    validarVida() {
        if (this.vida <= 0) {
            console.log(`La vida llegó a 0, no se puede continuar`);
            return false;
        }
        return true;
    }
}
class Mundo2 extends Jugador2 {
    constructor(nickname) {
        super(nickname);
    }
    mostrarInfo() {
        console.log(`
            Jugador: ${this.nickname} 
            Vida restante: ${this.nuevaVida}%`);
    }
    aventura() {
        this.nuevaVida = this.nuevaVida - 30;
        console.log(`Aventura -50%`);
        this.mostrarInfo();
    }
    acuatico() {
        this.nuevaVida = this.nuevaVida - 50;
        this.nuevaVida = this.nuevaVida + 10;
        console.log(`Acuatico -50% y +10%`);
        this.mostrarInfo();
    }
    endgame() {
        if (!this.validarVida())
            return;
        this.nuevaVida = this.nuevaVida - 50;
        this.mostrarInfo();
    }
}
const jugador2 = new Mundo2("Yona");
jugador2.mostrarInfo();
jugador2.aventura();
jugador2.acuatico();
jugador2.endgame();
//# sourceMappingURL=game.js.map