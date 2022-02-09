import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';
// esto es un servicio que va a llevar la comunicacion http con el servidor
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http:HttpClient) // inyectamos el servicio, va a enviar los mensajes
  { 

  }

  //crear alumno. obtenerAlumnos()
  //leer alumno
  //modificar alumno
  //borrar alumno
  obtenerAlumnos(): Observable<Array<Alumno>>{
    return this.http.get<Array<Alumno>>("http://10.1.2.10:8090/api/alumnos");
            //recibo un array y lo digo en get <Alumno[]>, esto seria equivalente
            //get devuelve un observable,tendre que declarar un objeto pendiente del observable
            // la libreria que tiene los observables es rxjs
  }
}
