import { Injectable } from '@angular/core';
import { ClaimsModel } from '../constants/claims.model';

const TOKEN_KEY = 'auth-token';
const REFRESHTOKEN_KEY = 'auth-refreshtoken';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  signOut(): void {
    window.localStorage.clear();
    window.location.reload();
  }
  public saveToken(token: string): void {
    var claim = atob(token.split('.')[1]);
    if(claim['role'] == 'Customer' )
    {
      this.signOut();
    }else{
      window.localStorage.removeItem(TOKEN_KEY);
      window.localStorage.setItem(TOKEN_KEY, token);
      this.saveUser(claim);
    }
    
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  // public saveRefreshToken(token: string): void {
  //   window.localStorage.removeItem(REFRESHTOKEN_KEY);
  //   window.localStorage.setItem(REFRESHTOKEN_KEY, token);
  // }

  // public getRefreshToken(): string | null {
  //   return window.localStorage.getItem(REFRESHTOKEN_KEY);
  // }

  public saveUser(claim: string): void {
    window.localStorage.setItem(USER_KEY, claim);
  }

  public getUser(): string {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return user;
    }
    return null;
  }

  public GetRole() {
    if(this.getToken() != null)
    {
      let Claims = JSON.parse(
        atob(this.getToken()?.split('.')[1])
      ) as ClaimsModel;
      return Claims.role;
    }else{
      return null;
    }
   
  }
}
