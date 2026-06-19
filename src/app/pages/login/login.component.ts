import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {


  loginForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {


    this.loginForm = this.fb.group({


      email: ['', [Validators.required, Validators.email]],


      password: ['', [Validators.required, Validators.minLength(6)]]


    });


  }


 login() {


  console.log(this.loginForm.value);


  const email = this.loginForm.value.email;
  const password = this.loginForm.value.password;


  if (
    email === 'admin@travelapp.com' &&
    password === '123456'
  ) {


    console.log('Login correcto');


    this.router.navigate(['/home']);


  } else {


    console.log('Login incorrecto');


    alert('Credenciales incorrectas');


  }
  }
}