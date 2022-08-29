import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, from, of, pipe } from 'rxjs';
import { RxjsService, Alumno } from './services/rxjs.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Desafio1';
  alumnos: Alumno[]=[];
  alumnos$;
  constructor(
    private rxjsService:RxjsService
  ){
    this.rxjsService.observableAlumnos().subscribe((alumnos) =>{
      const alumnoss= alumnos.filter((anotado)=>{
        return anotado.anotado==true
      });
      console.log(alumnoss)
    });
    this.alumnos$=this.rxjsService.observableAlumnos();
  }
  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
    
  }
}
