import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CreateTaskComponent } from './core/modals/create-task/create-task.component';
import { MaterialModule } from './shared/material/material.module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { myInterceptorInterceptor } from './core/interceptors/my-interceptor.interceptor';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { LottieComponent, provideCacheableAnimationLoader, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';


@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    LottieComponent
  ],
  providers: [
    provideAnimations(),
    provideNativeDateAdapter(),
    provideHttpClient(),
    DatePipe,
    provideHttpClient(withInterceptors([myInterceptorInterceptor])),
    provideCacheableAnimationLoader(),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
