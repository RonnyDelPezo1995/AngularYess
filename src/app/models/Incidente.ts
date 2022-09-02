export class Incidente{
    id?:string;
    codigo:string;
    cedula:string;
    nombre:string;
    edad:string;
    lugar:string;
    fechaIncidente:string;
    testigo:string;
    fotografia:string;
    descripcion:string;
    cargo:string;

    constructor(codigo:string,cedula:string,nombre:string,edad:string,lugar:string,fechaIncidente:string,
        testigo:string,fotografia:string,descripcion:string,cargo:string){
        this.codigo=codigo;
        this.cedula=cedula;
        this.nombre=nombre;
        this.edad=edad;
        this.lugar=lugar;
        this.fechaIncidente=fechaIncidente;
        this.testigo=testigo;
        this.fotografia=fotografia;
        this.descripcion=descripcion;
        this.cargo=cargo;
    }
}