import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroaccidenteComponent } from './login/registroaccidente/registroaccidente.component';
import { RegisterComponent } from './register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { OpcionesaccidentesComponent } from './login/registroaccidente/opcionesaccidentes/opcionesaccidentes.component';
import { OpcionesincidentesComponent } from './login/registroaccidente/opcionesincidentes/opcionesincidentes.component';
import { RegistrarAComponent } from './login/registroaccidente/opcionesaccidentes/registrar-a/registrar-a.component';
import { RegistrarIComponent } from './login/registroaccidente/opcionesincidentes/registrar-i/registrar-i.component';

const routes: Routes = [
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  {path:'inicio',component:InicioComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'login/registroaccidente',component:RegistroaccidenteComponent},
  {path:'login/registroaccidente/opcionesaccidentes',component:OpcionesaccidentesComponent},
  {path:'login/registroaccidente/opcionesincidentes',component:OpcionesincidentesComponent},
  {path:'registroaccidente',component:RegistroaccidenteComponent,...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'opcionesaccidentes',component:OpcionesaccidentesComponent,...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'opcionesincidentes',component:OpcionesincidentesComponent,...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'registrarA',component:RegistrarAComponent},
  {path:'registrarI',component:RegistrarIComponent},
  {path:'**',redirectTo:'inicio',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
