import { Component, OnInit } from '@angular/core';
import { Accidente } from 'src/app/models/Accidente';
import { AccidenteService } from 'src/app/services/accidente.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-eliminar-a',
  templateUrl: './eliminar-a.component.html',
  styleUrls: ['./eliminar-a.component.css']
})
export class EliminarAComponent implements OnInit {
  listAccidentes: Accidente[]= [];

  displayedColumns: string[] = ['codigo', 'nombre', 'tipo', 'riesgo','fecha','motivo','acciones'];
  dataSource = this.listAccidentes;
  constructor(private _accidenteService: AccidenteService,public snackBar: MatSnackBar,private titulo:Title) { titulo.setTitle('Eliminar Accidente')}

  ngOnInit(): void {
    this.obtenerAccidentes();
  }

  obtenerAccidentes(){
    this._accidenteService.obtenerAccidentes().subscribe(doc=>{
      
      console.log(doc);
      this.listAccidentes=doc;
      
      this.dataSource=this.listAccidentes;
    })
  }
  async borrarAccidente(accidente:Accidente){
    console.log(accidente);
    const response=await this._accidenteService.borrarAccidente(accidente);
    this.snackBar.open('El ACCIDENTE se ELIMINO correctamente','',{
      duration:3000
    })
    console.log(response);
  }
}
