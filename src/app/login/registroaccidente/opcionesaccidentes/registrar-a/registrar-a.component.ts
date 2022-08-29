import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Accidente } from 'src/app/models/Accidente';
import { AccidenteService } from 'src/app/services/accidente.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registrar-a',
  templateUrl: './registrar-a.component.html',
  styleUrls: ['./registrar-a.component.css']
})
export class RegistrarAComponent implements OnInit {
  tipos:any[]=['Físico','Mecanico','Químico','Biologico','Ergonomico','Psicosocial']

  riesgos:any[]=['Bajo','Medio','Alto']
  selected1 = 'none'
  selected2 = 'none'

  myForm: FormGroup;
  constructor(private fb:FormBuilder,
    private _accidenteService: AccidenteService,
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
   }

  ngOnInit(): void {
  }
  async guardarAccidente(){
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
    const response = await this._accidenteService.guardarAccidente(accidente);
    this.snackBar.open('El ACCIDENTE se registro correctamente','',{
      duration:3000
    })
    this.myForm.reset();
    console.log(response);
  }

  
}
