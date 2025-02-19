import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay, finalize, tap } from 'rxjs/operators';

export const myInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const spinner = inject(NgxSpinnerService);

  if (!spinner) {
    console.error('NgxSpinnerService not injected properly!');
    return next(req);
  }

  console.log('Interceptor Executed: Showing Spinner');
  spinner.show(); 

  return next(req).pipe(
    delay(5000),
    tap({
      next: (response) => console.log('API Response:', response), 
      error: (error) => console.error('API Error:', error), 
    }),
    finalize(() => {
      console.log('Interceptor Completed: Hiding Spinner');
      spinner.hide(); 
    })
  );
};
