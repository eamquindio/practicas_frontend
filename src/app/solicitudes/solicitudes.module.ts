import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudEstudianteComponent } from './solicitud-estudiante/solicitud-estudiante.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SolicitudEmpRegistrarComponent } from './solicitud-emp-registrar/solicitud-emp-registrar.component';



@NgModule({
  declarations:
  [SolicitudEstudianteComponent,
  SolicitudEmpRegistrarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SolicitudesModule { }
