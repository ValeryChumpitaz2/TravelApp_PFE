import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DestinosComponent } from './pages/destinos/destinos.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DestinoDetalleComponent } from './pages/destino-detalle/destino-detalle.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { SoporteComponent } from './pages/soporte/soporte.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DestinosComponent,
    PaquetesComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent,
    DestinoDetalleComponent,
    DashboardComponent,
    PerfilComponent,
    ReservasComponent,
    SoporteComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
