import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent implements OnInit {

  alumno:Alumno;

  constructor() { 
    this.alumno=new Alumno();
    //this.alumno.nombre="pa";
  }

  ngOnInit(): void {
  }

  crearAlumno()
  {
    console.log("creando alumno");
  }

}
