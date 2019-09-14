import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPracticaComponent } from './inicio-practica/inicio-practica.component';
import { ReporteCensoComponent } from './reporte-censo/reporte-censo.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [InicioPracticaComponent, ReporteCensoComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PracticasModule { }
