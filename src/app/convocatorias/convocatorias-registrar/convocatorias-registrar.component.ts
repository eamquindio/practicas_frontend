import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-convocatorias-registrar',
  templateUrl: './convocatorias-registrar.component.html',
  styleUrls: ['./convocatorias-registrar.component.css']
})
export class ConvocatoriasRegistrarComponent implements OnInit {

  convocatoriaForm: FormGroup;
  campoFechaInicio: boolean;
  campoFechaFin: boolean;
  campoDescripcion: boolean;
  campoNumero: boolean;
  createFormGroup() {
    return new FormGroup({
      fechaInicio: new FormControl('', Validators.required),
      fechaFin: new FormControl('', Validators.required),
      numeroEstudiantes: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      observaciones: new FormControl('', Validators.required),
      estado: new FormControl(),
      id_solicitud: new FormControl(),
      coordinador: new FormControl()
    });
  }

  constructor() {
    this.convocatoriaForm = this.createFormGroup();
    this.campoFechaInicio = false;
    this.campoFechaFin = false;
    this.campoDescripcion = false;
    this.campoNumero = false;
  }

  ngOnInit() {

  }

  onSaveForm() {
    if (this.convocatoriaForm.valid) {
      this.convocatoriaForm.get("id_solicitud").setValue("1");
      this.convocatoriaForm.get("estado").setValue("ACTIVO");
      this.convocatoriaForm.get("coordinador").setValue("1");
      console.log(this.convocatoriaForm.value);
      //this.servicio.create(this.escenarioForm.value);
      this.onResetForm();
    } else {
      if (this.convocatoriaForm.get('fechaInicio').invalid) {
        this.campoFechaInicio = true;
      }
      if (this.convocatoriaForm.get('fechaFin').invalid) {
        this.campoFechaFin = true;
      }
      if (this.convocatoriaForm.get('observaciones').invalid) {
        this.campoDescripcion = true;
      }
      if (this.convocatoriaForm.get('numeroEstudiantes').invalid) {
        this.campoNumero = true;
      }

    }
  }

  onResetForm() {
    this.convocatoriaForm.reset();
  }

  changeValidation(condi: string) {
    switch (condi) {
      case 'inicio':
        this.campoFechaInicio = false;
        break;
      case 'fin':
        this.campoFechaFin = false;
        break;
      case 'descripcion':
        this.campoDescripcion = false;
        break;
      case 'numero':
        this.campoNumero = false;
        break;
    }
  }
}
