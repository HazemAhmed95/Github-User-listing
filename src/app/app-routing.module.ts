import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { UsersComponent } from "app/users/users.component";
import { AboutComponent } from './about/about.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  }
  ,
  {
    path: 'about',
    component: AboutComponent,
  }
  ,
  {
    path: 'users',
    component: UsersComponent,
    children: [{path:":id", component:UsersDetailsComponent }]
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
