import { Component, OnInit } from '@angular/core';
import { Accidente } from 'src/app/models/Accidente';
import { AccidenteService } from 'src/app/services/accidente.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RecomendacionesAComponent } from './recomendaciones-a/recomendaciones-a.component';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-buscar-a',
  templateUrl: './buscar-a.component.html',
  styleUrls: ['./buscar-a.component.css']
})
export class BuscarAComponent implements OnInit {
  listAccidentes: Accidente[] = [];

  displayedColumns: string[] = ['codigo','cedula','nombre', 'edad', 'lugar', 'fecha', 'testigo', 'hospitalizacion','descripcion','acciones'];
  dataSource = new MatTableDataSource(this.listAccidentes);
  constructor(private _accidenteService: AccidenteService,
    public dialog: MatDialog,private titulo:Title) {titulo.setTitle('Informe de Accidentes') }

  //dataSource1 = new MatTableDataSource(this.dataSource);



  ngOnInit(): void {
    this.obtenerAccidentes();
  }


  obtenerAccidentes() {
    this._accidenteService.obtenerAccidentes().subscribe(doc => {
      console.log(doc);
      this.listAccidentes = doc;
      this.dataSource = new MatTableDataSource(this.listAccidentes);
    })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  abrirRecomendaciones(codigo:string,cedula:string,nombre:string,edad:string,lugar:string,fechaAccidente:string,testigo:string,hospitalizacion:string,fotografia:string,descripcion:string){
    const dialogRef=this.dialog.open(RecomendacionesAComponent, {
      width:'1000px',
      height:'1500px',
      data: {
        codigo,
        cedula,
        nombre,
        edad,
        lugar,
        fechaAccidente,
        testigo,
        hospitalizacion,
        fotografia,
        descripcion
      },
    });
    console.log(codigo, cedula, nombre, edad)
  }


}
