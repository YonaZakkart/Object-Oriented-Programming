"use strict";
// Crear una clase abstracta Notificación con el método enviar(). El sistema debe permitir 
// enviar notificaciones por Email, SMS o WhatsApp. Cada clase implementará su forma de 
// envío. 
Object.defineProperty(exports, "__esModule", { value: true });
class Notificacion {
    constructor(destino) {
        this.destino = destino;
    }
}
class Email extends Notificacion {
    constructor(destino) {
        super(destino);
    }
    enviar(mensaje) {
        console.log(`Mensaje "${mensaje}" enviado al Email ${this.destino}`);
    }
}
class SMS extends Notificacion {
    constructor(destino) {
        super(destino);
    }
    enviar(mensaje) {
        console.log(`Mensaje "${mensaje}" enviado al Numero ${this.destino}`);
    }
}
class WhatsApp extends Notificacion {
    constructor(destino) {
        super(destino);
    }
    enviar(mensaje) {
        console.log(`Mensaje "${mensaje}" enviado al WhatsApp ${this.destino}`);
    }
}
const mensajeEmail = new Email("yona@gmail.com");
mensajeEmail.enviar("Hola");
const mensajeSMS = new SMS(12345678);
mensajeSMS.enviar("Byee");
const mensajeWhatsApp = new WhatsApp(12345678);
mensajeWhatsApp.enviar("Hi Whats");
//# sourceMappingURL=Ejercicio6.js.map