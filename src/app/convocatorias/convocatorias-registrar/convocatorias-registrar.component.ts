import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeticionesService } from 'src/app/services/peticiones.service';

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
  campoTitulo: boolean;
  createFormGroup() {
    return new FormGroup({
      titulo: new FormControl('', Validators.required),
      fechaInicio: new FormControl('', Validators.required),
      fechaFin: new FormControl('', Validators.required),
      numeroEstudiantes: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      observaciones: new FormControl('', Validators.required),
      estado: new FormControl(),
      coordinador: new FormControl(),
      id_razon: new FormControl(),
      id: new FormControl(),
      id_empresa: new FormControl(),
      tipo_practica: new FormControl(),
      id_facultad: new FormControl(),
      id_programa: new FormControl(),
      id_ciclo: new FormControl(),


    });
  }

  constructor(private peticion: PeticionesService) {
    this.convocatoriaForm = this.createFormGroup();
    this.campoFechaInicio = false;
    this.campoFechaFin = false;
    this.campoDescripcion = false;
    this.campoNumero = false;
    this.campoTitulo = false;
  }

  ngOnInit() {

  }

  onSaveForm() {
    if (this.convocatoriaForm.valid) {
      this.convocatoriaForm.get('id_empresa').setValue('2');
      this.convocatoriaForm.get('id_facultad').setValue('1');
      this.convocatoriaForm.get('id_ciclo').setValue('1');
      this.convocatoriaForm.get('id_programa').setValue('1');
      this.convocatoriaForm.get('tipo_practica').setValue('2');
      this.convocatoriaForm.get('id').setValue('1');
      this.convocatoriaForm.get('estado').setValue('ACTIVO');
      this.convocatoriaForm.get('coordinador').setValue('1');
      this.convocatoriaForm.get('id_razon').setValue('1');
      console.log(this.convocatoriaForm.value);
      this.peticion.post('/convocatorias', this.convocatoriaForm.value).subscribe(data => {
        console.log(data);
        this.onResetForm();
      });

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
      if (this.convocatoriaForm.get('titulo').invalid) {
        this.campoTitulo = true;
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
      case 'titulo':
        this.campoTitulo = false;
        break;
    }
  }
}
