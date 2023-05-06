import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login_body = {
    username: '',
    password: '',
  };

  api_url = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    this.login_body['username'] = username;
    this.login_body['password'] = password;
    return this.http.post(this.api_url + 'token/', this.login_body);
  }
}
