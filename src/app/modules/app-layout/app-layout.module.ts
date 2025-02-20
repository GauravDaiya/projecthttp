import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../../shared/material/material.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { myInterceptorInterceptor } from '../../core/interceptors/my-interceptor.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    MaterialModule,
    NgxSpinnerModule,
    LottieComponent
  ],
  providers: [
    provideHttpClient(withInterceptors([myInterceptorInterceptor])),
    provideLottieOptions({
      player: () => player,
    }),
  ]
})
export class AppLayoutModule { }
