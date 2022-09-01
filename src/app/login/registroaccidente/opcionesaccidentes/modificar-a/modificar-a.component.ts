import { Component, OnInit } from '@angular/core';
import { idToken } from '@angular/fire/auth';
import { documentId } from '@angular/fire/firestore';
import { identity } from 'rxjs';
import { Accidente } from 'src/app/models/Accidente';
import { AccidenteService } from 'src/app/services/accidente.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-modificar-a',
  templateUrl: './modificar-a.component.html',
  styleUrls: ['./modificar-a.component.css']
})
export class ModificarAComponent implements OnInit {
  listAccidentes: Accidente[]= [];

  displayedColumns: string[] = ['codigo','cedula','nombre', 'tipo', 'riesgo','fecha','motivo','acciones'];
  dataSource = this.listAccidentes;
  constructor(private _accidenteService: AccidenteService,private titulo:Title) {titulo.setTitle('Modificar Accidente') }
  
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


}
