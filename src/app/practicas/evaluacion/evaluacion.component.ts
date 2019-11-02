import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PeticionesService } from './../../services/peticiones.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {

  constructor(private peticion: PeticionesService) { }


  /*headers = new HttpHeaders().set
  ('', ['Access-Control-Allow-Origin', 'Content-Type', 'http://localhost:4200']);*/

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

    this.peticion.post('evaluacion/evaluation',
      this.evaluation).subscribe(data => {
        this.limpiarCampos();
      });
  }

  limpiarCampos() {
    this.evaluation.this.evaluation.id = 1;
    this.evaluation.id_practica_estudiante = 2;
    this.evaluation.vinculacion_laboral = '';
    this.evaluation.nombre_evaluador = '';
    this.evaluation.comentario_empresa = '';
    this.evaluation.satisfaccion = 'Seleccione una opcion';
    this.evaluation.porque_satisfaccion = '';
    this.evaluation.capacidades = 'Seleccione una opcion';
    this.evaluation.comportamiento = 'Seleccione una opcion';
    this.evaluation.actitud_aptitud = 'Seleccione una opcion';
    this.evaluation.imagen = 'Seleccione una opcion';
  }

}
