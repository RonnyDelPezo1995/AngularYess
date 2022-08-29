import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Incidente } from 'src/app/models/Incidente';
import { IncidenteService } from 'src/app/services/incidente.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registrar-i',
  templateUrl: './registrar-i.component.html',
  styleUrls: ['./registrar-i.component.css']
})
export class RegistrarIComponent implements OnInit {

  tipos:any[]=['Físico','Mecanico','Químico','Biologico','Ergonomico','Psicosocial']

  riesgos:any[]=['Bajo','Medio','Alto']
  selected1 = 'none'
  selected2 = 'none'

  myForm: FormGroup;
  constructor(private fb:FormBuilder,
    private _incidenteService: IncidenteService,
    public snackBar: MatSnackBar) {
      this.myForm=this.fb.group({
        codigo:['',[Validators.required,Validators.maxLength(6)]],
        cedula:['',[Validators.required,Validators.minLength(10)]],
        nombre:['',Validators.required],
        tipo:['',Validators.required],
        riesgo:['',Validators.required],
        fechaIncidente:['',Validators.required],
        motivo:['',Validators.required]
      });
     }

  ngOnInit(): void {
  }

  async guardarIncidente(){
    const incidente:Incidente={
      codigo: this.myForm.get('codigo')?.value,
      cedula: this.myForm.get('cedula')?.value,
      nombre: this.myForm.get('nombre')?.value,
      tipo: this.myForm.get('tipo')?.value,
      riesgo: this.myForm.get('riesgo')?.value,
      fechaIncidente: this.myForm.get('fechaIncidente')?.value,
      motivo: this.myForm.get('motivo')?.value
    };
    console.log(incidente);
    const response = await this._incidenteService.guardarIncidente(incidente);
    this.snackBar.open('El INCIDENTE se registro correctamente','',{
      duration:3000
    })
    this.myForm.reset();
    console.log(response);
  }
}
