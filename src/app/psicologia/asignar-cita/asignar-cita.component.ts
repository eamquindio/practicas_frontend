import { Component, OnInit } from '@angular/core';
import { PeticionesService } from './../../services/peticiones.service';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-asignar-cita',
  templateUrl: './asignar-cita.component.html',
  styleUrls: ['./asignar-cita.component.css']
})
export class AsignarCitaComponent implements OnInit {

  appointment: any = {
    idCita: '4',
    fechaHora: '',
    psicologoCedula: '',
    estudianteId: '',
    estado: '',
    titulo: '',
    descripcion: ''
  };
  data: any;
  constructor(private peticion: PeticionesService) { }

  limpiar() {
    this.appointment.this.idCita = '4';
    this.appointment.this.fechaHora = '';
    this.appointment.this.psicologoCedula = '';
    this.appointment.this.estudianteId = '';
    this.appointment.this.estado = '';
    this.appointment.this.titulo = '';
    this.appointment.this.descripcion = '';

  }

  ngOnInit() {

  }

  addAppointment(formNew: NgForm) {
    this.peticion.post('/psicologia/appointment/',
      this.appointment).subscribe(data => {
        console.log(data);
      });
    console.log(this.appointment);
  }

}
