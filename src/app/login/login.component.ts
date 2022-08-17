import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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
    private router: Router
  ) { }

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
        this.formularioIncorrecto=false;
      })
      .catch(error => console.log(error));
      this.formularioIncorrecto=true;
  }
}
