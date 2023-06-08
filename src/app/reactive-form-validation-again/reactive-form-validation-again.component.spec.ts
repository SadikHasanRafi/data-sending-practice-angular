import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormValidationAgainComponent } from './reactive-form-validation-again.component';

describe('ReactiveFormValidationAgainComponent', () => {
  let component: ReactiveFormValidationAgainComponent;
  let fixture: ComponentFixture<ReactiveFormValidationAgainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormValidationAgainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormValidationAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
