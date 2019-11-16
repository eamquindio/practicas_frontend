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
    id: 10, // id
    c_name: '' ,
    Nit:  '' ,
    sector: ''  ,
    r_legal: '' ,
    partnership:  '',
    charge_request:  '', // cargo
    c_address: '' ,
    c_phone:   '',
    date:  '',
    c_mail:  '',
    name_who_req: '',
    agreement_u:  '',
    programer_id:  0,
    city:  '',
    person_type:  '',
    movil:  '',
    description: '',
    requirements:  '',
    observations:  '',
    level:  '',
    head_area: '',
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

    this.peticionesService.get('/programs/').subscribe(body => {
      this.programas = body.body;
      console.log('aqui' + JSON.stringify(body.body));
    });

    this.peticionesService.get('/practica/practiceType/all/').subscribe(body => {
      this.tiposPractica = body.body;
      console.log('aqui' + JSON.stringify(body.body));
    });
   }

  ngOnInit() {
  }

findNit(nit) {
  this.peticionesService.get('/empresas/company/find_by_nit/:NIT(\\w+)').subscribe(data => {
console.log('aquí' + data);
if (data === true) {
  this.solicitudEmpresa.this.id =  9,
  this.solicitudEmpresa.this.c_name = '' ,
  this.solicitudEmpresa.this.Nit =  '' ,
  this.solicitudEmpresa.this.sector = ''  ,
  this.solicitudEmpresa.this.r_legal = '' ,
  this.solicitudEmpresa.this.partnership =  '',
  this.solicitudEmpresa.this.charge_request =  '',
  this.solicitudEmpresa.this.c_address = '' ,
  this.solicitudEmpresa.this.c_phone =  '',
  this.solicitudEmpresa.this.date =  '',
  this.solicitudEmpresa.this.c_mail =  '',
  this.solicitudEmpresa.this.name_who_req = '',
  this.solicitudEmpresa.this.agreement_u =  '',
  this.solicitudEmpresa.this.city =  '',
  this.solicitudEmpresa.this.person_type =  '',
  this.solicitudEmpresa.this.movil = '',
  this.solicitudEmpresa.this.level =  '',
  this.solicitudEmpresa.this.head_area = '',
  this.solicitudEmpresa.this.chief_charge = '',
  this.solicitudEmpresa.this.society_ty_id = 0,
  this.solicitudEmpresa.this.city_id = 0,
  this.solicitudEmpresa.this.req_sta_id = 0;

} else {

}
  });
}

  registerRequest(formNew: NgForm) {
console.log(JSON.stringify(this.solicitudEmpresa));
if (this.solicitudEmpresa.agreement_u) {
  this.solicitudEmpresa.agreement_u = 'si';
} else {
  this.solicitudEmpresa.agreement_u = 'no';
}

this.solicitudEmpresa.programer_id = Number(this.solicitudEmpresa.programer_id);
this.solicitudEmpresa.prac_ty_id = Number(this.solicitudEmpresa.prac_ty_id);
this.solicitudEmpresa.req_sta_id = Number(this.solicitudEmpresa.req_sta_id);
console.log(JSON.stringify(this.solicitudEmpresa));

this.peticionesService.post('/solicitudes/request_company',
      this.solicitudEmpresa).subscribe(data => {
        console.log(data);
        this.clear();
      });
  }

  clear() {
  this.solicitudEmpresa.this.id =  11,
  this.solicitudEmpresa.this.c_name = '' ,
  this.solicitudEmpresa.this.Nit =  '' ,
  this.solicitudEmpresa.this.sector = ''  ,
  this.solicitudEmpresa.this.r_legal = '' ,
  this.solicitudEmpresa.this.partnership =  '',
  this.solicitudEmpresa.this.charge_request =  '',
  this.solicitudEmpresa.this.c_address = '' ,
  this.solicitudEmpresa.this.c_phone =  '',
  this.solicitudEmpresa.this.date =  '',
  this.solicitudEmpresa.this.c_mail =  '',
  this.solicitudEmpresa.this.name_who_req = '',
  this.solicitudEmpresa.this.prac_ty_id =   0,
  this.solicitudEmpresa.this.agreement_u =  '',
  this.solicitudEmpresa.this.programer_id =  0,
  this.solicitudEmpresa.this.city =  '',
  this.solicitudEmpresa.this.person_type =  '',
  this.solicitudEmpresa.this.movil = '',
  this.solicitudEmpresa.this.description = '',
  this.solicitudEmpresa.this.requirements =  '',
  this.solicitudEmpresa.this.observations =  '',
  this.solicitudEmpresa.this.level =  '',
  this.solicitudEmpresa.this.head_area = '',
  this.solicitudEmpresa.this.chief_charge = '',
  this.solicitudEmpresa.this.society_ty_id = 0,
  this.solicitudEmpresa.this.city_id = 0,
  this.solicitudEmpresa.this.req_sta_id = 0;
  }
}
