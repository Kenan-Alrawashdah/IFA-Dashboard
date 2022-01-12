import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../Constants/constants';
import { ApiResponse } from '../constants/api.response.model';
import { UserToken } from '../constants/UserToken.model';

const baseUrl = Constants.BaseURL;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(email: string, password: string) {
    const body = {
      Email: email,
      Password: password,
    };
    return this.http.post<ApiResponse<UserToken>>(
      baseUrl + '/api/Login/SignIn',
      body
    );
  }

  refreshToken(token: string, refreshToken: string) {
    return this.http.post(
      baseUrl   + '/Refresh',
      {
        accessToken: token,
        refreshToken: refreshToken,
      },
      httpOptions
    );
  }

  register(){
    
  }
}
