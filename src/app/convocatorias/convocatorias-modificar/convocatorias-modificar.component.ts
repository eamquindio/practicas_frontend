import { Component, OnInit } from '@angular/core';
import { Facultad } from 'src/app/convocatorias/entity/facultad';
import { Empresa } from 'src/app/convocatorias/entity/empresa';
import { Ciclo } from 'src/app/convocatorias/entity/ciclo';
import { TipoPractica } from 'src/app/convocatorias/entity/tipo-practica';
import { Programa } from 'src/app/convocatorias/entity/programa';
import { Estado } from 'src/app/convocatorias/entity/estado';
import { Coordinador } from 'src/app/convocatorias/entity/coordinador';
import { NgForm } from '@angular/forms';
import { PeticionesService } from 'src/app/services/peticiones.service';
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
  estado: Estado[];
  coordinador: Coordinador[];
  facultadSelect: Programa[];
  facultadIngeniera: Programa[];
  facultadAdministracion: Programa[];
  facultadDiseno: Programa[];
  sinFacultad: Programa[];
  annoucement: any = {
    id: 1,
    fecha_inicio: '',
    fecha_final: '',
    id_empresa: 0,
    tipo_practica: '-Seleccione-',
    id_facultad: 0,
    id_programa: 0,
    id_ciclo: 0,
    estado: '-Seleccione-',
    numero_estudiantes: 0,
    id_coordinador: 0
  };
  constructor(private peticiones: PeticionesService) {}
  cargarObjeto(): void {
    this.annoucement.id = 1;
    this.annoucement.fecha_inicio = '';
    this.annoucement.fecha_final = '';
    this.annoucement.id_empresa = 0;
    this.annoucement.tipo_practica = '-Seleccione-';
    this.annoucement.id_facultad = 0;
    this.annoucement.id_programa = 0;
    this.annoucement.id_ciclo = 0;
    this.annoucement.estado = '-Seleccione-';
    this.annoucement.numero_estudiantes = 0;
    this.annoucement.id_coordinador = 0;
  }
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
    this.empresa = [
      {id: 1, nombre: 'Safe'},
      {id: 2, nombre: 'Yuxi'},
      {id: 3, nombre: 'Heinsohn'}
    ];
    this.coordinador = [
      {id: 1, nombre: 'Erika'},
      {id: 2, nombre: 'Martin'}
    ];
    this.estado = [
      {id: 1, nombre: 'Activo'},
      {id: 2, nombre: 'Inactivo'}
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
    this.facultadAdministracion = [
      {id: 1, nombre: 'Negocios internacionales'},
      {id: 2, nombre: 'Administracion de empresas'}
    ];
    this.facultadDiseno = [
      {id: 1, nombre: 'Diseño visual digital'},
      {id: 2, nombre: 'Publicidad'}
    ];
    this.sinFacultad = [
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
  addCategory(formNew: NgForm) {
    this.peticiones.put('convocatoria/convocatorias/' + this.annoucement.id,
    this.annoucement).subscribe(data => {
      console.log(data);
    });
    this.cargarObjeto();
    console.log(this.annoucement);
  }
}

