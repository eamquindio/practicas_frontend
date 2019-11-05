import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-solicitud-emp-registrar',
  templateUrl: './solicitud-emp-registrar.component.html',
  styleUrls: ['./solicitud-emp-registrar.component.css']
})
export class SolicitudEmpRegistrarComponent implements OnInit {

  solicitudEmpresa: any = {
    id: 2, // id
    c_name: '' ,  // nombre empresa
    Nit:  '' , // nit
    sector: ''  ,  // sector
    r_legal: '' ,  // Nombre y Apellido REP. LEGAL
    partnership:  '', // tipo sociedad
    charge_request:  '', // cargo
    c_address: '' ,  // direccion empresa
    c_phone:   '',  // telefono - celular?
    date:  '',
    c_mail:  '', // correo
     // descripcion:  ['', Validators.required],
    name_who_req: '',  // persona solicitud
    prac_ty_id:   0,  // tipo practica
    agreement_u:  '',  // conv
    programer_id:  0, // programa academico
    city:  '',   // ciudad
    //  city_id:  ['', Validators.required],
    person_type:  '',
    movil:  '',
    description: '',
    requirements:  '',
    observations:  '',
    level:  '',
    headarea: '',
    chief_charge: '',
    society_ty_id: 0,
    city_id: 0,
    req_sta_id: 0
  };

  sectores: any[];
  tiposPersona: any[];
  tiposSociedad: any[];
  levels: any[];
  tiposPractica: any[];
  programas: any[];
  ciudadesDepartamento: any[];

  constructor(
    private peticionesService: PeticionesService
  ) {
    this.sectores = [
      {
        id: 0,
        name: 'Comercial'
      },
      {
        id: 1,
        name: 'Servicios'
      }
    ];

    this.tiposPersona = [
      {
        id: 0,
        name: 'Natural'
      },
      {
        id: 1,
        name: 'Jurídica'
      }
    ];
    this.tiposSociedad = [
      {
        id: 0,
        name: 'SA'
      },
      {
        id: 1,
        name: 'Responsabilidad limitada'
      }
    ];
    this.levels = [
      {
        id: 0,
        name: 'Técnico'
      },
      {
        id: 1,
        name: 'Tecnólogo'
      }
    ];
    this.tiposPractica = [
      {
        id: 0,
        name: 'Por objetivos'
      },
      {
        id: 1,
        name: 'Por horas (240)'
      },
      {
      id: 2,
      name: 'Contrato de aprendizaje'
    }
    ];
    this.programas = [
      {
        id: 0,
        name: 'Ingeniería de software'
      },
      {
        id: 1,
        name: 'Ingeniería mecatrónica'
      },
      {
        id: 2,
        name: 'Ingeniería Industrial'
      },
      {
        id: 3,
        name: 'Diseño viual digital'
      },
      {
        id: 4,
        name: 'Publicidad'
      },
      {
        id: 5,
        name: 'Administrador de empresas'
      },
      {
        id: 6,
        name: 'Administrador de negocios'
      },
      {
        id: 7,
        name: 'Contaduría pública'
      }
    ];
    this.ciudadesDepartamento = [
      {
        id: 0,
        name: 'Armenia - Quindio'
      },
      {
        id: 1,
        name: 'Pereira - Risaralda'
      }
    ];
   }

  ngOnInit() {
  }

  registerRequest(formNew: NgForm) {
console.log(JSON.stringify(this.solicitudEmpresa));
if (this.solicitudEmpresa.agreement_u) {
  this.solicitudEmpresa.agreement_u = 'si';
} else {
  this.solicitudEmpresa.agreement_u = 'no';
}

this.peticionesService.post('pasantias/solicitudes/request_company',
      this.solicitudEmpresa).subscribe(data => {
        console.log(data);
      });
  }
}
