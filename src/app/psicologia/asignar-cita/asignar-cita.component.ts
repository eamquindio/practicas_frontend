import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignar-cita',
  templateUrl: './asignar-cita.component.html',
  styleUrls: ['./asignar-cita.component.css']
})
export class AsignarCitaComponent implements OnInit {

  programa: any;
  practica: any;
  estudiante: any;
  constructor() { }

  ngOnInit() {
    this.programa = [
      {id: 1, nombre : ' Ingenieria de software '},
      {id: 2, nombre : ' Administracion de negocios '},
      {id: 3, nombre : ' Administacion de empresas '},
      {id: 4, nombre : ' Ingenieria industrial '},
      {id: 5, nombre : ' Ingenieria mecatronica '},
      {id: 6, nombre : ' Contaduria publica '},
      {id: 7, nombre : ' Publicidad '},
      {id: 8, nombre : ' Diseño visual digital '},
    ];
    this.practica = [

    ];
    this.estudiante = [

    ];
  }

}
