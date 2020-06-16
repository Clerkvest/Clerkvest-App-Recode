import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestgroundComponent } from './pages/testground/testground.component';
import { EmptyLayoutComponent } from './layout/empty-layout/empty-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NavigatorLayoutComponent } from './layout/navigator-layout/navigator-layout.component';


const routes: Routes = [
  {
    path: '',
    component: NavigatorLayoutComponent,
    children: [
      {
        path: '',
        component: TestgroundComponent
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
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
