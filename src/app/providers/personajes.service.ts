import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CharacterResponse, Result } from '../models/personajes.model';
import { HttpClient } from '@angular/common/http';
import { LocationResponse, ResultLocation } from '../models/ubicaciones.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  
  personaje: Observable<CharacterResponse> = new Observable();
  result: Result[];
  personaje1: Result;

  private personajes: Result[] = []

  baseUrl: string = environment.baseurl;
  endpointCharacter: string = environment.endpoints.character;
  endpointLocation: string = environment.endpoints.location;

  constructor(private http: HttpClient) { 
    this.personaje = this.obtenerPersonajes();
    this.personaje.subscribe(({ info, results }) => {
      console.log(info, results);
      this.result = results;
    })
    
  }
  obtenerPersonajes() {
    const url = this.baseUrl + this.endpointCharacter;
    return this.http.get<CharacterResponse>(url);
  }

  obtenerPersonaje(id: string) {
    const url = `${this.baseUrl}${this.endpointCharacter}/${id}`;
    return this.http.get<Result>(url);
  }

  obtenerUbicaciones(){
    const url = this.baseUrl + this.endpointLocation;
    return this.http.get<LocationResponse>(url);
  }

  obtenerUbicacion(id: number){
    const url = `${this.baseUrl}${this.endpointLocation}/${id}`;
    return this.http.get<ResultLocation>(url);
  }

  buscarPersonaje(termino:string){
   this.result.forEach(element => {
      if(element.name.toUpperCase().includes(termino.toUpperCase())){
        this.personaje1 = element;
        console.log(this.personaje);
        console.log(termino);
        this.personajes.push(element);
      }
    });
    return this.personajes;  
    /*console.log("srvice")
     return this.personajes.map((personaje, index) =>
     ({...personaje, id: index})).filter(personaje => 
      personaje.name.toUpperCase().includes(termino.toUpperCase()));*/
  
   }
}
