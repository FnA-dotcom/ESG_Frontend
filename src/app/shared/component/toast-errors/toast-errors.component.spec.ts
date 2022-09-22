import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastErrorsComponent } from './toast-errors.component';

describe('ToastErrorsComponent', () => {
  let component: ToastErrorsComponent;
  let fixture: ComponentFixture<ToastErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastErrorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
