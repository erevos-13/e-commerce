import { UserApi } from './api/userApi';
import { catchError, EMPTY, map, Observable, of, tap } from 'rxjs';
import { User } from './api/entities/User';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserServrices {
  constructor(private userApi: UserApi) {}

  getUsers(): Observable<User[]> {
    return this.userApi.getUsers().pipe(
      tap(console.log),
      map((users) => {
        return users.data;
      }),
      catchError(() => of([]))
    );
  }
}
