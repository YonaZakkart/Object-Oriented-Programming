// EJERCICIO 4.
// Se solicita configurar un programa que según las siguientes faltas se imponga 
// una sanción económica dentro de una institución estudiantil privada. 
// • Llegada tardía $1. 
// • Caminar por los pasillos en horas de clase $3. 
// • No andar vestimenta apropiada $5. 
// • No hacer uso adecuado de las instalaciones $10. 
// • Si el estudiante comete una infracción mostrar un mensaje con el nombre y la 
// infracción más el total que le corresponde cancelar

class instituto {
    nombre: string;
    falta: number;
    constructor(nombre: string, falta: number) {
        this.nombre = nombre;
        this.falta = falta;
    }

    public infraccion(): void {
        let sansion
        let falta
        if (this.falta == 1) {
            falta = "Llegada tardía"
            sansion = 1
        } else if (this.falta == 2) {
            falta = "Caminar por los pasillos en horas de clase"
            sansion = 3
        } else if (this.falta == 3) {
            falta = "No andar vestimenta apropiada"
            sansion = 5
        } else if (this.falta == 4) {
            falta = "No hacer uso adecuado de las instalaciones"
            sansion = 10
        }

        console.log(`
            Nombre: ${this.nombre}
            Infraccion: ${this.falta} (${falta})
            Sansion: $${sansion}`)
    }
}

let estudiante = new instituto("Juan", 4);
estudiante.infraccion()