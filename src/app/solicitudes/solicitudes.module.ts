import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< 6f9a00aab5386a0deff6eea0c316aad297b5e99e
import { SolicitudEstudianteComponent } from './solicitud-estudiante/solicitud-estudiante.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
=======
import { SolicitudEmpRegistrarComponent } from './solicitud-emp-registrar/solicitud-emp-registrar.component';
>>>>>>> [resolves #7] solicitud empresa



@NgModule({
<<<<<<< 6f9a00aab5386a0deff6eea0c316aad297b5e99e
  declarations: [SolicitudEstudianteComponent],
=======
  declarations: [SolicitudEmpRegistrarComponent],
>>>>>>> [resolves #7] solicitud empresa
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SolicitudesModule { }
