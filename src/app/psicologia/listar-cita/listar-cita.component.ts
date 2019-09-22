import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {
  citas: any;
  constructor() { }
  ngOnInit() {

      this.citas = [
        {id: 1, hora: '12:09', fecha: '02/09/2019', estudiante: 'hernan mauricio velez rojas',
         programa: 'ingeneria', practicaoconvocatoria: 'practica', estado: 'nulo'},
         {id: 2, hora: '2:09', fecha: '02/08/2019', estudiante: 'juan david salgado',
         programa: 'ingeneria', practicaoconvocatoria: 'convocatoria', estado: 'nulo'},
         {id: 3, hora: '1:09', fecha: '01/06/2019', estudiante: 'alejandro hoyos',
         programa: 'ingeneria', practicaoconvocatoria: 'convocatoria', estado: 'nulo'}
      ];
  }
}
