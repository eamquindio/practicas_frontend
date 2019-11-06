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
    idCita: '',
    fechaHora: '2017-03-03',
    psicologoCedula: '1234',
    estudianteId: '',
    estado: '',
    titulo: '',
    descripcion: ''
  };

  constructor(private peticion: PeticionesService) { }

  limpiar() {
    this.appointment.this.idCita = '';
    this.appointment.this.fechaHora = '2017-03-03';
    this.appointment.this.psicologoCedula = '';
    this.appointment.this.estudianteId = '';
    this.appointment.this.estado = '';
    this.appointment.this.titulo = '';
    this.appointment.this.descripcion = '';

  }

  ngOnInit() {
   /* this.peticion.get('/list',
    this.appointment.estudianteId).subscribe(data => {
      console.log('EPA' + data);
    });
    console.log('OJO ' + this.appointment.estudianteId);
    */
  }

  addAppointment(formNew: NgForm) {
    this.peticion.post('psicoogia/appointment/',
      this.appointment).subscribe(data => {
        console.log('la data del post' + data);
      });
    console.log(this.appointment);
  }

}

