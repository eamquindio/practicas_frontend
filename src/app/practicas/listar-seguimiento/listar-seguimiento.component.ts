import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-seguimiento',
  templateUrl: './listar-seguimiento.component.html',
  styleUrls: ['./listar-seguimiento.component.css']
})
export class ListarSeguimientoComponent implements OnInit {

  carrera: any;
  ciclo: any;

  constructor() {

    }

  ngOnInit() {
    this.cargar();
  }

  cargar(): void {

    this.carrera = [
      {id: 1, nombre : ' Programa'},
      {id: 2, nombre : ' Ciclo '},
      {id: 3, nombre : ' Empresa '},
    ];

    this.ciclo = [
      {id: 1, nombre: ' Tecnico '},
      {id: 2, nombre: ' Tecnologico '},
      {id: 3, nombre: ' Profesional '},
      {id: 4, nombre: ' Parquesoft '},
      {id: 5, nombre: ' Yuxi '},
      {id: 6, nombre: ' Ingenieria de software '},
      {id: 7, nombre: ' Diseño grafico '}
    ];

  }

}

