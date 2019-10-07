import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPracticaComponent } from './inicio-practica/inicio-practica.component';
import { ReporteCensoComponent } from './reporte-censo/reporte-censo.component';
import { FormsModule } from '@angular/forms';
import { ConvocatoriaComponent } from './inicio-practica/convocatoria/convocatoria.component';
import { FiltrarCedulaPipe } from '../pipes/filtrar-cedula.pipe';
import { NoPracticaComponent } from './inicio-practica/no-practica/no-practica.component';
import { SolicitudComponent } from './inicio-practica/solicitud/solicitud.component';





@NgModule({
  declarations: [InicioPracticaComponent, ReporteCensoComponent,
     ConvocatoriaComponent, FiltrarCedulaPipe, NoPracticaComponent, SolicitudComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PracticasModule { }
