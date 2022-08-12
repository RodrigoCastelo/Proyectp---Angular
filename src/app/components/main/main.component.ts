import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscriber } from 'rxjs';
import { EditarEstudianteComponent } from '../editar-estudiante/editar-estudiante.component';


export interface Curso{
  nombre:string;
  comision:string;
  profesor:string;
  estudiantes:number;
  regular:boolean;
}
const info: Curso[] =[
  {nombre: 'Angular', comision: '32310', profesor: 'Abner Garcia', estudiantes: 65, regular: true},
  {nombre: 'VueJS', comision: '33320', profesor: 'Abner Garcia', estudiantes: 34,regular: true},
  {nombre: 'ReactJS', comision: '35310', profesor: 'Abner Garcia', estudiantes: 87, regular: false},
  {nombre: 'UI/UX', comision: '31310', profesor: 'Abner Garcia', estudiantes: 12, regular: true},
  {nombre: '.NET', comision: '38310', profesor: 'Abner Garcia', estudiantes: 90, regular: false},
  {nombre: 'SQL', comision: '31310', profesor: 'Abner Garcia', estudiantes: 44, regular: true},
  {nombre: 'Web 3.0', comision: '32380', profesor: 'Abner Garcia', estudiantes: 63, regular: true}
]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  columnas: string[] = ['nombre','comision','profesor','estudiantes','regular','acciones']

  dataSource: MatTableDataSource<Curso> = new MatTableDataSource(info);
  @ViewChild (MatTable) tabla!: MatTable <Curso>;

  formularioUsuario: FormGroup = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  enviarUsuario(){
    console.log(this.formularioUsuario);
  }

  eliminar(elemento:Curso){
    this.dataSource.data = this.dataSource.data.filter((curso:Curso) => curso.comision != elemento.comision);
  }
  editar(elemento: Curso){
    const dialogRef = this.dialog.open(EditarEstudianteComponent,{
      width: '400px',
      data: elemento 
    });
  dialogRef.afterClosed().subscribe(resultado =>{
    if(resultado){
      //si hay resultado pregunta y actualiza la info
      const item = this.dataSource.data.find(curso=> curso.comision === resultado.comision);
      const index = this.dataSource.data.indexOf(item!);
      this.dataSource.data[index] =resultado;
      this.tabla.renderRows();
    }
  }) 
  
  }
}

