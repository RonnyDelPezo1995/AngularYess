import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-recomendaciones-a',
  templateUrl: './recomendaciones-a.component.html',
  styleUrls: ['./recomendaciones-a.component.css']
})
export class RecomendacionesAComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  console.log(this.data);
  }

}
