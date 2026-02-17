// EJERCICIO 3.
//  si es 0 a 2 años = bebe , mayor de 2 a 10 es niño/niña, mayor de 10 a 14 = pre
// adolescente, mayor de 14 a 17 = adolescente, mayor e igual a 18 a 30= joven, mayor de
// 30 a 50 = adulto, de 50 en adelante = adulto mayor.

class Calculo {
    fecha:number;
    constructor(fecha:number){
        this.fecha=fecha
    }
    public calcularEdad():void{
        let edad = 2026 - this.fecha
        let estado
        if (edad >=0 && edad <2){
            estado = "bebe"
        } else if(edad >= 2 && edad < 10){
            estado = "ninio/ninia"
        } else if(edad >= 10 && edad < 14){
            estado = "Pre adolecente"
        } else if(edad >=14 && edad<=17){
            estado= "adolecente"
        } else if(edad>=18 && edad <30){
            estado= "joven"
        } else if(edad>=30 && edad <50){
            estado= "adulto"
        } else if(edad>=50){
            estado ="adulto mayor"
        }

    console.log(`
        anio de nacimiento: ${this.fecha}
        edad calculada: ${edad}
        estado: ${estado}`)
    }

}
                    //se ingresaa el anio de nacmiento
let persona1 = new Calculo(2005)
persona1.calcularEdad()