import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive-routing.module').then(m => m.ReactiveRoutingModule)
  },
  {
    path: 'template',
    loadChildren: () => import('./template/template-routing.module').then(m => m.TemplateRoutingModule)
  },
  {
    path: '**',
    redirectTo: ''

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
