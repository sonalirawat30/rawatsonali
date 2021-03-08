import { TestBed } from '@angular/core/testing';

import { ManageInterceptor } from './manage.interceptor';

describe('ManageInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ManageInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ManageInterceptor = TestBed.inject(ManageInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
