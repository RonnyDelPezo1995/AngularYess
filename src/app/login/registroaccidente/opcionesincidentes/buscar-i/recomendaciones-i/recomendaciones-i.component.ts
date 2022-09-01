import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-recomendaciones-i',
  templateUrl: './recomendaciones-i.component.html',
  styleUrls: ['./recomendaciones-i.component.css']
})
export class RecomendacionesIComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  printer() {
    window.print();
  }

}
