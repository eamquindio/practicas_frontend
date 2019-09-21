import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudEstudianteComponent } from './solicitud-estudiante/solicitud-estudiante.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SolicitudEmpRegistrarComponent } from './solicitud-emp-registrar/solicitud-emp-registrar.component';
import { SolicitudHomologacionComponent } from './solicitud-homologacion/solicitud-homologacion.component';



@NgModule({
  declarations:
  [SolicitudEstudianteComponent,
  SolicitudEmpRegistrarComponent,
  SolicitudHomologacionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SolicitudesModule { }
