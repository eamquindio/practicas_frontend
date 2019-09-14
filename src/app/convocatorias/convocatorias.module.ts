import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvocatoriasInscripcionComponent } from './convocatorias-inscripcion/convocatorias-inscripcion.component';
import { ConvocatoriasModificarComponent } from './convocatorias-modificar/convocatorias-modificar.component';

@NgModule({
  declarations: [
    ConvocatoriasModificarComponent,
    ConvocatoriasInscripcionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConvocatoriasModule { }
