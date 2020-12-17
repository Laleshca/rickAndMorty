import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Result } from 'src/app/models/personajes.model';
import { PersonajesService } from 'src/app/providers/personajes.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  personajes: Result[] = [];
  termino: string;
  constructor(private activatedRoute: ActivatedRoute, private service: PersonajesService) { 
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(parms =>{
      this.termino = parms['termino'].toString();
      this.personajes=this.service.buscarPersonaje(parms['termino'].toString());
    })
    console.log(this.personajes);

  }

}
