import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string | null = null;
  isAuthenticated: boolean = false;
  constructor() { }
}
