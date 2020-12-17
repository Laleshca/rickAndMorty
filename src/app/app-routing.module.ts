import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ListaUbicacionesComponent } from './components/lista-ubicaciones/lista-ubicaciones.component';
import { ListaComponent } from './components/lista/lista.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {path: "lista", component: ListaComponent},
  {path: "home", component: HomeComponent},
  {path: "lista/:id", component: DetalleComponent},
  {path: "ubicacion", component: ListaUbicacionesComponent},
  {path: "ubicacion/:id", component: UbicacionComponent},
  {path: "busqueda/:termino", component: BusquedaComponent},
  {path: "**", pathMatch:"full", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
