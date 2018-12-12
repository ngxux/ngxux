import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAdminComponent } from './mat-admin.component';

describe('MatAdminComponent', () => {
  let component: MatAdminComponent;
  let fixture: ComponentFixture<MatAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
