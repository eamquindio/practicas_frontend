import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPracticaComponent } from './inicio-practica/inicio-practica.component';
import { ReporteCensoComponent } from './reporte-censo/reporte-censo.component';
import { FormsModule } from '@angular/forms';
<<<<<<< 5a7fda1b06495a00578affe69797a99b13b2770e
import { AutoevaluacionComponent } from './autoevaluacion/autoevaluacion.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
<<<<<<< f34226cd65e3977ad8470acf2a2ff9473a7d781d
import { ConvocatoriaComponent } from './inicio-practica/convocatoria/convocatoria.component';
import { FiltrarCedulaPipe } from '../pipes/filtrar-cedula.pipe';
import { NoPracticaComponent } from './inicio-practica/no-practica/no-practica.component';
import { SolicitudComponent } from './inicio-practica/solicitud/solicitud.component';
import { CrearSeguimientoComponent } from '../practicas/seguimientos/crear-seguimiento/crear-seguimiento.component';
import { SeguimientosComponent } from '../practicas/seguimientos/seguimientos.component';


@NgModule({
  declarations: [InicioPracticaComponent, ReporteCensoComponent, AutoevaluacionComponent, EvaluacionComponent
<<<<<<< 4b3c89df8b56fa96e9e4c12e289313559545f247
   , ConvocatoriaComponent, FiltrarCedulaPipe, SeguimientosComponent, CrearSeguimientoComponent, NoPracticaComponent, SolicitudComponent],
=======
   , ConvocatoriaComponent, FiltrarCedulaPipe, NoPracticaComponent, SolicitudComponent],
=======
=======
import { ListarSeguimientoComponent } from './listar-seguimiento/listar-seguimiento.component';
>>>>>>> Frontend listar seguimiento




@NgModule({
<<<<<<< 5a7fda1b06495a00578affe69797a99b13b2770e
  declarations: [InicioPracticaComponent, ReporteCensoComponent, AutoevaluacionComponent, EvaluacionComponent],
=======
  declarations: [InicioPracticaComponent, ReporteCensoComponent, ListarSeguimientoComponent],
>>>>>>> Frontend listar seguimiento
>>>>>>> Frontend listar seguimiento
>>>>>>> Frontend listar seguimiento
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PracticasModule { }
