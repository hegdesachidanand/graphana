import { TestBed } from '@angular/core/testing';

import { AuthdeactivateGuard } from './authdeactivate.guard';

describe('AuthdeactivateGuard', () => {
  let guard: AuthdeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthdeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
