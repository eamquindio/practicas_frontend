import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inicio-practica',
  templateUrl: './inicio-practica.component.html',
  styleUrls: ['./inicio-practica.component.css']
})
export class InicioPracticaComponent implements OnInit {


  typePrac: any[] = [
    {
      name: '240 horas'
    },
    {
      name: 'objetivos'
    }
  ];

  cicles: any[] = [
    {
      name: 'Tecnico'
    },
    {
      name: 'Tegnologo'
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
