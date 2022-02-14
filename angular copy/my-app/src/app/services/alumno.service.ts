import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RUTA_JSON_SERVER, RUTA_SERVIDOR_CLASE } from '../config/app';
import { Alumno } from '../models/alumno';

/*esto es un servicio
que va a llevar la comunición HTTP
con el servidor*/

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {


  //ruta_servidor:string=RUTA_SERVIDOR_CLASE;
  ruta_servidor:string=RUTA_JSON_SERVER;
  cabeceras: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http:HttpClient) {

   }

  //crearAlumno - POST
  //leerAlumnos - GET (all) x
  //leerAlumno por Id - GET
  //modificarAlumno - PUT
  //borrarAlumno - DELETE x
  obtenerAlumnos():Observable<Array<Alumno>>
  {
   return this.http.get<Array<Alumno>>(this.ruta_servidor); 
   //return this.http.get<Alumno[]>("http://10.1.2.10:8090/api/alumnos"); 
  }

  obtenerAlumnosConCabeceras():Observable<HttpResponse<Array<Alumno>>>
  {
   return this.http.get<Array<Alumno>>(this.ruta_servidor, {observe: 'response'}); 
   //return this.http.get<Alumno[]>("http://10.1.2.10:8090/api/alumnos"); 
  }

  borrarAlumno (id:number):Observable<void>
  {
    return this.http.delete<void>(this.ruta_servidor+id);
  }

  crearAlumno (alumno:Alumno):Observable<Alumno>
  {
    return this.http.post<Alumno>(this.ruta_servidor,alumno, {headers: this.cabeceras});
  }

}
