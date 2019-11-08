import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Ciclo } from 'src/app/convocatorias/entity/ciclo';
import { Programa } from 'src/app/convocatorias/entity/programa';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-solicitud-homologacion',
  templateUrl: './solicitud-homologacion.component.html',
  styleUrls: ['./solicitud-homologacion.component.css']
})
export class SolicitudHomologacionComponent implements OnInit {

  solicitudHomo: FormGroup;
  submited = false;

  cycle: Ciclo[];
  programs: Programa[];
  departments: any[];
  cities: any[];
  type_id: any[];

  constructor(private formBuilder: FormBuilder, private peticion: PeticionesService) {


    this.departments = [
      {
        id: 0,
        name: 'Quindio',
        cities: [
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
        cities: [
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

  homologation: any = {
      id: 1,
      date: '',
      cycle: 'Seleccion opcion',
      programer_id: 'Seleccion opcion',
      student_name: '',
      type_id: 'Seleccion opcion',
      number_id: '',
      code: '',
      email: '',
      phone: '',
      function_company: '',
      company: '',
      address: '',
      department: 'Seleccion opcion',
      city: 'Seleccion opcion',
      company_phone: '',
      boss_company: '',
      position: '',
      email_company: '',
      phone_contact: '',
  };

  ngOnInit() {
    this.cargar();

    this.solicitudHomo = this.formBuilder.group({
      date: ['', Validators.required],
      cycle: ['', Validators.required],
      programer_id: ['', Validators.required],
      type_id: ['', Validators.required],
      student_name: ['', Validators.required],
      number_id: ['', Validators.required],
      code: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      function_company: ['', Validators.required],
      company: ['', Validators.required],
      address: ['', Validators.required],
      department: ['', Validators.required],
      city: ['', Validators.required],
      company_phone: ['', Validators.required],
      boss_company: ['', Validators.required],
      email_company: ['', Validators.required],
      position: ['', Validators.required],
      phone_contact: ['', Validators.required]
    });
  }

  registerHomologation(formNew: NgForm) {
    this.peticion.post('homologation',
      this.homologation).subscribe(data => {
        this.limpiarCampos();
      });
  }

  limpiarCampos() {
    this.homologation.this.id = 1;
    this.homologation.this.id.date = '';
    this.homologation.this.id.cycle = 'Seleccion opcion';
    this.homologation.this.id.programer_id = 'Seleccion opcion';
    this.homologation.this.id.student_name = '';
    this.homologation.this.id.type_id = 'Seleccion opcion';
    this.homologation.this.id.number_id = '';
    this.homologation.this.id.code = '';
    this.homologation.this.id.email = '';
    this.homologation.this.id.phone = '';
    this.homologation.this.id.function_company = '';
    this.homologation.this.id.company = '';
    this.homologation.this.id.address = '';
    this.homologation.this.id.department = 'Seleccion opcion';
    this.homologation.this.id.city = 'Seleccion opcion';
    this.homologation.this.id.company_phone = '';
    this.homologation.this.id.boss_company = '';
    this.homologation.this.id.position = '';
    this.homologation.this.id.email_company = '';
    this.homologation.this.id.phone_contact = '';
  }

  cargar(): void {

    this.cycle = [
      {id: 1, nombre: 'Tecnico'},
      {id: 2, nombre: 'Tecnologo'}
    ];

    this.type_id = [
      {id: 1, nombre: 'C.C'},
      {id: 2, nombre: 'T.I'}
    ];

    this.programs = [
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
    if (this.solicitudHomo.get('department').value.length !== 0) {
      this.departments.forEach(element => {
        if ((element.id + '') === this.solicitudHomo.get('department').value) {
          this.cities = element.cities;
        }
      });
    } else {
      this.cities = [];
    }
  }
}
