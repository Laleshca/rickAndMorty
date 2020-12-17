import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultLocation } from 'src/app/models/ubicaciones.model';
import { PersonajesService } from 'src/app/providers/personajes.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {

  id: number;
  result: ResultLocation;
  loading = false;
  constructor(private activatedRoute: ActivatedRoute,
    private perServ: PersonajesService) {
      this.loading=true;
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'].toString();
      this.loading=false;
      console.log(this.id);
      this.perServ.obtenerUbicacion(this.id)
      .subscribe( result  => this.result = result);
    })
   }

  ngOnInit(): void {
  }

}
