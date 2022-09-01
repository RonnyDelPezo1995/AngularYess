import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Incidente } from 'src/app/models/Incidente';
import { IncidenteService } from 'src/app/services/incidente.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-modificarindividualincidente',
  templateUrl: './modificarindividualincidente.component.html',
  styleUrls: ['./modificarindividualincidente.component.css']
})
export class ModificarindividualincidenteComponent implements OnInit {

  selected1 = 'none'
  selected2 = 'none'
  id:string |null
  incidente?:Incidente;

  myForm: FormGroup;
  constructor(private fb:FormBuilder,
    private _incidenteService:IncidenteService,
    private aRoute: ActivatedRoute,
    public snackBar: MatSnackBar,
    private titulo:Title) { 
      this.myForm=this.fb.group({
        codigo:['',[Validators.required,Validators.maxLength(6)]],
        cedula:['',[Validators.required,Validators.minLength(10)]],
        nombre:['',Validators.required],
      edad:['',Validators.required],
          lugar:['',Validators.required],
          fechaIncidente:['',Validators.required],
          testigo:['',Validators.required],
          fotografia:['',Validators.required],
          descripcion:['',Validators.required]
      });
      this.id=this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    titulo.setTitle('Modificar Incidente')
    }

  ngOnInit(): void {
    this.esEditar();
  }
  esEditar(){
    if(this.id!=null){
      this._incidenteService.obtenerIncidente(this.id).then(response=>{
        console.log(response)
        this.incidente=response;
        this.myForm=this.fb.group({
          codigo:[this.incidente.codigo,[Validators.required,Validators.maxLength(6)]],
          cedula:[this.incidente.cedula,[Validators.required,Validators.minLength(10)]],
          nombre:[this.incidente.nombre,Validators.required],
          edad:[this.incidente.edad,Validators.required],
          lugar:[this.incidente.lugar,Validators.required],
          fechaIncidente:[this.incidente.fechaIncidente,Validators.required],
          testigo:[this.incidente.testigo,Validators.required],
          fotografia:[this.incidente.fotografia,Validators.required],
          descripcion:[this.incidente.descripcion,Validators.required]
        });
      });
      
    }
  }
obtenernuevoIncidente(){
  const incidente:Incidente={
    codigo: this.myForm.get('codigo')?.value,
    cedula: this.myForm.get('cedula')?.value,
    nombre: this.myForm.get('nombre')?.value,
    edad: this.myForm.get('edad')?.value,
    lugar: this.myForm.get('lugar')?.value,
    fechaIncidente: this.myForm.get('fechaIncidente')?.value,
    testigo: this.myForm.get('testigo')?.value,
    fotografia: this.myForm.get('fotografia')?.value,
    descripcion: this.myForm.get('descripcion')?.value
  };
  console.log(incidente);

  const response = this._incidenteService.actualizarIncidente(incidente,this.id);
  this.snackBar.open('El INCIDENTE se MODIFICO correctamente','',{
    duration:3000
  })
  this.myForm.reset();
  console.log(response);
}

}
