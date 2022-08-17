import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
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
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}
