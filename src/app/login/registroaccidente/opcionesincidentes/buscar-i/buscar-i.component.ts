import { Component, OnInit } from '@angular/core';
import { Incidente } from 'src/app/models/Incidente';
import { IncidenteService } from 'src/app/services/incidente.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RecomendacionesIComponent } from './recomendaciones-i/recomendaciones-i.component';


@Component({
  selector: 'app-buscar-i',
  templateUrl: './buscar-i.component.html',
  styleUrls: ['./buscar-i.component.css']
})
export class BuscarIComponent implements OnInit {

  listIncidentes: Incidente[] = [];

  displayedColumns: string[] = ['codigo', 'nombre', 'tipo', 'riesgo', 'fecha', 'motivo', 'acciones'];
  dataSource = new MatTableDataSource(this.listIncidentes);
  constructor(private _incidenteService: IncidenteService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obtenerIncidentes();
  }
  obtenerIncidentes() {
    this._incidenteService.obtenerIncidentes().subscribe(doc => {
      console.log(doc);
      this.listIncidentes = doc;
      this.dataSource = new MatTableDataSource(this.listIncidentes);
    })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  abrirRecomendaciones(tipo:string){
    const dialogRef=this.dialog.open(RecomendacionesIComponent, {
      width:'350px',
      data: {
        tipo
      },
    });
    console.log(tipo)
  }

}
