import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DestinosComponent } from './pages/destinos/destinos.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
 import { PerfilComponent } from './pages/perfil/perfil.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { SoporteComponent } from './pages/soporte/soporte.component';
const routes: Routes = [

  // 🔓 PÁGINAS PÚBLICAS (ANTES DEL LOGIN)
  { path: '', component: HomeComponent },
  { path: 'destinos', component: DestinosComponent },
  { path: 'paquetes', component: PaquetesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'soporte', component: SoporteComponent },
  { path: 'login', component: LoginComponent },

  // 🔒 PÁGINAS PRIVADAS (DESPUÉS DEL LOGIN)
  { path: 'dashboard', component: DashboardComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'reservas', component: ReservasComponent },

  // 🔁 REDIRECCIONES
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}