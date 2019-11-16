import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvocatoriasRegistrarComponent } from './convocatorias/convocatorias-registrar/convocatorias-registrar.component';
import { SolicitudEstudianteComponent } from './solicitudes/solicitud-estudiante/solicitud-estudiante.component';
import { InicioPracticaComponent } from './practicas/inicio-practica/inicio-practica.component';
import { ConvocatoriasListarComponent } from 'src/app/convocatorias/convocatorias-listar/convocatorias-listar.component';
import { ConvocatoriasInscripcionComponent } from 'src/app/convocatorias/convocatorias-inscripcion/convocatorias-inscripcion.component';
import { ConvocatoriasModificarComponent } from 'src/app/convocatorias/convocatorias-modificar/convocatorias-modificar.component';
import { CerrarConvocatoriaComponent } from './convocatorias/cerrar-convocatoria/cerrar-convocatoria.component';
import { SolicitudEmpRegistrarComponent } from './solicitudes/solicitud-emp-registrar/solicitud-emp-registrar.component';
import { ReporteCensoComponent } from './practicas/reporte-censo/reporte-censo.component';
import { AsignarCitaComponent } from './psicologia/asignar-cita/asignar-cita.component';
import { Error403ForbiddenComponent } from './paginas-error/error403-forbidden/error403-forbidden.component';
import { Error404NotFoundComponent } from './paginas-error/error404-not-found/error404-not-found.component';
import { Error500InternalServerComponent } from './paginas-error/error500-internal-server/error500-internal-server.component';
import { SolicitudHomologacionComponent } from './solicitudes/solicitud-homologacion/solicitud-homologacion.component';
import { ListarCitaComponent } from './psicologia/listar-cita/listar-cita.component';
import { RestablecerContraseniaComponent } from './usuarios/restablecer-contrasenia/restablecer-contrasenia.component';
import { AutoevaluacionComponent } from './practicas/autoevaluacion/autoevaluacion.component';
import { EvaluacionComponent } from './practicas/evaluacion/evaluacion.component';
import { SeguimientosComponent } from './practicas/seguimientos/seguimientos.component';
import { CrearSeguimientoComponent } from './practicas/seguimientos/crear-seguimiento/crear-seguimiento.component';
import { ListarSeguimientoComponent } from './practicas/listar-seguimiento/listar-seguimiento.component';
import { LoginComponent } from './login/login/login.component';
import { ModificarCitaComponent } from './psicologia/modificar-cita/modificar-cita/modificar-cita.component';
import { PracticaEstudianteComponent } from './practicas/practica-estudiante/practica-estudiante.component';

/*Guard*/
import { PsicologoGuard } from './guard/psicologo.guard';
import { CoordinadorGuard } from './guard/coordinador.guard';
import { EstudianteGuard } from './guard/estudiante.guard';
import { EmpresaGuard } from './guard/empresa.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'convocatoria/:id/inscripcion', component: ConvocatoriasInscripcionComponent },
  { path: 'solicitud/estudiante', component: SolicitudEstudianteComponent, canActivate:[EstudianteGuard]},
  { path: 'modificar', component: ConvocatoriasModificarComponent, canActivate:[CoordinadorGuard]},
  { path: 'practica/inicio', component: InicioPracticaComponent, canActivate:[CoordinadorGuard]},
  { path: 'convocatorias', component: ConvocatoriasListarComponent, canActivate:[CoordinadorGuard]},
  { path: 'convocatoria/cierre', component: CerrarConvocatoriaComponent, canActivate:[CoordinadorGuard]},
  { path: 'convocatoria', component: ConvocatoriasRegistrarComponent, canActivate:[CoordinadorGuard]},
  { path: 'solicitud/empresa', component: SolicitudEmpRegistrarComponent, canActivate:[EmpresaGuard]},
  { path: 'reporte-censo', component: ReporteCensoComponent, canActivate:[CoordinadorGuard]},
  { path: 'psicologia/citas/asignar', component: AsignarCitaComponent, canActivate:[PsicologoGuard]},
  { path: 'forbidden', component: Error403ForbiddenComponent},
  { path: 'internal_server', component: Error500InternalServerComponent},
  { path: 'solicitud/homologacion', component: SolicitudHomologacionComponent, canActivate:[EstudianteGuard]},
  { path: 'internal_server', component: Error500InternalServerComponent},
  { path: 'listar-citas', component: ListarCitaComponent, canActivate:[PsicologoGuard]},
  { path: 'reporte-censo', component: ReporteCensoComponent, canActivate:[CoordinadorGuard]},
  { path: 'restablecer-contrasenia', component: RestablecerContraseniaComponent },
  { path: 'autoevaluacion', component: AutoevaluacionComponent, canActivate:[EstudianteGuard]},
  { path: 'evaluacion', component: EvaluacionComponent, canActivate:[EmpresaGuard]},
  { path: 'seguimiento', component: SeguimientosComponent, canActivate:[CoordinadorGuard]},
  { path: 'crear-seguimiento', component: CrearSeguimientoComponent, canActivate:[CoordinadorGuard]},
  { path: 'listar/seguimiento', component: ListarSeguimientoComponent, canActivate:[CoordinadorGuard]},
  { path: 'psicologia/asignar', component: AsignarCitaComponent, canActivate:[PsicologoGuard]},
  { path: 'psicologia/modificar', component: ModificarCitaComponent, canActivate:[PsicologoGuard]},
  { path: 'practice-estudent', component: PracticaEstudianteComponent, canActivate:[EstudianteGuard]},
  { path: '**', component: Error404NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
