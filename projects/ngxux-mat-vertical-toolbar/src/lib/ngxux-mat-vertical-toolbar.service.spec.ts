import { TestBed } from '@angular/core/testing';

import { NgxuxMatVerticalToolbarService } from './ngxux-mat-vertical-toolbar.service';

describe('NgxuxMatVerticalToolbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxuxMatVerticalToolbarService = TestBed.get(NgxuxMatVerticalToolbarService);
    expect(service).toBeTruthy();
  });
});
