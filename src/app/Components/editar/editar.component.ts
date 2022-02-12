import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  tareas: any;
  inputText= '';
  activarInput = false;
  constructor() { }

  ngOnInit(): void {
    this.tareas =  JSON.parse(localStorage.getItem('tareas') || '[]');
    console.log(this.tareas);
  }

  editarTarea(ti: number){
    this.activarInput = !this.activarInput;
    if(this.inputText !== '') {
      this.tareas[ti] = this.inputText;
      localStorage.setItem('tareas', JSON.stringify(this.tareas));
      this.activarInput = false;
    }
    
  }

  borrarTarea(ti: number) {
    this.tareas.splice(ti,1);
    let nuevasTareas = this.tareas;
    localStorage.setItem('tareas', JSON.stringify(nuevasTareas));
  }

}
