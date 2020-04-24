import { TestBed } from '@angular/core/testing';

import { PageProviderService } from './page-provider.service';

describe('PageProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageProviderService = TestBed.get(PageProviderService);
    expect(service).toBeTruthy();
  });
});
