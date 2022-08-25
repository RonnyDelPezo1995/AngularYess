import { Component, OnInit } from '@angular/core';
import { idToken } from '@angular/fire/auth';
import { documentId } from '@angular/fire/firestore';
import { identity } from 'rxjs';
import { Accidente } from 'src/app/models/Accidente';
import { AccidenteService } from 'src/app/services/accidente.service';

@Component({
  selector: 'app-modificar-a',
  templateUrl: './modificar-a.component.html',
  styleUrls: ['./modificar-a.component.css']
})
export class ModificarAComponent implements OnInit {
  listAccidentes: Accidente[]= [];

  displayedColumns: string[] = ['codigo', 'nombre', 'tipo', 'riesgo','fecha','motivo','acciones'];
  dataSource = this.listAccidentes;
  constructor(private _accidenteService: AccidenteService) { }
  
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
