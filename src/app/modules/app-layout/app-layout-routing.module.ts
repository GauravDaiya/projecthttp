import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { authguardGuard } from 'src/app/core/guards/authguard.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: '',
    canActivate: [authguardGuard],
    children: [
      {path: 'layout', component: LayoutComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
