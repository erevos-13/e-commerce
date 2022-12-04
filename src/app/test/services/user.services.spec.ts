import { UserApi } from '../../services/api/userApi';
import { TestBed } from '@angular/core/testing';
import { UserServrices } from '../../services/user.servrices';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { USERS } from '../../../DATA/uses';

describe('User Services', () => {
  let userApi: UserApi;
  let userAervice: UserServrices;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    userApi = jasmine.createSpyObj('UserApi', ['getUsers']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

      providers: [UserServrices, { provide: UserApi, useValue: userApi }],
    });
    userAervice = TestBed.inject(UserServrices);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  it('Should get users', () => {
    userAervice.getUsers().subscribe((users) => {
      console.log(users);
      expect(users).toBeTruthy();
    });
    const req = httpTestingController.expectOne('/api/users');
    expect(req.request.method).toEqual('GET');
    req.flush({ payload: USERS });
    httpTestingController.verify();
  });
});
