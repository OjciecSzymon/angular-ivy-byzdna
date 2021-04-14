import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GridComponent } from './components/home/summary/grid/grid.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'grid', component: GridComponent },
  { path: '', redirectTo: '/home',pathMatch: 'full' },
  { path: '*', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
