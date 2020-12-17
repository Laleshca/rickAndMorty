import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/models/personajes.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() index: number;
  @Input() personaje: Result;

  constructor() { }

  ngOnInit(): void {
  }

}
