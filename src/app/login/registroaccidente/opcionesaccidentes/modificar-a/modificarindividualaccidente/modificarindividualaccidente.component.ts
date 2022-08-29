import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Accidente } from 'src/app/models/Accidente';
import { AccidenteService } from 'src/app/services/accidente.service';

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

  myForm: FormGroup;
  constructor(private fb:FormBuilder,
    private _accidenteService:AccidenteService,
    private aRoute: ActivatedRoute,
    public snackBar: MatSnackBar) {
    this.myForm=this.fb.group({
      codigo:['',[Validators.required,Validators.maxLength(6)]],
      cedula:['',[Validators.required,Validators.minLength(10)]],
      nombre:['',Validators.required],
      tipo:['',Validators.required],
      riesgo:['',Validators.required],
      fechaAccidente:['',Validators.required],
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
      this._accidenteService.obtenerAccidente(this.id).then(response=>{
        console.log(response)
        this.accidente=response;
        this.myForm=this.fb.group({
          codigo:[this.accidente.codigo,[Validators.required,Validators.maxLength(6)]],
          cedula:[this.accidente.cedula,[Validators.required,Validators.minLength(10)]],
          nombre:[this.accidente.nombre,Validators.required],
          tipo:[this.accidente.tipo,Validators.required],
          riesgo:[this.accidente.riesgo,Validators.required],
          fechaAccidente:[this.accidente.fechaAccidente,Validators.required],
          motivo:[this.accidente.motivo,Validators.required]
        });
      });
      
    }
  }
obtenernuevoAccidente(){
  const accidente:Accidente={
    codigo: this.myForm.get('codigo')?.value,
    cedula:this.myForm.get('cedula')?.value,
    nombre: this.myForm.get('nombre')?.value,
    tipo: this.myForm.get('tipo')?.value,
    riesgo: this.myForm.get('riesgo')?.value,
    fechaAccidente: this.myForm.get('fechaAccidente')?.value,
    motivo: this.myForm.get('motivo')?.value
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
