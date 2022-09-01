export class Accidente{
    id?:string;
    codigo:string;
    cedula:string;
    nombre:string;
    edad:string;
    lugar:string;
    fechaAccidente:string;
    testigo:string;
    hospitalizacion:string;
    fotografia:string;
    descripcion:string;

    constructor(codigo:string,cedula:string,nombre:string,edad:string,lugar:string,fechaAccidente:string,testigo:string,hospitalizacion:string,fotografia:string,descripcion:string){
        this.codigo=codigo;
        this.cedula=cedula;
        this.nombre=nombre;
        this.edad=edad;
        this.lugar=lugar;
        this.fechaAccidente=fechaAccidente;
        this.testigo=testigo;
        this.hospitalizacion=hospitalizacion;
        this.fotografia=fotografia;
        this.descripcion=descripcion;

    }
}