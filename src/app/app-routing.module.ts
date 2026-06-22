import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DestinosComponent } from './pages/destinos/destinos.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { SoporteComponent } from './pages/soporte/soporte.component';
const routes: Routes = [

  // 🌐 PUBLICO
  { path: '', component: HomeComponent },
  { path: 'destinos', component: DestinosComponent },
  { path: 'paquetes', component: PaquetesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },

  // 🔐 PRIVADO
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reservas',
    component: ReservasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'soporte',
    component: SoporteComponent,
    canActivate: [AuthGuard]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}