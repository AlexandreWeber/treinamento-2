import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    // Quando houver navegação para o /zipcode o angular irá carregar o módulo
    // ZipcodeModule
    path: 'zipcode',
    loadChildren: () => import('./zipcode/zipcode.module')
                       .then((module) => module.ZipcodeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
