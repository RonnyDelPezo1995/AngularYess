import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { timeInterval } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email='';
  password='';
  formularioIncorrecto=false;
  constructor(
    private userService: UserService,
    private router: Router,
    public snackBar: MatSnackBar,
    private titulo:Title
  ) {
    titulo.setTitle('Inicio de Sesíon')
   }

  ngOnInit(): void {
  }

  iniciarSesion(){
    this.onSubmit()
  }

  onSubmit() {
    this.userService.login(this.email,this.password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/registroaccidente']);
        this.snackBar.open('Inicio de Sesion exitoso','',{
          duration:3000
        })
      })
      .catch(error => console.log(error));
      ///this.snackBar.open('Los Datos son incorrectos','',{
      //  duration:1000
      //})
      
  }
}
