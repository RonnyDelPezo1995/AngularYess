import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-a',
  templateUrl: './registrar-a.component.html',
  styleUrls: ['./registrar-a.component.css']
})
export class RegistrarAComponent implements OnInit {
  tipos:any[]=['Físico','Mecanico','Químico','Biologico','Ergonomico','Psicosocial']

  riesgos:any[]=['Bajo','Medio','Alto']
  selected1 = 'none'
  selected2 = 'none'
  constructor() { }

  ngOnInit(): void {
  }

}
