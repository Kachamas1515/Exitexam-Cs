import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CovidComponent } from './covid/covid.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
    data: { title: 'KMITL CS' }
  },
  {
    path: 'covidReport',
    component: CovidComponent,
    data: { title: 'KMITL CS Covid Report' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
