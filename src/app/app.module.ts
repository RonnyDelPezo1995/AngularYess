import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './login/navbar/navbar.component';
import { FooterComponent } from './login/footer/footer.component';
import { RegistroaccidenteComponent } from './login/registroaccidente/registroaccidente.component';
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { OpcionesaccidentesComponent } from './login/registroaccidente/opcionesaccidentes/opcionesaccidentes.component';
import { OpcionesincidentesComponent } from './login/registroaccidente/opcionesincidentes/opcionesincidentes.component';
import { RegistrarAComponent } from './login/registroaccidente/opcionesaccidentes/registrar-a/registrar-a.component';
import { ModificarAComponent } from './login/registroaccidente/opcionesaccidentes/modificar-a/modificar-a.component';
import { EliminarAComponent } from './login/registroaccidente/opcionesaccidentes/eliminar-a/eliminar-a.component';
import { BuscarAComponent } from './login/registroaccidente/opcionesaccidentes/buscar-a/buscar-a.component';
import { RegistrarIComponent } from './login/registroaccidente/opcionesincidentes/registrar-i/registrar-i.component';
import { ModificarIComponent } from './login/registroaccidente/opcionesincidentes/modificar-i/modificar-i.component';
import { EliminarIComponent } from './login/registroaccidente/opcionesincidentes/eliminar-i/eliminar-i.component';
import { BuscarIComponent } from './login/registroaccidente/opcionesincidentes/buscar-i/buscar-i.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    RegistroaccidenteComponent,
    RegisterComponent,
    InicioComponent,
    OpcionesaccidentesComponent,
    OpcionesincidentesComponent,
    RegistrarAComponent,
    ModificarAComponent,
    EliminarAComponent,
    BuscarAComponent,
    RegistrarIComponent,
    ModificarIComponent,
    EliminarIComponent,
    BuscarIComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
