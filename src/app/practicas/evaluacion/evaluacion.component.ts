import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PeticionesService } from './../../services/peticiones.service';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {

  constructor(private peticion: PeticionesService) { }

  evaluation: any = {
    id: 1,
    id_practica_estudiante: 2,
    vinculacion_laboral: '',
    nombre_evaluador: '',
    comentario_empresa: '',
    satisfaccion: 'Seleccione una opcion',
    porque_satisfaccion: '',
    capacidades: 'Seleccione una opcion',
    comportamiento: 'Seleccione una opcion',
    actitud_aptitud: 'Seleccione una opcion',
    imagen: 'Seleccione una opcion'
  };

  ngOnInit() {
  }

  registerEvaluation(formNew: NgForm) {
    if (this.evaluation.vinculacion_laboral) {
      this.evaluation.vinculacion_laboral = 'true';
    } else {
      this.evaluation.vinculacion_laboral = 'false';
    }
    this.peticion.post('http://34.70.190.6/api/evaluacion/evaluation',
     JSON.stringify(this.evaluation.value)).subscribe( data => {
      console.log(data);
     });
  }

}
