import { TestBed } from '@angular/core/testing';

import { MatAdminService } from './mat-admin.service';

describe('MatAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatAdminService = TestBed.get(MatAdminService);
    expect(service).toBeTruthy();
  });
});
