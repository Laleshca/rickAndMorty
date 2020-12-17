import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponse, Result } from 'src/app/models/personajes.model';
import { PersonajesService } from 'src/app/providers/personajes.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  personajes: Observable<CharacterResponse> = new Observable();
  result: Result[];
  loading = false;

  constructor(private personajesService: PersonajesService) {
    this.personajes = this.personajesService.obtenerPersonajes();
    this.loading = true;
    this.personajes.subscribe(({ info, results }) => {
      this.loading = false;
      console.log(info, results);
      this.result = results;
    });
  }
  ngOnInit(): void {
  }

}
