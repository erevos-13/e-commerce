import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserApi {
  readonly users = '/api/users';
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get(`${this.users}`);
  }
}
