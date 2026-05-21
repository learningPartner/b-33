import { CanActivateFn, Router } from '@angular/router';
import { GlobalConstant } from '../Global.constant';
import { inject } from '@angular/core';

export const roleBasedGuard: CanActivateFn = (route, state) => {
  debugger;
  const router = inject(Router);
  const routeName = state.url.split("/")[1];
  const menuItemList = GlobalConstant.menuItems;
  const menuItem = menuItemList.find(m => m.routeName == routeName);
  const loggedROle = localStorage.getItem("loggedUserRole");
  if (loggedROle != null) {
    if (menuItem?.allowedRoles.includes(loggedROle)) {
      return true;
    } else {
      alert("You Don't Have Acces to this page");
      router.navigateByUrl("category");
      return false;
    }
  } else {
      return false;
  }

  
};
