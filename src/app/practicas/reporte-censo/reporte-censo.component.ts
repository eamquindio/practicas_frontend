import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte-censo',
  templateUrl: './reporte-censo.component.html',
  styleUrls: ['./reporte-censo.component.css']
})
export class ReporteCensoComponent implements OnInit {

  facultad:any;
  programa: any;
  ciclo: any;
  semestre: any;
  constructor() { }

  ngOnInit() {
    this.facultad=[
      {id:1, nombre:'Facultad de ingenieria'},
      {id:2, nombre:'Facultad de Ciencias administrativas y financieras'},
      {id:3, nombre:'Facultad de Publicidad, Diseño y Comunicacion'}
    ];
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

    this.ciclo = [
      {id: 1, nombre: ' Tecnico '},
      {id: 2, nombre: ' Tecnologico '}
    ];

    this.semestre=[
      {id:1, nombre:'1'},
      {id:2, nombre:'2'},
      {id:3, nombre:'3'},
      {id:4, nombre:'4'},
      {id:5, nombre:'5'},
      {id:6, nombre:'6'},
      {id:7, nombre:'7'},
      {id:8, nombre:'8'},
      {id:9, nombre:'9'}
    ];
  }

}
