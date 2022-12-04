import { Component, OnInit } from '@angular/core';
import { UserServrices } from './services/user.servrices';
import { Observable } from 'rxjs';
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf,
  NgOptimizedImage,
} from '@angular/common';
import { User } from './services/api/entities/User';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [MatTableModule, AsyncPipe, NgIf, NgOptimizedImage],
})
export class AppComponent implements OnInit {
  title = 'e-commerce';
  users$: Observable<User[]>;
  displayedColumns: string[] = [
    'id',
    'email',
    'firstname',
    'lastname',
    'avatar',
  ];

  constructor(private userService: UserServrices) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers().pipe((users) => users);
  }
}
