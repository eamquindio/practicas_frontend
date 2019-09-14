import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvocatoriasInscripcionComponent } from './convocatorias-inscripcion/convocatorias-inscripcion.component';
import { ConvocatoriasModificarComponent } from './convocatorias-modificar/convocatorias-modificar.component';
import { ConvocatoriasListarComponent } from './convocatorias-listar/convocatorias-listar.component';

@NgModule({
  declarations: [
    ConvocatoriasModificarComponent,
    ConvocatoriasInscripcionComponent,
    ConvocatoriasListarComponent
  ],
})

export class ConvocatoriasModule { }
