import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-convocatorias-inscripcion',
  templateUrl: './convocatorias-inscripcion.component.html',
  styleUrls: ['./convocatorias-inscripcion.component.css']
})
export class ConvocatoriasInscripcionComponent implements OnInit {

  estudiante: any = {
    nombre: 'Pedro Andres Ruiz Wartski',
    codigo: '2320162001',
  };

  convocatoria: any = {
    id: 0,
    fechaInicio: '13/Mayo/2013',
    empresa: 'Empresa 1',
    facultad: 'Ingenieria',
    ciclo: 'Tecnico',
    fechaFin: '13/Mayo/2014',
    programa: 'Software',
    tipoPractica: '240 horas',
    numeroEstudiantes: '5',
  };

  constructor(private activeRoute: ActivatedRoute, private httpService: PeticionesService) { }

  ngOnInit() {
    const idConvocatory = this.activeRoute.snapshot.params.id;
    console.log(idConvocatory);
    this.httpService.get(`pasantiaseam/convocatorias/${idConvocatory}`).subscribe(
      data => {
        console.log(data.body);
        const body = data.body;

        this.convocatoria.id = body.id;
        this.convocatoria.fechaInicio = body.fecha_inicio;
        this.convocatoria.empresa = body.id_empresa.business_name;
        this.convocatoria.facultad = body.id_facultad.name;
        this.convocatoria.ciclo = body.id_ciclo;
        this.convocatoria.fechaFin = body.fecha_final;
        this.convocatoria.programa = body.id_programa.name;
        this.convocatoria.tipoPractica = body.tipo_practica;
        this.convocatoria.numeroEstudiantes = body.numero_estudiantes;
      }
    );
  }

}
