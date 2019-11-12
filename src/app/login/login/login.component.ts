import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { environment } from "./../../../environments/environment";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imgProfile: string;
  imgBody: string;
  login: FormGroup;
  regex = '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$';

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(this.regex)]),
      password: new FormControl('', Validators.required)
    });
  }

  constructor(private router: Router,private http: HttpClient,) {
    this.imgProfile = './../../../assets/imgs/studentLogin.jpg';
    this.imgBody = './../../../assets/imgs/wallpaperSchool.jpg';
    this.login = this.createFormGroup();
  }

  ngOnInit() {
  }

  onSubmit() {
      this.http.post(environment.SECURITY_URL+'/usuarios/login',this.login.value,{ observe: 'response' }).subscribe(
        elemento => {
          localStorage.setItem('jwt',elemento.body['id']);
          localStorage.setItem('id',elemento.body['userId']);
          localStorage.setItem('mail',this.login.value.email);
          localStorage.setItem('rol','');
          Swal.fire({
            icon: 'success',
            title: '!Bienvenido¡',
            text: 'Credenciales Validas'
          })
          this.router.navigate(['']);
          },
        error => {       
        localStorage.setItem('jwt','');
        localStorage.setItem('id',''); 
        localStorage.setItem('mail','');
        localStorage.setItem('rol','');              
          Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario invalido',
          footer: 'Por favor verificar si ingreso bien las sucursales'
        })
      });
  }
}