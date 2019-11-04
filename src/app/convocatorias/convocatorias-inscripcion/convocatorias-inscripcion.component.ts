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
    fechaInicio: '13/Mayo/2013',
    empresa: 'Empresa 1',
    facultad: 'Ingenieria',
    ciclo: 'Tecnico',
    fechaFin: '13/Mayo/2014',
    programa: 'Software',
    tipoPractica: '240 horas',
    numeroEstudiantes: '5',
  };

  constructor(private activeRoute: ActivatedRoute,private httpService : PeticionesService) { }

  ngOnInit() {
    const idConvocatory = this.activeRoute.snapshot.params.id;
    console.log(idConvocatory);
    this.httpService.get(`convocatorias/${idConvocatory}`).subscribe(
      data => console.log(data)
    );
  }

}
