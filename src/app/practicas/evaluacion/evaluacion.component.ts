import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {

  constructor() { }

  evaluation: any = {
    id: 0,
    id_practica_estudiante: 1,
    vinculacion_laboral: '',
    nombre_evaluador: '',
    comentario_empresa: '',
    satisfaccion: '',
    porque_satisfaccion: '',
    capacidades: 'Seleccione una opcion',
    comportamiento: 'Seleccione una opcion',
    actitud_aptitud: 'Seleccione una opcion',
    imagen: 'Seleccione una opcion'
  };

  ngOnInit() {
  }

  addCategory(formNew: NgForm) {
    console.log(this.evaluation);
  }

}
