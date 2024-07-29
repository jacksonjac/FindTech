import { CanActivateFn } from '@angular/router';

export const guardauthGuard: CanActivateFn = (route, state) => {
  return true;
};
