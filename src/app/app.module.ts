import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ListaComponent } from './components/lista/lista.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ListaUbicacionesComponent } from './components/lista-ubicaciones/lista-ubicaciones.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { LoadingComponent } from './shared/components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaComponent,
    CardComponent,
    DetalleComponent,
    HomeComponent,
    ListaUbicacionesComponent,
    UbicacionComponent,
    BusquedaComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
