import { Component, OnInit } from '@angular/core';

import { Incidente } from 'src/app/models/Incidente';
import { IncidenteService } from 'src/app/services/incidente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-eliminar-i',
  templateUrl: './eliminar-i.component.html',
  styleUrls: ['./eliminar-i.component.css']
})
export class EliminarIComponent implements OnInit {
  listIncidentes: Incidente[]= [];

  displayedColumns: string[] = ['codigo', 'nombre', 'tipo', 'riesgo','fecha','motivo','acciones'];
  dataSource = this.listIncidentes;
  constructor(private _incidenteService: IncidenteService,public snackBar: MatSnackBar,
    private titulo:Title) { 
      titulo.setTitle('Eliminar Incidente')
    }

  ngOnInit(): void {
    this.obtenerIncidentes();
  }
  obtenerIncidentes(){
    this._incidenteService.obtenerIncidentes().subscribe(doc=>{
      
      console.log(doc);
      this.listIncidentes=doc;
      
      this.dataSource=this.listIncidentes;
    })
  }
  async borrarIncidente(incidente:Incidente){
    console.log(incidente);
    const response=await this._incidenteService.borrarAccidente(incidente);
    this.snackBar.open('El INCIDENTE se ELIMINO correctamente','',{
      duration:3000
    })
    console.log(response);
  }
}
