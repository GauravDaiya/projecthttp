import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

export const authguardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService);  
  const router = inject(Router); 
  if(authService.hasToken()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
  
};
