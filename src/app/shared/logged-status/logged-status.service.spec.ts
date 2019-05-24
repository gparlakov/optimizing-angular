import { TestBed } from '@angular/core/testing';

import { LoggedStatusService } from './logged-status.service';

describe('LoggedStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggedStatusService = TestBed.get(LoggedStatusService);
    expect(service).toBeTruthy();
  });
});
