import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
//esta clase usa el alumno serves para obtener datos
//tendremos que importarla e instanciarla con un new, esto lo hace Angular por mi
//con un atributo que va a decir al servicio date, borra,...
//servicio_alumno:AlumnoService.
//injeccion de dependencias
//crea un objeto y lo pasa al constructor, por parametro, entre los parentesis, y ya lo tengo en el componente
  
lista_alumnos:Array<Alumno>;//creo mi array y lo inicio en el constructor

constructor(public servicio_alumno:AlumnoService) { 
  this.lista_alumnos= new Array<Alumno>();
  }

  ngOnInit(): void {
    //aqui es el sitio para obtener datos de fuera ngOnInit
    this.servicio_alumno.obtenerAlumnos().subscribe(//oye servicio dame la tabla de los alumnos
      //subscribe=>cuando acabes
      //OBSERVADOR EL OBJETO QUE RECIBA LA LLAMADA
  //CUANDO LA RESPUESTA ESTE LISTA
  {
    complete: () => {console.log("ha terminado");},
    error: (error_r) => {console.error("Fallo"+error_r);},
    next: (listado_alumnos_rx) =>
    {this.lista_alumnos=listado_alumnos_rx;
    this.lista_alumnos.forEach
    (alumno=>console.log(`Àlumno ${alumno.id} ${alumno.nombre}`))
    }
 }
  );
  }

}
