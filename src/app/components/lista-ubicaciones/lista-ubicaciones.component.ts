import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationResponse, ResultLocation } from 'src/app/models/ubicaciones.model';
import { PersonajesService } from 'src/app/providers/personajes.service';

@Component({
  selector: 'app-lista-ubicaciones',
  templateUrl: './lista-ubicaciones.component.html',
  styleUrls: ['./lista-ubicaciones.component.css']
})
export class ListaUbicacionesComponent implements OnInit {
  ubicaciones: Observable<LocationResponse> = new Observable();
  resultLocation: ResultLocation[];
  loading = false;

  constructor(private perServ: PersonajesService) { 
    this.ubicaciones = this.perServ.obtenerUbicaciones();
    this.loading = true;
    this.ubicaciones.subscribe(({ info, results }) => {
      this.loading=false;
      console.log(info, results);
      this.resultLocation = results;
    });
  }

  ngOnInit(): void {
  }

}
