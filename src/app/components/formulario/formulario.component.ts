import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formularioUsuario: FormGroup = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  enviarUsuario(){
    console.log(this.formularioUsuario);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
