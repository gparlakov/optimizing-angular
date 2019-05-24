import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedStatusComponent } from './logged-status.component';

describe('LoggedStatusComponent', () => {
  let component: LoggedStatusComponent;
  let fixture: ComponentFixture<LoggedStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
