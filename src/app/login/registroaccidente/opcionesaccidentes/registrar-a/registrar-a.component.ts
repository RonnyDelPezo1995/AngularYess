import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Accidente } from 'src/app/models/Accidente';
import { AccidenteService } from 'src/app/services/accidente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

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
    public snackBar: MatSnackBar,
    private titulo: Title) {
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
    titulo.setTitle('Registrar Accidente')
   }

  ngOnInit(): void {
  }
  async guardarAccidente(){
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
      cargo: this.myForm.get('cargo')?.value
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
