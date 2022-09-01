import { Component, OnInit } from '@angular/core';

import { idToken } from '@angular/fire/auth';
import { documentId } from '@angular/fire/firestore';
import { identity } from 'rxjs';
import { Incidente } from 'src/app/models/Incidente';
import { IncidenteService } from 'src/app/services/incidente.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-modificar-i',
  templateUrl: './modificar-i.component.html',
  styleUrls: ['./modificar-i.component.css']
})
export class ModificarIComponent implements OnInit {

  listIncidentes: Incidente[]= [];

  displayedColumns: string[] = ['codigo','cedula', 'nombre', 'tipo', 'riesgo','fecha','motivo','acciones'];
  dataSource = this.listIncidentes;
  constructor(private _incidenteService: IncidenteService,
    private titulo:Title) { 
      titulo.setTitle('Modificar Incidente')
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

}
