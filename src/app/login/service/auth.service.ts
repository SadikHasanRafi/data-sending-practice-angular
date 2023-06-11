import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivateChildFn{

  constructor() { }

  CanActivateChildFn(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    return false
  }
}
