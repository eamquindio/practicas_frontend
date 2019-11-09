import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PeticionesService } from '../../services/peticiones.service';

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
  
  constructor(private formBuilder: FormBuilder, private peticiones: PeticionesService) {
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

    console.log(this.solicitud);

    let empresas : any= {};
    let solicitud1 : any= {};
    console.log(this.solicitud.value);
    empresas.business_name = this.solicitud.get('nombreEmpresa').value;
    empresas.sector = this.solicitud.get('sector').value;
    empresas.NIT = this.solicitud.get('nit').value;
    empresas.person_type = this.solicitud.get('tipoPersona').value;
    empresas.society_type = this.solicitud.get('tipoSociedad').value;
    empresas.limited_partnership = this.solicitud.get('sociedadComandita').value;
    empresas.registration_date_commerce_chamber = this.solicitud.get('fechaRegCamaraComercio').value;
    empresas.representative = this.solicitud.get('nombreRepLegal').value;
    empresas.address = this.solicitud.get('direccionEmpresa').value;
    empresas.phone = this.solicitud.get('telefonoFijo').value;
    empresas.cell_phone = this.solicitud.get('celular').value;
    empresas.department_id = this.solicitud.get('departamento').value;
    empresas.city_id = this.solicitud.get('ciudad').value;
    empresas.mail = this.solicitud.get('correo').value;
    empresas.business_description = this.solicitud.get('descripcionNegocio').value;
    solicitud1.NIT = this.solicitud.get('nit').value;
    solicitud1.how_meet_company = this.solicitud.get('comoConocioEmpresa').value;
    solicitud1.practice_type_id = this.solicitud.get('tipoPractica').value;
        
    this.peticiones.post('/empresas/company',
      empresas).subscribe(data => {
        this.peticiones.post('/solicitudes/request_student',
      solicitud1).subscribe(data => {
        alert('Empresa creada');
      });
      });
    
      
  }

  clickAddTodo(){
    
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
