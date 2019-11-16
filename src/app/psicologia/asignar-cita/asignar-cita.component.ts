import { Component, OnInit } from '@angular/core';
import { PeticionesService } from './../../services/peticiones.service';
import { NgForm } from '@angular/forms';
import { GestionUsuariosService } from 'src/app/services/gestion.usuarios.service';

@Component({
  selector: 'app-asignar-cita',
  templateUrl: './asignar-cita.component.html',
  styleUrls: ['./asignar-cita.component.css']
})
export class AsignarCitaComponent implements OnInit {

  appointment: any = {
    idCita: '11',
    fechaHora: '',
    psicologoCedula: this.user.getuser().idUser,
    estudianteId: '',
    estado: '',
    titulo: '',
    descripcion: ''
  };

  constructor(private peticion: PeticionesService, private user: GestionUsuariosService) { }

  limpiar() {
    this.appointment.this.idCita = '11';
    this.appointment.this.fechaHora = '';
    this.appointment.this.psicologoCedula = this.user.getuser().idUser;
    this.appointment.this.estudianteId = '';
    this.appointment.this.estado = '';
    this.appointment.this.titulo = '';
    this.appointment.this.descripcion = '';

  }

  ngOnInit() {
    this.appointment.psicologoCedula = this.user.getuser().idUser;


  }

  addAppointment(formNew: NgForm) {
    this.peticion.post('/psicologia/appointment/',
      this.appointment).subscribe(data => {
        console.log(data);
      });
    console.log(this.appointment);
  }

}
