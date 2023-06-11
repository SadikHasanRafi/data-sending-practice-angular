// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, CanMatch, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class AdminGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad, CanMatch {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


//     return true;
//   }
//   canActivateChild(
//     childRoute: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


//     return true;
//   }
//   canDeactivate(
//     component: unknown,
//     currentRoute: ActivatedRouteSnapshot,
//     currentState: RouterStateSnapshot,
//     nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


//     return true;
//   }
//   canMatch(
//     route: Route,
//     segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


//     return true;
//   }canLoad(
//     route: Route,
//     segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


//     return true;
//   }

// }

// import { inject } from "@angular/core";
// import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
// import { catchError, map, of } from "rxjs";

//   export const canActivate: CanActivateFn = (
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ) => {
//     const authService = inject(AuthenticationService);
//     const router = inject(Router);
  
//     return authService.checkLogin().pipe(
//       map(() => true),
//       catchError(() => {
//         router.navigate(['route-to-fallback-page']);
//         return of(false);
//       })
//     );
//   };
  
//   export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(route, state);
  

// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, CanMatch, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class AdminGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad, CanMatch {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


//     return true;
//   }
//   canActivateChild(
//     childRoute: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


//     return true;
//   }
//   canDeactivate(
//     component: unknown,
//     currentRoute: ActivatedRouteSnapshot,
//     currentState: RouterStateSnapshot,
//     nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


//     return true;
//   }
//   canMatch(
//     route: Route,
//     segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


//     return true;
//   }canLoad(
//     route: Route,
//     segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


//     return true;
//   }

// }

import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { catchError, map, of } from "rxjs";

  export const canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    // const authService = inject(AuthenticationService);
    // const router = inject(Router);
  
    return true
  };
  
  export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(route, state);
  

