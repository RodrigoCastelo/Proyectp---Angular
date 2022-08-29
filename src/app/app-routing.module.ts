import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:'main', component: MainComponent},
  {path:'formularios', component: FormularioComponent}
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
