import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../model/usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  forma!: FormGroup;
  usuario: Usuario = {
    email: '',
    password:''
  }
  userSave: any;

  constructor(private formBuilder: FormBuilder, private router : Router) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.userSave = JSON.parse(localStorage.getItem('usuario') as string);
    if (this.userSave !== null) {
      this.router.navigate(['formularios']);
    }
  }

  crearFormulario(){
    this.forma = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    }); 
  }

  asignar() {
    this.usuario.email = this.forma.value.email;
    this.usuario.password = this.forma.value.password;
  }

  enviarFormulario() {
    this.asignar();
    localStorage.setItem('usuario',JSON.stringify(this.usuario));
    this.router.navigate(['formularios']);

  }



}
