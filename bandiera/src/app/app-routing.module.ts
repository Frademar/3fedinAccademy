import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { DettagliComponent } from './dettagli/dettagli.component';


const routes: Routes = [
  {path: '', component: ListaComponent},{path: 'dettagli/:nome', component: DettagliComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
