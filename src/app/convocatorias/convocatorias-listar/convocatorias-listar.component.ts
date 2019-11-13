import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-convocatorias-listar',
  templateUrl: './convocatorias-listar.component.html',
  styleUrls: ['./convocatorias-listar.component.css']
})
export class ConvocatoriasListarComponent implements OnInit {

  carrera: any = [];
  ciclo: any;

  convocatorys: any = [];

  constructor(private peticion: PeticionesService) {

  }

  ngOnInit() {
    this.cargar();
    this.llenarDatos();
    this.llenarCarrera();
  }

  llenarDatos(): void {
    this.peticion.get('/convocatorias').subscribe( data => {
      this.convocatorys = data.body;
    });
  }

  llenarCarrera(): void {
    this.peticion.get('/programs').subscribe( data => {
      console.log(data.body);
      this.carrera = data.body;
    });
  }

  cargar(): void {
    this.ciclo = [
      { id: 1, nombre: ' Tecnico ' },
      { id: 2, nombre: ' Tecnologico ' },
      { id: 3, nombre: ' Profesional ' }
    ];

  }

}
