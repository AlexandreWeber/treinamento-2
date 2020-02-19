import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZipcodeComponent } from './zipcode.component';

const routes: Routes = [
  {
    // Quando houver navegação para /zipcode ele irá carregar o ZipcodeComponent
    // na tag router-outlet (está no app.component.html)
    path: '',
    component: ZipcodeComponent
  },
  {
    // Quando houver navegação para /zipcode ele irá carregar o ZipcodeComponent
    // na tag router-outlet (está no app.component.html)
    path: 'new',
    component: ZipcodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZipcodeRoutingModule { }
