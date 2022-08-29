export class Accidente{
    id?:string;
    codigo:string;
    cedula:string;
    nombre:string;
    tipo:string;
    riesgo:string;
    fechaAccidente:string;
    motivo:string;

    constructor(codigo:string,cedula:string,nombre:string,tipo:string,riesgo:string,fechaAccidente:string,motivo:string){
        this.codigo=codigo;
        this.cedula=cedula;
        this.nombre=nombre;
        this.tipo=tipo;
        this.riesgo=riesgo;
        this.fechaAccidente=fechaAccidente;
        this.motivo=motivo;
    }
}