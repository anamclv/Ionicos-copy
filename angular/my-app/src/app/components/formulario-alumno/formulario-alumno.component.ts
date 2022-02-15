import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent implements OnInit {
  alumno:Alumno;
  //iconocafe=faCoffee;//icono café

  constructor(public servicio_alumnos:AlumnoService,
    private router:Router,
    private ruta: ActivatedRoute) { 
    this.alumno=new Alumno();
    //this.alumno.nombre="pa";


  }
  ngOnInit(): void {

    //Método JUan tb se puede acceder a la ruta actual así: snapshot es la ruta actual
    //const id = this.ruta.snapshot.paramMap.get('id') || 0;
    this.ruta.paramMap.subscribe(
      param => {
         let id=param.get('id');
         if (id!=null)
         {
           console.log("estoy editando");
           //TODO: rellenar los campos con los datos del alumno en edición
         } else {
           console.log("estoy creando");
         }
      }
    );

    }

  crearAlumno()
  {
    console.log("creando alumno "+this.alumno.nombre);
    this.servicio_alumnos.crearAlumno(this.alumno).subscribe(
      {
        complete: ()=>{console.log("Ha terminado");},
        error:(merror)=>{console.error("ERRor "+merror);},
        next: (alumno_nuevo)=>{
          alert('Alumno insertado correctamente :)');
          console.log(alumno_nuevo.id);
          //navegar
          this.router.navigateByUrl("/alumno");//siempre usamos rutas relativas
        },
      }
    );
    //TODO: completar el post al servidor
  }

}
