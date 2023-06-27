import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
    const service = inject(AuthService)
    const router = inject(Router)
    const toastr = inject(ToastrService)

    
  return true;
};
