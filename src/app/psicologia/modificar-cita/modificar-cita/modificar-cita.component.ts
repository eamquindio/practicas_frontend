import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modificar-cita',
  templateUrl: './modificar-cita.component.html',
  styleUrls: ['./modificar-cita.component.css']
})
export class ModificarCitaComponent implements OnInit {

  appointment: any = {
    idCita: 1,
    fechaHora: '',
    psicologoCedula: '',
    estudianteId: '',
    estado: '',
    titulo: '',
    descripcion: '',

  };
  constructor(private peticiones: PeticionesService) {}

  cargarObjeto(): void {
    this.appointment.idCita = 1;
    this.appointment.fechaHora = '';
    this.appointment.psicologoCedula = '';
    this.appointment.estudianteId = '';
    this.appointment.estado = '';
    this.appointment.titulo = '';

  }
  ngOnInit() {

  }




  updateAppointment(formNew: NgForm) {
    console.log(JSON.stringify(this.appointment));
    this.peticiones.put('/appointment/',
    this.appointment).subscribe(data => {
      console.log(data);
      this.cargarObjeto();

    });
  }

}
