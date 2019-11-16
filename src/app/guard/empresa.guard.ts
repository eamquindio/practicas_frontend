import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmpresaGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    let validacion = true;
    const idrol = localStorage.getItem('rol');
    if (idrol === '9' || idrol === '10') {
      validacion = true;
    } else {
      validacion = false;
      this.router.navigate(['forbidden']);
    }
    return validacion;
  }

}
