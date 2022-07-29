import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  alumnos =[
    {
      nombre:'Rodrigo',
      apellido:'Castelo'
    },
    {
      nombre:'Reinaldo',
      apellido:'Castelo'
    },
    {
      nombre:'Nora',
      apellido:'Gomez'
    },
    {
      nombre:'Antonella',
      apellido:'Castelo'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
