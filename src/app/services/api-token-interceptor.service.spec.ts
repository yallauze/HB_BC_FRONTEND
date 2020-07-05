import { TestBed } from '@angular/core/testing';

import { ApiTokenInterceptorService } from './api-token-interceptor.service';

describe('ApiTokenInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiTokenInterceptorService = TestBed.get(ApiTokenInterceptorService);
    expect(service).toBeTruthy();
  });
});
