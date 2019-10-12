import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-convocatoria',
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.css']
})
export class ConvocatoriaComponent implements OnInit {

  filterIdentifier = '';

  students: any[] = [
    {
      name: 'Alvaro',
      cicle: 'Tecnico',
      program: 'Ingenieria',
      identifier: '1094974390',
      age: '12',
      idConvoca: '2'
    },
    {
      name: 'Quirama',
      cicle: 'Tecnologo',
      program: 'Ingenieria',
      identifier: '1094962624',
      age: '45',
      idConvoca: '1'
    }
  ];

  convocatories: any[] = [
    {
      id: '1',
      name: 'Convocatoria 1'
    },
    {
      id: '2',
      name: 'Convocatoria 2'
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


  registerPractice(form: NgForm) {
    console.log(this.practice);
  }



}
