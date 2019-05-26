import { TestBed } from '@angular/core/testing';

import { InAppDBService } from './in-app-db.service';

describe('InAppDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InAppDBService = TestBed.get(InAppDBService);
    expect(service).toBeTruthy();
  });
});
