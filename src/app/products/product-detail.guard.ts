import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Code to check the product Id and if is correct it should allow users to navigate (return true).
    // otherwise return to products page (return false)
    
    let id = Number(route.paramMap.get('id'));

    if (isNaN(id) || id > 5 || id < 1) {
      alert('your id is incorrect, you will be redirected to the main products page');
      this._router.navigate(['/products']);
      return false
    }
      return true;
  }
  
}
