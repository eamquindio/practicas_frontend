import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  links: any[];
  toggled: boolean;

  constructor() {
    this.toggled = false;
    this.links = [
      {
        title: 'Convocatorias',
        route: 'convocatorias'
      },
      {
        title: 'Solicitud de estudiante',
        route: 'solicitud/estudiante'
      },
      {
        title: 'Modificar convocatoria',
        route: 'modificar'
      },
      {
        title: 'Registrar inicio de practica',
        route: 'practica/inicio'
      },
      {
        title: 'Cerrar convocatoria',
        route: 'convocatoria/cierre'
      },
      {
        title: 'Convocatoria',
        route: 'convocatoria'
      },
      {
        title: 'Solicitud de empresa',
        route: 'solicitud/empresa'
      },
      {
        title: 'Seguimiento estudiante',
        route: 'seguimiento'
      },
      {
        title: 'listar seguimiento',
        route: 'listar/seguimiento'
      }
    ];
  }

  ngOnInit() {
  }

  modtrarOcultarMenu() {
    this.toggled = !this.toggled;
  }

}
