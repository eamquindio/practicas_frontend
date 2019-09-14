import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-convocatorias-listar',
  templateUrl: './convocatorias-listar.component.html',
  styleUrls: ['./convocatorias-listar.component.css']
})
export class ConvocatoriasListarComponent implements OnInit {

  carrera: any;
  ciclo: any;

  constructor() {

    }

  ngOnInit() {
    this.cargar();
  }

  cargar() :void {

    this.carrera =[
                 
      {id:1, nombre: ' Ingenieria de software '},
      {id:2, nombre:' Administracion de negocios '},
      {id:3, nombre:' Administacion de empresas '},
      {id:4, nombre:' Ingenieria industrial '},
      {id:5, nombre:' Ingenieria mecatronica '},
      {id:6, nombre:' Contaduria publica '},
      {id:7, nombre:' Publicidad '},
      {id:8, nombre:' Diseño visual digital '},
    ];

    this.ciclo =[
      {id:1, nombre:' Tecnico '},
      {id:2, nombre:' Tecnologico '},
      {id:3, nombre:' Profesional '}
    ]

  }

}
