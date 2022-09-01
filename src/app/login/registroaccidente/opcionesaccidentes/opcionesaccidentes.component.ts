import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-opcionesaccidentes',
  templateUrl: './opcionesaccidentes.component.html',
  styleUrls: ['./opcionesaccidentes.component.css']
})
export class OpcionesaccidentesComponent implements OnInit {

  constructor(private titulo:Title) {titulo.setTitle('Opciones Accidentes')}

  ngOnInit(): void {
  }

}
