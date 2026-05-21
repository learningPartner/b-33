import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { UserService } from '../../services/user-service';
import { GlobalConstant } from '../../Global.constant';
@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  dataTypeRouteName = 'dataTypes';

  readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly userSrv = inject(UserService);

  menuItems = GlobalConstant.menuItems;
  filteredMennu:any [] = [];

  constructor() {
    debugger;
    const loggedROle = localStorage.getItem("loggedUserRole");
    this.filteredMennu =  this.menuItems.filter((m:any)=> m.allowedRoles.includes(loggedROle))
  }

  onChnages(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.userSrv.onSearchTextSubject.next(value);
    this.userSrv.onSearchBehviouSub.next(value);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
