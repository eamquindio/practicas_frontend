import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { ConvocatoriasInscripcionComponent } from './convocatorias-inscripcion/convocatorias-inscripcion.component';
import { ConvocatoriasModificarComponent } from './convocatorias-modificar/convocatorias-modificar.component';
import { ConvocatoriasListarComponent } from './convocatorias-listar/convocatorias-listar.component';
import { CerrarConvocatoriaComponent } from './cerrar-convocatoria/cerrar-convocatoria.component';

@NgModule({
  declarations: [
    ConvocatoriasModificarComponent,
    ConvocatoriasInscripcionComponent,
    ConvocatoriasListarComponent,
    CerrarConvocatoriaComponent
  ],
=======
import { ConvocatoriasRegistrarComponent } from './convocatorias-registrar/convocatorias-registrar/convocatorias-registrar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConvocatoriasRegistrarComponent],
>>>>>>> [resolves #1] front-end announcement form
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],

})

export class ConvocatoriasModule { }
