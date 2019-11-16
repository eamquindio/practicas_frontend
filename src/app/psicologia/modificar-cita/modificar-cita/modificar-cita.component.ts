import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';
import { NgForm } from '@angular/forms';
import { GestionUsuariosService } from 'src/app/services/gestion.usuarios.service';

@Component({
  selector: 'app-modificar-cita',
  templateUrl: './modificar-cita.component.html',
  styleUrls: ['./modificar-cita.component.css']
})
export class ModificarCitaComponent implements OnInit {

  appointment: any = {
    idCita: '',
    fechaHora: '',
    psicologoCedula: this.user.getuser().idUser,
    estudianteId: '',
    estado: '',
    titulo: '',
    descripcion: '',

  };
  constructor(private peticiones: PeticionesService, private user: GestionUsuariosService) {}

  cargarObjeto(): void {
    this.appointment.idCita = '';
    this.appointment.fechaHora = '';
    this.appointment.psicologoCedula = this.user.getuser().idUser;
    this.appointment.estudianteId = '';
    this.appointment.estado = '';
    this.appointment.titulo = '';

  }
  ngOnInit() {
    this.appointment.psicologoCedula = this.user.getuser().idUser;
  }




  updateAppointment(formNew: NgForm) {
    console.log(JSON.stringify(this.appointment));
    this.peticiones.put('/appointment/',
    this.appointment).subscribe(data => {
      console.log(data);
      this.cargarObjeto();

    });
  }

  getAppointment() {
    console.log('/appointment/' + this.appointment.idCita);
    this.peticiones.get('/appointment/' + this.appointment.idCita).subscribe(data => {

      this.appointment.fechaHora = data.body.fechaHora;
      this.appointment.psicologoCedula = data.body.psicologoCedula;
      this.appointment.estudianteId = data.body.estudianteId;
      this.appointment.estado = data.body.estado;
      this.appointment.titulo = data.body.titulo;


      this.appointment.descripcion = data.body.descripcion;


      console.log(data.body);
    });



  }

}
