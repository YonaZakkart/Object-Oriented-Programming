// Crea una clase abstracta donde se solicite de manera publica el nickname de un jugador y el total de vida que es 100% en privado, Crear la clase mundo 1 que séra una clase hija, donde se creara un método aventura y en ese método se le restara el 30% de vida al jugador, Crear el metodo acuatico donde se le restara el 50% de vida y luego se le sumara el 10% y crear el método endgame donde se le restara el 50% de vida.  Cada método debe de imprimir el dato restante de vida que le quedo al jugador.  


// Ej 1

abstract class Jugador {
    public nickname: string;
    private vida: number;

    constructor(nickname: string, vida: number) {
        this.nickname = nickname;
        this.vida = vida;
    }

    get nuevoValor(): number {
        return this.vida;
    }

    set nuevoValor(valor: number) {
        if (valor >= 0) {
            this.vida = valor;
        } else {
            console.log(`Debe ser mayor a 0`);
        }
    }

    abstract mostrarInfo(): void;
}

class Mundo1 extends Jugador {
    constructor(nickname: string, vida: number) {
        super(nickname, vida);
    }

    mostrarInfo(): void {
        console.log(`
            Jugador: ${this.nickname} 
            Vida actual: ${this.nuevoValor}`);
    }

    aventura(): void {
        this.nuevoValor = this.nuevoValor - 30;
        console.log(`Modo aventura(-30) Vida restante: ${this.nuevoValor}`);
    }

    acuatico(): void {
        this.nuevoValor = this.nuevoValor - 50;
        this.nuevoValor = this.nuevoValor + 10;
        console.log(`modo acuatico (-50 y +10) Vida restante: ${this.nuevoValor}`);
    }

    endgame(): void {
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

abstract class Jugador2 { //NOTA; trabaje con abstractas y ya no me da tiempo de cambiarlo, tecnicamente funciona, mas o menos
    public nickname: string;
    private vida: number;

    constructor(nickname: string) {
        this.nickname = nickname;
        this.vida = 100;
    }

    get nuevaVida(): number {
        return this.vida;
    }

    set nuevaVida(valor: number) {
        if (valor > 0) {
            this.vida = valor;
        } else {
            console.log("No se puede continuar");
        }
    }

    validarVida(): boolean {
        if (this.vida <= 0) {
            console.log(`La vida llegó a 0, no se puede continuar`);
            return false;
        }
        return true;
    }

    abstract mostrarInfo(): void;
    abstract aventura(): void;
    abstract acuatico(): void;
    abstract endgame(): void;
}

class Mundo2 extends Jugador2 {
    constructor(nickname: string) {
        super(nickname);
    }

    mostrarInfo(): void {
        console.log(`
            Jugador: ${this.nickname} 
            Vida restante: ${this.nuevaVida}%`);
    }

    aventura(): void {
        this.nuevaVida = this.nuevaVida - 30;
        console.log(`Aventura -50%`);
        this.mostrarInfo()
    }

    acuatico(): void {
        this.nuevaVida = this.nuevaVida - 50;
        this.nuevaVida = this.nuevaVida + 10;
        console.log(`Acuatico -50% y +10%`);
        this.mostrarInfo()
    }

    endgame(): void {
        if (!this.validarVida()) return;
        this.nuevaVida = this.nuevaVida - 50;

        this.mostrarInfo();
    }
}

const jugador2 = new Mundo2("Yona");
jugador2.mostrarInfo()
jugador2.aventura();
jugador2.acuatico();
jugador2.endgame();