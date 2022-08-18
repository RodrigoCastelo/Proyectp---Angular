import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Alumno{
  nombre: string,
  apellido:string,
  anotado: boolean,
}
@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  alumnos: Alumno[]= [
  {nombre: 'Rodrigo', apellido:'Castelo', anotado: true},
  {nombre: 'Reinaldo', apellido: 'Castelo', anotado: true},
  {nombre:'Nora', apellido: 'Gomez',anotado: false}
];

  constructor() { }

  observableAlumnos(){
    return of (this.alumnos);
  }
}
