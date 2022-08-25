import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Incidente } from 'src/app/models/Incidente';
import { IncidenteService } from 'src/app/services/incidente.service';

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
    public snackBar: MatSnackBar) { 
      this.myForm=this.fb.group({
        codigo:['',[Validators.required,Validators.maxLength(6)]],
        nombre:['',Validators.required],
        tipo:['',Validators.required],
        riesgo:['',Validators.required],
        fechaIncidente:['',Validators.required],
        motivo:['',Validators.required]
      });
      this.id=this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
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
          nombre:[this.incidente.nombre,Validators.required],
          tipo:[this.incidente.tipo,Validators.required],
          riesgo:[this.incidente.riesgo,Validators.required],
          fechaIncidente:[this.incidente.fechaIncidente,Validators.required],
          motivo:[this.incidente.motivo,Validators.required]
        });
      });
      
    }
  }
obtenernuevoIncidente(){
  const incidente:Incidente={
    codigo: this.myForm.get('codigo')?.value,
    nombre: this.myForm.get('nombre')?.value,
    tipo: this.myForm.get('tipo')?.value,
    riesgo: this.myForm.get('riesgo')?.value,
    fechaIncidente: this.myForm.get('fechaIncidente')?.value,
    motivo: this.myForm.get('motivo')?.value
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
