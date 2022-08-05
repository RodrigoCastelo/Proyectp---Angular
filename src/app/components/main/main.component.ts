import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
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

  formularioUsuario: FormGroup = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  enviarUsuario(){
    console.log(this.formularioUsuario);
  }

}
