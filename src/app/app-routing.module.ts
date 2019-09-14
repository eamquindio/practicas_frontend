import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudEstudianteComponent } from './solicitudes/solicitud-estudiante/solicitud-estudiante.component';
import { InicioPracticaComponent } from './practicas/inicio-practica/inicio-practica.component';
import { ConvocatoriasInscripcionComponent } from 'src/app/convocatorias/convocatorias-inscripcion/convocatorias-inscripcion.component';

const routes: Routes = [
  { path : 'inscripcion', component : ConvocatoriasInscripcionComponent },
  { path : 'solicitud/estudiante', component : SolicitudEstudianteComponent },
  { path : 'inicio-practica', component : InicioPracticaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
