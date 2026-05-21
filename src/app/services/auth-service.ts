import { Injectable, signal } from '@angular/core';

export type UserRole = 'Employee' | 'superAdmin' | 'Guest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly loggedInRole = signal<UserRole | ''>('');

  private readonly hardCodeUsers: Record<UserRole, string> = {
    Employee: 'EMP001',
    superAdmin: 'ADMIN001',
    Guest: 'GUEST001'
  };

  login(role: UserRole, userCode: string) {
    if (userCode.trim() !== this.hardCodeUsers[role]) {
      return false;
    }

    this.loggedInRole.set(role);
    return true;
  }

  logout() {
    this.loggedInRole.set('');
  }

  isLoggedIn() {
    return this.loggedInRole() !== '';
  }
}
