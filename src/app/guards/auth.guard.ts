import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

export const authGuard = () => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (!authService.isUserAuthenticated) {
    router.navigateByUrl('/login');
  }

  return authService.isUserAuthenticated;
};
