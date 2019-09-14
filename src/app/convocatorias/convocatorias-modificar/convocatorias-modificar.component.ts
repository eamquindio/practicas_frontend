import { Component, OnInit } from '@angular/core';
import { Facultad } from 'src/app/convocatorias/entity/facultad';
import { Empresa } from 'src/app/convocatorias/entity/empresa';
import { Ciclo } from 'src/app/convocatorias/entity/ciclo';
import { TipoPractica } from 'src/app/convocatorias/entity/tipo-practica';
import { Programa } from 'src/app/convocatorias/entity/programa';



@Component({
  selector: 'app-convocatorias-modificar',
  templateUrl: './convocatorias-modificar.component.html',
  styleUrls: ['./convocatorias-modificar.component.css']
})
export class ConvocatoriasModificarComponent implements OnInit {

  facultad: Facultad[];
  empresa: Empresa[];
  ciclo: Ciclo[];
  tipoPractica: TipoPractica[];
  facultadSelect: Programa[];
  facultadIngeniera: Programa[];
  facultadAdministracion: Programa[];
  facultadDiseno: Programa[];
  sinFacultad: Programa[];

  ngOnInit() {
    this.cargar();
    this.cargarProgrmas(0);
  }

  cargarProg(facultad): void {
    this.cargarProgrmas(facultad);
  }

  cargar(): void {
    this.facultad = [
      {id: 1, nombre: 'Ingenieria'},
      {id: 2, nombre: 'Ciencias Administrativas'},
      {id: 3, nombre: 'Diseño y publicidad'}
    ];
    this.empresa =[
      {id: 1, nombre: 'Safe'},
      {id: 2, nombre: 'Yuxi'},
      {id: 3, nombre: 'Heinsohn'}
    ];
    this.ciclo = [
      {id: 1, nombre: 'Tecnico'},
      {id: 2, nombre: 'Tecnologo'}
    ];
    this.tipoPractica = [
      {id: 1, nombre: '240 hrs'},
      {id: 2, nombre: 'Objetivos'},
      {id: 3, nombre: 'Contrato aprendizaje'},
      {id: 4, nombre: 'Homologacion'}
    ];
    this.facultadIngeniera = [
      {id: 1, nombre: 'Ingenieria de software'},
      {id: 2, nombre: 'Ingenieria industrial'},
      {id: 3, nombre: 'Ingenieria mecatronica'}
    ];
    this.facultadAdministracion=[
      {id: 1, nombre: 'Negocios internacionales'},
      {id: 2, nombre: 'Administracion de empresas'}
    ];
    this.facultadDiseno=[
      {id: 1, nombre: 'Diseño visual digital'},
      {id: 2, nombre: 'Publicidad'}
    ];
    this.sinFacultad=[
      {id: 1, nombre: 'seleccione facultad'}
    ];
  }

  cargarProgrmas(facultad): void {
    if (facultad === 0) {
      this.facultadSelect = this.sinFacultad;
    }
    if (facultad === 1) {
      this.facultadSelect = this.facultadIngeniera;
    }
    if (facultad === 2) {
      this.facultadSelect = this.facultadAdministracion;
    }
    if (facultad === 3) {
      this.facultadSelect = this.facultadDiseno;
    }
  }
}
