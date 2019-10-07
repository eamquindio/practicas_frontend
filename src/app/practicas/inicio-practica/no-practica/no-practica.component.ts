import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-no-practica',
  templateUrl: './no-practica.component.html',
  styleUrls: ['./no-practica.component.css']
})
export class NoPracticaComponent implements OnInit {


  filterIdentifier = '';

  students: any[] = [
    {
      name: 'Alvaro',
      cicle: 'Tecnico',
      program: 'Ingenieria',
      identifier: '1094974390',
      age: '12',
      idPractica: '2'
    },
    {
      name: 'Quirama',
      cicle: 'Tecnologo',
      program: 'Ingenieria',
      identifier: '1094962624',
      age: '45',
      idPractica: '1'
    }
  ];

  practices: any[] = [
    {
      id: '1',
      name: 'Practica 1'
    },
    {
      id: '2',
      name: 'Practica 2'
    }
  ];

  practice: any = {
    nit: '14224-ADSDs.2321',
    representative: 'Jhon Ricardo Quirama',
    description: '',
    cycle: '',
    typepra: '240 horas',
    estudent: ''
  };

  constructor() { }

  ngOnInit() {
  }

  registerPractice(form: NgForm) {
    console.log(this.practice);
  }


}
