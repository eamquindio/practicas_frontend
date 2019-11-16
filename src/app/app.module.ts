import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConvocatoriasModule } from './convocatorias/convocatorias.module';
import { EmpresasModule } from './empresas/empresas.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { HomologacionesModule } from './homologaciones/homologaciones.module';
import { PracticasModule } from './practicas/practicas.module';
import { ReunionesModule } from './reuniones/reuniones.module';
import { SolicitudesModule } from './solicitudes/solicitudes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PsicologiaModule } from './psicologia/psicologia.module';
import { PaginasErrorModule } from './paginas-error/paginaserror.module';
import { LoginModule } from './login/login.module';
import { StaticPageModule } from './static-page/static-page.module';
import { HttpClientModule} from '@angular/common/http';
import { PracticaEstudianteComponent } from './practicas/practica-estudiante/practica-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticaEstudianteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ConvocatoriasModule,
    EmpresasModule,
    EstudiantesModule,
    HomologacionesModule,
    PracticasModule,
    ReunionesModule,
    SolicitudesModule,
    UsuariosModule,
    PsicologiaModule,
    PaginasErrorModule,
    LoginModule,
    StaticPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
