import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FormulariosComponent } from './Components/formularios/formularios.component';
import { EditarComponent } from './Components/editar/editar.component';

const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'formularios', component: FormulariosComponent},
  { path:'editar', component: EditarComponent},
  {path: '**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
