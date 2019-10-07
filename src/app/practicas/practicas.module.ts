import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPracticaComponent } from './inicio-practica/inicio-practica.component';
import { ReporteCensoComponent } from './reporte-censo/reporte-censo.component';
import { FormsModule } from '@angular/forms';
import { AutoevaluacionComponent } from './autoevaluacion/autoevaluacion.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { ConvocatoriaComponent } from './inicio-practica/convocatoria/convocatoria.component';
import { FiltrarCedulaPipe } from '../pipes/filtrar-cedula.pipe';
import { NoPracticaComponent } from './inicio-practica/no-practica/no-practica.component';
import { SolicitudComponent } from './inicio-practica/solicitud/solicitud.component';
import { CrearSeguimientoComponent } from '../practicas/seguimientos/crear-seguimiento/crear-seguimiento.component';
import { SeguimientosComponent } from '../practicas/seguimientos/seguimientos.component';
import { ListarSeguimientoComponent } from './listar-seguimiento/listar-seguimiento.component';


@NgModule({
  declarations: [InicioPracticaComponent, ReporteCensoComponent, AutoevaluacionComponent, EvaluacionComponent
   , ConvocatoriaComponent, FiltrarCedulaPipe, SeguimientosComponent, CrearSeguimientoComponent, 
   NoPracticaComponent, SolicitudComponent, ListarSeguimientoComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PracticasModule { }
