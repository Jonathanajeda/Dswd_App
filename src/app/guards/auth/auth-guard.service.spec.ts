import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth-guard.service';
import { StoreModule } from '@ngrx/store';

describe('AuthGuardService', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
      imports: [
        StoreModule.forRoot([]),
      ]
    guard = TestBed.inject(AuthGuard);
  });

  it('should allow logged user to access page', () => {
    guard.canLoad().subscribe(isAllowed => {
      expect(isAllowed). toBeTruthy();
    })
  });
});
