import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      mail: new FormControl('', [Validators.required, Validators.pattern(this.regex)]),
      password: new FormControl('', Validators.required)
    });
  }

  constructor() {
    this.imgProfile = './../../../assets/imgs/studentLogin.jpg';
    this.imgBody = './../../../assets/imgs/wallpaperSchool.jpg';
    this.login = this.createFormGroup();
  }

  ngOnInit() {
  }

  onSubmit() {
  }

}
