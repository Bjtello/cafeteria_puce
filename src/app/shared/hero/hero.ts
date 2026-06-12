import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  @Input() titulo!:string;
  @Input() contenido!:string;
  @Input() imagenUrl!:string;
  @Input() textoBoton!:string;
  @Input() colorBoton!:string;
  @Input() block!:string;
}

