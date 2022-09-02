import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Accidente } from 'src/app/models/Accidente';
import { AccidenteService } from 'src/app/services/accidente.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-modificarindividualaccidente',
  templateUrl: './modificarindividualaccidente.component.html',
  styleUrls: ['./modificarindividualaccidente.component.css']
})
export class ModificarindividualaccidenteComponent implements OnInit {
  selected1 = 'none'
  selected2 = 'none'
  id:string |null
  accidente?:Accidente;
  @Input() listCodigos:any;

  myForm: FormGroup;
  constructor(private fb:FormBuilder,
    private _accidenteService:AccidenteService,
    private aRoute: ActivatedRoute,
    public snackBar: MatSnackBar,
    private titulo:Title) {
    this.myForm=this.fb.group({
      codigo:['',[Validators.required,Validators.maxLength(6)]],
      cedula:['',[Validators.required,Validators.minLength(10)]],
      nombre:['',Validators.required],
      edad:['',Validators.required],
          lugar:['',Validators.required],
          fechaAccidente:['',Validators.required],
          testigo:['',Validators.required],
          hospitalizacion:['',Validators.required],
          fotografia:['',Validators.required],
          descripcion:['',Validators.required],
          cargo:['',Validators.required]
    });
    this.id=this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    titulo.setTitle('Modificar Accidente')
    console.log(this.listCodigos,'Se imprime')
   }

  ngOnInit(): void {
    this.esEditar();
  }
  esEditar(){
    if(this.id!=null){
      this._accidenteService.obtenerAccidente(this.id).then(response=>{
        console.log(response)
        this.accidente=response;
        this.myForm=this.fb.group({
          codigo:[this.accidente.codigo,[Validators.required,Validators.maxLength(6)]],
          cedula:[this.accidente.cedula,[Validators.required,Validators.minLength(10)]],
          nombre:[this.accidente.nombre,Validators.required],
          edad:[this.accidente.edad,Validators.required],
          lugar:[this.accidente.lugar,Validators.required],
          fechaAccidente:[this.accidente.fechaAccidente,Validators.required],
          testigo:[this.accidente.testigo,Validators.required],
          hospitalizacion:[this.accidente.hospitalizacion,Validators.required],
          fotografia:[this.accidente.fotografia,Validators.required],
          descripcion:[this.accidente.descripcion,Validators.required],
          cargo:[this.accidente.cargo,Validators.required]
        });
      });
      
    }
  }
obtenernuevoAccidente(){
  const accidente:Accidente={
    codigo: this.myForm.get('codigo')?.value,
    cedula:this.myForm.get('cedula')?.value,
    nombre: this.myForm.get('nombre')?.value,
    edad: this.myForm.get('edad')?.value,
    lugar: this.myForm.get('lugar')?.value,
    fechaAccidente: this.myForm.get('fechaAccidente')?.value,
    testigo: this.myForm.get('testigo')?.value,
    hospitalizacion: this.myForm.get('hospitalizacion')?.value,
    fotografia: this.myForm.get('fotografia')?.value,
    descripcion: this.myForm.get('descripcion')?.value,
    cargo:this.myForm.get('cargo')?.value
  };
  console.log(accidente);

  
  const response = this._accidenteService.actualizarAccidente(accidente,this.id);
  this.snackBar.open('El ACCIDENTE se MODIFICO correctamente','',{
    duration:3000
  })
  this.myForm.reset();
  console.log(response);
}



}
