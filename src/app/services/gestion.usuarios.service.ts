import { Injectable } from '@angular/core';
import { Usuario } from './../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class GestionUsuariosService {

  private user: Usuario;

  constructor() {

    this.user = {
      idUser: localStorage.getItem('id'),
      mail: localStorage.getItem('mail'),
      rol: localStorage.getItem('rol'),
      token: localStorage.getItem('jwt')
    };

  }

  getuser():Usuario{
    return {
      idUser: localStorage.getItem('id'),
      mail: localStorage.getItem('mail'),
      rol: localStorage.getItem('rol'),
      token: localStorage.getItem('jwt')
    };
  };
}

