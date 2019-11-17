import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';


@Component({
  selector: 'app-practica-estudiante',
  templateUrl: './practica-estudiante.component.html',
  styleUrls: ['./practica-estudiante.component.css']
})
export class PracticaEstudianteComponent implements OnInit {

  estudiantes: any = [];
  ciclo: any;


  practices: any[] = [];

  constructor(private peticion: PeticionesService) {

  }

  ngOnInit() {
    this.llenarDatos();
    this.llenarEstudiantes();
  }

  llenarDatos() {
    this.peticion.get('/students/practices').subscribe( data => {
      this.practices = data.body;
    });
  }

  llenarEstudiantes() {
    this.peticion.get('/students').subscribe( data => {
      console.log(data.body);
      this.estudiantes = data.body;
    });
  }

}
