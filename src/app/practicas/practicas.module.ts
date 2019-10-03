import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPracticaComponent } from './inicio-practica/inicio-practica.component';
import { ReporteCensoComponent } from './reporte-censo/reporte-censo.component';
import { FormsModule } from '@angular/forms';
import { SeguimientosComponent } from './seguimientos/seguimientos.component';
import { CrearSeguimientoComponent } from './seguimientos/crear-seguimiento/crear-seguimiento.component';




@NgModule({
  declarations: [InicioPracticaComponent, ReporteCensoComponent, SeguimientosComponent, CrearSeguimientoComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PracticasModule { }
