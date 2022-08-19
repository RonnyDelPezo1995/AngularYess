import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-i',
  templateUrl: './registrar-i.component.html',
  styleUrls: ['./registrar-i.component.css']
})
export class RegistrarIComponent implements OnInit {

  tipos:any[]=['Físico','Mecanico','Químico','Biologico','Ergonomico','Psicosocial']

  riesgos:any[]=['Bajo','Medio','Alto']
  selected1 = 'none'
  selected2 = 'none'
  constructor() { }

  ngOnInit(): void {
  }

}
