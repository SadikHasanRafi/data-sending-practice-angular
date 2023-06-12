import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { LoginServiceService } from '../login/service/login-service.service';


export const authGuard = (next: ActivatedRouteSnapshot) => {
  return inject(LoginServiceService).isLoggedIn ? true : createUrlTreeFromSnapshot(next, ['/more', 'login'])
}

// isLoggedIn() ? true ? createUrlTreeFromSnapshot(next, ['/', 'login'])


