import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PsicologoGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    var validacion = true;
    var idrol = localStorage.getItem('rol');
    if(idrol === ''){
      validacion = false;
      this.router.navigate(['forbidden']);
    }
    if(idrol === '6' || idrol === '10'){
      validacion = true;
    }else{
      validacion = false;
      this.router.navigate(['forbidden']);
    }
    return validacion;
  }
  
}
