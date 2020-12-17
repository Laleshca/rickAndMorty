import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Result } from 'src/app/models/personajes.model';
import { PersonajesService } from 'src/app/providers/personajes.service';
import { Observable } from 'rxjs';
import { LocationResponse, ResultLocation } from 'src/app/models/ubicaciones.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  ubicaciones: Observable<LocationResponse> = new Observable();

  nameUbicacion: string;
  id: string;
  result: Result;
  resultLocation: ResultLocation[];
  ubicacion: ResultLocation;
  idUbicacion: number;
  loading = false;
  constructor(private activatedRoute: ActivatedRoute, 
    private perServ: PersonajesService, 
    private router: Router) {
      this.loading =true;
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'].toString();
      console.log(this.id);
      this.loading =false;
      this.perServ.obtenerPersonaje(this.id)
      .subscribe( result  => this.result = result);
    })
    this.ubicaciones = this.perServ.obtenerUbicaciones();
    this.loading =false;
    this.ubicaciones.subscribe(({ info, results }) => {
      console.log(info, results);
      this.resultLocation = results;
    });
   }

   verUbicacion(name: string){
    console.log(name);
     this.resultLocation.forEach(element => {
       if(element.name === name){
         this.ubicacion= element;
         this.idUbicacion= element.id;
         console.log(this.ubicacion);
         this.router.navigate(['/ubicacion', this.idUbicacion]);
       }
       
     });


   }
  ngOnInit(): void {
  }

}
