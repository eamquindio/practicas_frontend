import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    var validacion = true;
    var idrol = localStorage.getItem('rol');
    if(idrol === ''){
      validacion = false;
      this.router.navigate(['forbidden']);
    }
    if(idrol === '8' || idrol === '10'){
      validacion = true;
    }else{
      validacion = false;
      this.router.navigate(['forbidden']);
    }
    return validacion;
  }
  
}
