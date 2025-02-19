import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../../shared/material/material.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { myInterceptorInterceptor } from '../../core/interceptors/my-interceptor.interceptor';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    MaterialModule,
    NgxSpinnerModule
  ],
  providers: [provideHttpClient(withInterceptors([myInterceptorInterceptor]))]
})
export class AppLayoutModule { }
