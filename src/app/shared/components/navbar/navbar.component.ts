import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterResponse, Result } from 'src/app/models/personajes.model';
import { PersonajesService } from 'src/app/providers/personajes.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  personajes: Observable<CharacterResponse> = new Observable();
  result: Result[];
  personaje: Result;

  constructor(private router : Router, private personajesService: PersonajesService) {
    this.personajes = this.personajesService.obtenerPersonajes();
    this.personajes.subscribe(({ info, results }) => {
      console.log(info, results);
      this.result = results;
    });
   }

  ngOnInit(): void {
  }

  buscar(termino:string){
    if(termino){
      this.router.navigate(['/busqueda',termino]);
    }else{
      Swal.fire({
        text: "Debe ingresar un valor de búsqueda",
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      })
    }
  }
}
