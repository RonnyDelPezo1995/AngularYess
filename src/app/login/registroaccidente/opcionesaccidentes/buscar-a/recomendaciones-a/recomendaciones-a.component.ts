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

  //printer() {
  //  const printContent = document.getElementById("print");
  //  const WindowPrt = window.open('', '', 'left=0,top=50,width=900,height=900,toolbar=0,scrollbars=0,status=0');
 //   WindowPrt.document.write(printContent.innerHTML);
  //  WindowPrt.document.close();
  //  WindowPrt.focus();
  //  WindowPrt.print();
  //  WindowPrt.close();
  //}

  printer() {
    window.print();
  }

}
