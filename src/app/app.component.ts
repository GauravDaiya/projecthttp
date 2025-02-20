import { Component, ViewEncapsulation } from '@angular/core';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'projecthttp';
  // options: AnimationOptions = {
  //   path: 'assets/loader.json',
  //   autoplay: true,
  //   loop: true
  // };
  // styles: Partial<CSSStyleDeclaration> = {
  //   width: '300px',
  //   height: '300px',
  //   borderRadius: '10px',
  //   margin: '0 auto',
  //   backgroundColor: '#ffffff98'
  // };
}
