import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registroaccidente',
  templateUrl: './registroaccidente.component.html',
  styleUrls: ['./registroaccidente.component.css']
})
export class RegistroaccidenteComponent implements OnInit {

  constructor(
    private userService:UserService,
    private router:Router,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  salir(){
    this,this.userService.logout()
    .then(()=>{
      this.router.navigate(['/login'])
    })
    .catch(error=>console.log(error));  
  }


}
