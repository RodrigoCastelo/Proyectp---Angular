import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from '../main/main.component';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {
  edicion: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef <EditarEstudianteComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Curso  
    
  ) {
    this.edicion = fb.group({
      nombre: new FormControl (data.nombre),
      comision: new FormControl (data.comision),
      profesor: new FormControl (data.profesor),
      estudiantes: new FormControl (data.estudiantes),
      regular: new FormControl (data.regular),
    })
  }

  ngOnInit(): void {
  }

  actualizar(){
    this.dialogRef.close(this.edicion.value);
  }
  cerrar(){
    this.dialogRef.close();
  }
}
