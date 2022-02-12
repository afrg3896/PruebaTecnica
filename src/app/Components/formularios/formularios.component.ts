import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  forma!: FormGroup;
  //tareas:any;
  listaTarea: any[] = [];
  array: any;
  

  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.listaTarea =  JSON.parse(localStorage.getItem('tareas') || '[]');
  }

  crearFormulario(){
    this.forma = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
    }); 
  }

  guardarTarea() {
    this.listaTarea.push(this.forma.value.name);
    localStorage.setItem('tareas', JSON.stringify(this.listaTarea));
  }

  irEditar(){
    this.router.navigate(['editar']);
  }

  salir(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}




