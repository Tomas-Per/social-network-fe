import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  body = {
    username: '',
    password: '',
  };

  api_url = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    this.body['username'] = username;
    this.body['password'] = password;
    let decodedToken: any;
    return this.http.post(this.api_url + 'token/', this.body).pipe(
      map((response: any) => {
        localStorage.setItem('access_token', response['access']);
        localStorage.setItem('refresh_token', response['refresh']);
        decodedToken = jwtDecode(response['access']);
        localStorage.setItem('username', decodedToken['username']);
        localStorage.setItem('user_id', decodedToken['user_id']);
        localStorage.setItem('is_superuser', decodedToken['is_superuser']);
        localStorage.setItem('exp', decodedToken['exp']);
        return decodedToken;
      })
    );
  }

  register(username: string, password: string) {
    this.body['username'] = username;
    this.body['password'] = password;
    return this.http.post(this.api_url + 'register/', this.body);
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    let accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      return false;
    }
    return true;
  }
}
