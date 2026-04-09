
// Ejercicio 1: Notificaciones
// sistema de notificaciones.
// Clase base abstracta: Notificacion con atributo: mensaje y metodo abstracto enviar(). Clases hijas: NotificacionEmail, NotificacionSms y NotificacionPush. Cada una debe implementar enviar() indicando por el que se envía el mensaje. 

abstract class Notificacion {
    mensaje: string;
    constructor(mensaje: string) {
        this.mensaje = mensaje;
    }
    abstract enviar(): void;
}

class NotificacionEmail extends Notificacion {
    override enviar(): void {
        console.log(`Email: "${this.mensaje}"`);
    }
}

class NotificacionSms extends Notificacion {
    override enviar(): void {
        console.log(`SMS: "${this.mensaje}"`);
    }
}

class NotificacionPush extends Notificacion {
    override enviar(): void {
        console.log(`Push: "${this.mensaje}"`);
    }
}

const notificaciones: Notificacion[] = [];
notificaciones.push(new NotificacionEmail("pedido confirmado"));
notificaciones.push(new NotificacionSms("codigo de verificacion: 4821"));
notificaciones.push(new NotificacionPush("Tienes un mensaje de messenger de hace 2 semanas XD"));

notificaciones.forEach(notificacion => notificacion.enviar());




// Ejercicio 2 — Reportes
// un sistema de generación de reportes. Clase abstracta: Reporte con atributo titulo y meetodo abstracto generar(). Clases hijas: ReportePDF, ReporteExcel y ReporteHTML. implementar generar() en cada una con el formato en que se exporta el reporte. con  instancias de los tres tipos

abstract class Reporte {
    titulo: string;
    constructor(titulo: string) {
        this.titulo = titulo;
    }
    abstract generar(): void;
}

class ReportePDF extends Reporte {
    override generar(): void {
        console.log(`Generando "${this.titulo}" en formato PDF`);
    }
}

class ReporteExcel extends Reporte {
    override generar(): void {
        console.log(`Generando "${this.titulo}" en formato Excel`);
    }
}

class ReporteHTML extends Reporte {
    override generar(): void {
        console.log(`Generando "${this.titulo}" en formato HTML`);
    }
}

const reportes: Reporte[] = [];
reportes.push(new ReportePDF("Trea"));
reportes.push(new ReporteExcel("Inventario"));
reportes.push(new ReporteHTML("paginaBarata"));

reportes.forEach(reporte => reporte.generar());
