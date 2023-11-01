import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: RegisterComponent },
  { path: 'list', component: ListComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
