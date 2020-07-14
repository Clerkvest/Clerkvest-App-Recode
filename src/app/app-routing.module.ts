import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyLayoutComponent } from './layout/empty-layout/empty-layout.component';
import { NavigatorLayoutComponent } from './layout/navigator-layout/navigator-layout.component';
import { ElementsComponent } from './pages/elements/elements.component';
import { LoginComponent } from './pages/login/login.component';
import {MeComponent} from './pages/me/me.component';

const routes: Routes = [
  {
    path: '',
    component: NavigatorLayoutComponent,
    children: [
      {
        path: '',
        component: ElementsComponent
      },
      {
        path: 'me',
        component: MeComponent
      }
    ]
  },
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
