import { TestBed } from '@angular/core/testing';

import { ApiCatsServiceService } from './api-cats-service.service';

describe('ApiCatsServiceService', () => {
  let service: ApiCatsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCatsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
