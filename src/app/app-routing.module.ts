import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvocatoriasRegistrarComponent } from "./convocatorias/convocatorias-registrar/convocatorias-registrar/convocatorias-registrar.component";
import { SolicitudEstudianteComponent } from './solicitudes/solicitud-estudiante/solicitud-estudiante.component';
import { InicioPracticaComponent } from './practicas/inicio-practica/inicio-practica.component';
import { ConvocatoriasListarComponent } from 'src/app/convocatorias/convocatorias-listar/convocatorias-listar.component';
import { ConvocatoriasInscripcionComponent } from 'src/app/convocatorias/convocatorias-inscripcion/convocatorias-inscripcion.component';
import { ConvocatoriasModificarComponent } from 'src/app/convocatorias/convocatorias-modificar/convocatorias-modificar.component';
import { CerrarConvocatoriaComponent } from './convocatorias/cerrar-convocatoria/cerrar-convocatoria.component';

const routes: Routes = [
  { path: 'inscripcion', component: ConvocatoriasInscripcionComponent },
  { path: 'solicitud/estudiante', component: SolicitudEstudianteComponent },
  { path: 'modificar', component: ConvocatoriasModificarComponent },
  { path: 'practica/inicio', component: InicioPracticaComponent },
  { path: 'convocatorias', component: ConvocatoriasListarComponent },
  { path: 'convocatoria/cierre', component: CerrarConvocatoriaComponent },
  { path: 'convocatoria', component: ConvocatoriasRegistrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
