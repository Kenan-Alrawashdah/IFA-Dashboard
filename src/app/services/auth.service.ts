import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../Constants/constants';
import { ApiResponse } from '../constants/api.response.model';
import { UserToken } from '../constants/UserToken.model';
import { AddStoreModel } from '../components/auth/models/addStore.model';

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
    return this.http.get<ApiResponse<string>>(
      baseUrl + 'auth/login?userEmail='+email+'&password='+password
    );
  }

  // refreshToken(token: string, refreshToken: string) {
  //   return this.http.post(
  //     baseUrl   + '/Refresh',
  //     {
  //       accessToken: token,
  //       refreshToken: refreshToken,
  //     },
  //     httpOptions
  //   );
  // }

  register(model:AddStoreModel){
    return this.http.post<ApiResponse>(Constants.BaseURL+'store',model)
  }

  checkEmail(userEmail:string)
  {
    let form: FormData = new FormData();
    form.append("userEmail", userEmail);
    return this.http.post<ApiResponse>(Constants.BaseURL+'auth/CheckEmail',form)
  }


}
