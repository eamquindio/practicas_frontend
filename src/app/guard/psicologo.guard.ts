import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PsicologoGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    let validacion = true;
    const idrol = localStorage.getItem('rol');
    if (idrol === '6' || idrol === '10') {
      validacion = true;
    } else {
      validacion = false;
      this.router.navigate(['forbidden']);
    }
    return validacion;
  }

}
