export class Accidente{
    id?:string;
    codigo:string;
    nombre:string;
    tipo:string;
    riesgo:string;
    fechaAccidente:Date;
    motivo:string;

    constructor(codigo:string,nombre:string,tipo:string,riesgo:string,fechaAccidente:Date,motivo:string){
        this.codigo=codigo;
        this.nombre=nombre;
        this.tipo=tipo;
        this.riesgo=riesgo;
        this.fechaAccidente=fechaAccidente;
        this.motivo=motivo;
    }
}