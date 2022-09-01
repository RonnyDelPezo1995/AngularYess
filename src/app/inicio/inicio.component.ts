import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private titulo:Title) {
    titulo.setTitle('Registro de Accidente e Incidentes Laborales')
   }

  ngOnInit(): void {
  }

}
