import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
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
    this.solicitudHomo = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      id: new FormControl(''),
      date: new FormControl('', Validators.required),
      cycle: new FormControl('', Validators.required),
      programer_id: new FormControl('', Validators.required),
      type_id: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      student_name: new FormControl('', Validators.required),
      number_id: new FormControl(),
      code: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      function_company: new FormControl(),
      company: new FormControl(),
      address: new FormControl(),
      department: new FormControl(),
      city: new FormControl(),
      company_phone: new FormControl(),
      boss_company: new FormControl(),
      email_company: new FormControl(),
      position: new FormControl(),
      phone_contact: new FormControl(),
    });
  }

  ngOnInit() {
    this.cargar();

  }

  registerHomologation(formNew: NgForm) {
    this.solicitudHomo.get('id').setValue('14');
    console.log(this.solicitudHomo.value);
    this.peticion.post('/homologation',
      this.solicitudHomo.value).subscribe(data => {
        console.log(data);
      });
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
