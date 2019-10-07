import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  filterIdentifier = '';

  student: any =
    {
      name: 'Alvaro',
      cicle: 'Tecnico',
      program: 'Ingenieria',
      identifier: '1094974390',
      phone: '3122995236',
      age: '12',
      idRequest: '2'
    };

  requests: any[] = [
    {
      id: '1',
      name: 'Solicitud 1'
    },
    {
      id: '2',
      name: 'Solicitud 2'
    }
  ];

  practice: any = {
    nit: '',
    representative: '',
    description: '',
    cycle: '',
    typepra: '',
    estudent: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
