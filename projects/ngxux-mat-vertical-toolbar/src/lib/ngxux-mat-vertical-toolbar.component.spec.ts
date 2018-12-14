import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxuxMatVerticalToolbarComponent } from './ngxux-mat-vertical-toolbar.component';

describe('NgxuxMatVerticalToolbarComponent', () => {
  let component: NgxuxMatVerticalToolbarComponent;
  let fixture: ComponentFixture<NgxuxMatVerticalToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxuxMatVerticalToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxuxMatVerticalToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
