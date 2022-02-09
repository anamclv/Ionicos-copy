import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { DniComponent } from './components/dni/dni.component';
import { ImcComponent } from './components/imc/imc.component';
import { JuegopptComponent } from './components/juegoppt/juegoppt.component';

//AQUÍ ES DONDE TENGO QUE ESTABLECER
//LA CORRESPONDECIA ENTRE RUTAS Y COMPONENTE
const routes: Routes = [
  {path:"dni", component: DniComponent},
  //{path:"", component: DniComponent},
  {path:"imc", component: ImcComponent},
  {path:"ppt", component: JuegopptComponent},
  {path:"alumno", component: AlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
