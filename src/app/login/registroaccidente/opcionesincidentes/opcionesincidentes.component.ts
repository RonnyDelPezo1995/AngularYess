import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-opcionesincidentes',
  templateUrl: './opcionesincidentes.component.html',
  styleUrls: ['./opcionesincidentes.component.css']
})
export class OpcionesincidentesComponent implements OnInit {

  constructor(private titulo:Title) 
  { 
    titulo.setTitle('Opciones Incidentes')
  }

  ngOnInit(): void {
  }

}
