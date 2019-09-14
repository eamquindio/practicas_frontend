import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-solicitud-estudiante',
  templateUrl: './solicitud-estudiante.component.html',
  styleUrls: ['./solicitud-estudiante.component.css']
})
export class SolicitudEstudianteComponent implements OnInit {

  solicitud: FormGroup;
  submited = false;

  sectores: any[];
  tiposPersona: any[];
  tiposSociedad: any[];
  departamentos: any[];
  ciudades: any[];
  tiposPractica: any[];

  constructor(private formBuilder: FormBuilder) {
    this.sectores = [
      {
        id: 0,
        name: 'Comercial'
      },
      {
        id: 1,
        name: 'Servicios'
      },
      {
        id: 2,
        name: 'Privado'
      }
    ];
    this.tiposPersona = [
      {
        id: 0,
        name: 'Natural'
      },
      {
        id: 1,
        name: 'Juridica'
      }
    ];
    this.tiposSociedad = [
      {
        id: 0,
        name: 'Responsabilidad Limitada'
      },
      {
        id: 1,
        name: 'Sociedad Anonima'
      },
      {
        id: 2,
        name: 'X'
      },
      {
        id: 3,
        name: 'SAS'
      }
    ];
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
    this.tiposPractica = [
      {
        id: 0,
        name: 'Practica de 240 horas'
      },
      {
        id: 1,
        name: 'Por objetivos'
      },
      {
        id: 2,
        name: 'Contrato de aprendizaje'
      }
    ];
  }

  ngOnInit() {
    this.solicitud = this.formBuilder.group({
      nombreEmpresa: ['', Validators.required],
      sector: ['', Validators.required],
      nit: ['', Validators.required],
      tipoPersona: ['', Validators.required],
      tipoSociedad: ['', Validators.required],
      sociedadComandita: ['', Validators.required],
      fechaRegCamaraComercio: ['', Validators.required],
      nombreRepLegal: ['', Validators.required],
      personaEncargadaEstudiante: ['', Validators.required],
      cargoPersonaEncargadaEstudiante: ['', Validators.required],
      direccionEmpresa: ['', Validators.required],
      telefonoFijo: ['', Validators.required],
      celular: ['', Validators.required],
      departamento: ['', Validators.required],
      ciudad: ['', Validators.required],
      correo: ['', Validators.required],
      descripcionNegocio: ['', Validators.required],
      comoConocioEmpresa: ['', Validators.required],
      tipoPractica: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submited = true;

    if (this.solicitud.invalid) {
      alert('Debe diligenciar debidamente el formulario');
      return;
    }

    alert('Solicitud creada');

    console.log(this.solicitud.value);
  }

  get f() { return this.solicitud.controls; }

  cambiarCiudades() {
    if (this.solicitud.get('departamento').value.length !== 0) {
      this.departamentos.forEach(element => {
        if ((element.id + '') === this.solicitud.get('departamento').value) {
          this.ciudades = element.ciudades;
        }
      });
    } else {
      this.ciudades = [];
    }
  }

}
