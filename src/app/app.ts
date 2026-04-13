import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from './services/user-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('b-33');
  dataTypeRouteName = "dataTypes";

  userSrv =  inject(UserService)


  constructor(private router: Router) {
    this.router.events.subscribe(eve=>{ 
    })

  }

  onChnages(event: any) {
    const value = event.target.value;
    debugger;
    this.userSrv.onSearchTextSubject.next(value);
    this.userSrv.onSearchBehviouSub.next(value);
  }
}
