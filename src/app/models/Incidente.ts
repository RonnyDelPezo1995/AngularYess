export class Incidente{
    id?:string;
    codigo:string;
    nombre:string;
    tipo:string;
    riesgo:string;
    fechaIncidente:string;
    motivo:string;

    constructor(codigo:string,nombre:string,tipo:string,riesgo:string,fechaIncidente:string,motivo:string){
        this.codigo=codigo;
        this.nombre=nombre;
        this.tipo=tipo;
        this.riesgo=riesgo;
        this.fechaIncidente=fechaIncidente;
        this.motivo=motivo;
    }
}