import { NotFoundComponent } from './execption/pages/not-found/not-found.component';
import { UnauthorizedComponent } from './execption/pages/unauthorized/unauthorized.component';
import { InternalServerErrorComponent } from './execption/pages/internal-server-error/internal-server-error.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestgroundComponent } from './pages/testground/testground.component';


const routes: Routes = [
  {path: 'buffer/test', component: TestgroundComponent},
  {path: '500', component: InternalServerErrorComponent},
  {path: '401', component: UnauthorizedComponent},
  {path: '400', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
