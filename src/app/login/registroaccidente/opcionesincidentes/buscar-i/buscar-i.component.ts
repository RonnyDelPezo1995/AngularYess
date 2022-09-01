import { Component, OnInit } from '@angular/core';
import { Incidente } from 'src/app/models/Incidente';
import { IncidenteService } from 'src/app/services/incidente.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RecomendacionesIComponent } from './recomendaciones-i/recomendaciones-i.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-buscar-i',
  templateUrl: './buscar-i.component.html',
  styleUrls: ['./buscar-i.component.css']
})
export class BuscarIComponent implements OnInit {

  listIncidentes: Incidente[] = [];

  displayedColumns: string[] = ['codigo','cedula','nombre', 'edad', 'lugar', 'fecha', 'testigo','descripcion','acciones'];;
  dataSource = new MatTableDataSource(this.listIncidentes);
  constructor(private _incidenteService: IncidenteService,
    public dialog: MatDialog,
    private titulo:Title) {
      titulo.setTitle('Informes de Incidentes')
     }

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
  abrirRecomendaciones(codigo:string,cedula:string,nombre:string,edad:string,lugar:string,fechaIncidente:string,testigo:string,fotografia:string,descripcion:string){
    const dialogRef=this.dialog.open(RecomendacionesIComponent, {
      width:'1000px',
      height:'1500px',
      data: {
        codigo,
        cedula,
        nombre,
        edad,
        lugar,
        fechaIncidente,
        testigo,
        fotografia,
        descripcion
      },
    });
    console.log(codigo,cedula)
  }

}
