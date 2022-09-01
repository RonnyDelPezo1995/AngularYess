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
import { ModificarAComponent } from './login/registroaccidente/opcionesaccidentes/modificar-a/modificar-a.component';
import { ModificarIComponent } from './login/registroaccidente/opcionesincidentes/modificar-i/modificar-i.component';
import { ModificarindividualaccidenteComponent } from './login/registroaccidente/opcionesaccidentes/modificar-a/modificarindividualaccidente/modificarindividualaccidente.component';
import { EliminarAComponent } from './login/registroaccidente/opcionesaccidentes/eliminar-a/eliminar-a.component';
import { BuscarAComponent } from './login/registroaccidente/opcionesaccidentes/buscar-a/buscar-a.component';
import { EliminarIComponent } from './login/registroaccidente/opcionesincidentes/eliminar-i/eliminar-i.component';
import { BuscarIComponent } from './login/registroaccidente/opcionesincidentes/buscar-i/buscar-i.component';
import { ModificarindividualincidenteComponent } from './login/registroaccidente/opcionesincidentes/modificar-i/modificarindividualincidente/modificarindividualincidente.component';
import { InformesComponent } from './informes/informes.component';

const routes: Routes = [
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  {path:'inicio',component:InicioComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'informes',component:InformesComponent,...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'login/registroaccidente',component:RegistroaccidenteComponent},
  {path:'login/registroaccidente/opcionesaccidentes',component:OpcionesaccidentesComponent},
  {path:'login/registroaccidente/opcionesincidentes',component:OpcionesincidentesComponent},
  {path:'registroaccidente',component:RegistroaccidenteComponent,...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'opcionesaccidentes',component:OpcionesaccidentesComponent,...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'opcionesincidentes',component:OpcionesincidentesComponent,...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'registrarA',component:RegistrarAComponent,...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'registrarI',component:RegistrarIComponent,...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'modificarA',component:ModificarAComponent,...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'modificarI',component:ModificarIComponent,...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'editarA/:id',component:RegistrarAComponent,...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'modificarindividualaccidente/:id',component:ModificarindividualaccidenteComponent},
  {path:'modificarindividualincidente/:id',component:ModificarindividualincidenteComponent},
  {path:'eliminarA',component:EliminarAComponent,...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'eliminarI',component:EliminarIComponent,...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'buscarAccidente',component:BuscarAComponent,...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'buscarIncidente',component:BuscarIComponent,...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'buscarA',component:BuscarAComponent,...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'**',redirectTo:'inicio',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
