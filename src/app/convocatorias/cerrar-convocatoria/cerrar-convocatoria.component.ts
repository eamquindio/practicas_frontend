import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cerrar-convocatoria',
  templateUrl: './cerrar-convocatoria.component.html',
  styleUrls: ['./cerrar-convocatoria.component.css']
})
export class CerrarConvocatoriaComponent implements OnInit {

  cerrar: any = {
    id: '1',
    descripcion: ''
  };

  constructor(private peticion: PeticionesService) { }

  ngOnInit() {
  }

  cerrarConv(formNew: NgForm) {
    console.log(this.cerrar);
  }

}