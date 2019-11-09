import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica-estudiante',
  templateUrl: './practica-estudiante.component.html',
  styleUrls: ['./practica-estudiante.component.css']
})
export class PracticaEstudianteComponent implements OnInit {

  carrera: any;
  ciclo: any;


  practices: any[] = [
    {
      id: 1,
      fecha_inicio: '',
      practica_id: '3',
      estado_id: 'activo',
      estudiante_id: 'cinisterra'
    },
    {
      id: 2,
      fecha_inicio: '',
      practica_id: '1',
      estado_id: 'activo',
      estudiante_id: 'quirmaa'
    },
    {
      id: 3,
      fecha_inicio: '',
      practica_id: '2',
      estado_id: 'activo',
      estudiante_id: 'alvaro'
    }
  ];

  constructor() {

  }

  ngOnInit() {
    this.cargar();
  }

  cargar(): void {

    this.carrera = [
      { id: 1, nombre: ' alvaro ' },
      { id: 2, nombre: ' quirmaa ' },
      { id: 3, nombre: ' cinisterra ' },
    ];

  }

}
