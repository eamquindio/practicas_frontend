import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  { path: 'inicio-practica', component: InicioPracticaComponent },
  { path: 'listar', component: ConvocatoriasListarComponent },
  { path: 'inicio-practica', component: InicioPracticaComponent },
  { path: 'listar', component: ConvocatoriasListarComponent },
  { path: 'cierre-convocatoria', component: CerrarConvocatoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
