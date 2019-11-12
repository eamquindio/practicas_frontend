import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignarCitaComponent } from './asignar-cita/asignar-cita.component';
import { ListarCitaComponent } from './listar-cita/listar-cita.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModificarCitaComponent } from './modificar-cita/modificar-cita/modificar-cita.component';

@NgModule({
  declarations: [
    AsignarCitaComponent,
    ListarCitaComponent,
    ModificarCitaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class PsicologiaModule { }

