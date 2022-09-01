import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email='';
  password='';
  formularioIncorrecto=false;
  formReg: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router,
    public snackBar: MatSnackBar,
    public titulo:Title
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
    titulo.setTitle('Registro')
  }
  ngOnInit(): void {
  }
  registrarUsuario(){
    this.onSubmit()
  }

  
  onSubmit() {
    this.userService.register(this.email,this.password)
      .then(response => {
        console.log(response);
        this.formularioIncorrecto=false;
        this.resetCampos();
        this.snackBar.open('El usuario se registro correctamente','',{
          duration:3000
        })
        //this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
      this.formularioIncorrecto=true;
  }
  resetCampos(){
    this.email='';
    this.password='';
  }
}
