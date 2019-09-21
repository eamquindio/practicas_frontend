import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  regex:string='^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$';
  loginForm= new FormGroup({
    mail: new FormControl('', [Validators.required,Validators.pattern(this.regex)]),
    password: new FormControl('', Validators.required)
  });

  imgProfile : string;
  imgBody : string;
  login : FormGroup;

  constructor() {
    this.imgProfile ='./../../../assets/imgs/studentLogin.jpg';
    this.imgBody ='./../../../assets/imgs/wallpaperSchool.jpg';
    this.login =this.loginForm;
  }

  ngOnInit() {
  }

  onSubmit(){
  }

}
