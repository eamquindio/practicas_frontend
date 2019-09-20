import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ciclo } from 'src/app/convocatorias/entity/ciclo';
import { Programa } from 'src/app/convocatorias/entity/programa';

@Component({
  selector: 'app-solicitud-homologacion',
  templateUrl: './solicitud-homologacion.component.html',
  styleUrls: ['./solicitud-homologacion.component.css']
})
export class SolicitudHomologacionComponent implements OnInit {

  solicitudHomo: FormGroup;
  submited = false;

  ciclo: Ciclo[];
  programas: Programa[];
  tipoIdentificacion: any[];
  departamentos: any[];
  ciudades: any[];
  tipoId: any[];

  constructor(private formBuilder: FormBuilder) {
    this.departamentos = [
      {
        id: 0,
        name: 'Quindio',
        ciudades: [
          {
            id: 0,
            name: 'Armenia'
          },
          {
            id: 1,
            name: 'Calarca'
          }
        ]
      },
      {
        id: 1,
        name: 'Huila',
        ciudades: [
          {
            id: 0,
            name: 'Neiva'
          },
          {
            id: 1,
            name: 'Pitalito'
          }
        ]
      }
    ];
  }

  ngOnInit() {
    this.cargar();

    this.solicitudHomo = this.formBuilder.group({
      fecha: ['', Validators.required],
      ciclo: ['', Validators.required],
      programa: ['', Validators.required],
      tipo: ['', Validators.required],
      nombreEstudiante: ['', Validators.required],
      numero: ['', Validators.required],
      codigo: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      funciones: ['', Validators.required],
      empresa: ['', Validators.required],
      direccion: ['', Validators.required],
      departamento: ['', Validators.required],
      ciudad: ['', Validators.required],
      telempresa: ['', Validators.required],
      jefe: ['', Validators.required],
      emailempresa: ['', Validators.required],
      cargo: ['', Validators.required],
      telcontacto: ['', Validators.required]
    });
  }
  cargar(): void{
    
    this.ciclo = [
      {id: 1, nombre: 'Tecnico'},
      {id: 2, nombre: 'Tecnologo'}
    ];

    this.tipoId = [
      {id: 1, nombre: 'C.C'},
      {id: 2, nombre: 'T.I'}
    ];

    this.programas = [
      {id: 1, nombre: 'Ingenieria de software'},
      {id: 2, nombre: 'Ingenieria industrial'},
      {id: 3, nombre: 'Ingenieria mecatronica'},
      {id: 4, nombre: 'Administracion de empresas'},
      {id: 5, nombre: 'Administracion de negocios internacionales'},
      {id: 6, nombre: 'Contaduria publica'},
      {id: 7, nombre: 'Publicidad'},
      {id: 8, nombre: 'Diseño visual digital'}
    ];
  }

  onSubmit() {
    this.submited = true;

    if (this.solicitudHomo.invalid) {
      alert('Debe diligenciar debidamente el formulario');
      return;
    }

    alert('Solicitud de homologacion creada');

    console.log(this.solicitudHomo.value);
  }

  get f() { return this.solicitudHomo.controls; }

  cambiarCiudades() {
    if (this.solicitudHomo.get('departamento').value.length !== 0) {
      this.departamentos.forEach(element => {
        if ((element.id + '') === this.solicitudHomo.get('departamento').value) {
          this.ciudades = element.ciudades;
        }
      });
    } else {
      this.ciudades = [];
    }
  }
}
