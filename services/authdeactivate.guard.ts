import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthdeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(component.canDeactivate())
      let text = "Press a button!\nEither OK or Cancel.";
      if (!component.canDeactivate()) {
        if( confirm(text) == true){
        text = "You pressed OK!";
        console.log(text);
        return component.canDeactivate ? component.canDeactivate() : true;
        }
        else{
          return component.canDeactivate ? component.canDeactivate() : true;
        }
      }
      else{
        return component.canDeactivate ? component.canDeactivate() : true;
      }
      
  }
  
}
