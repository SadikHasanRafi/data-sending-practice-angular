import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormNestedFieldAgainComponent } from './reactive-form-nested-field-again.component';

describe('ReactiveFormNestedFieldAgainComponent', () => {
  let component: ReactiveFormNestedFieldAgainComponent;
  let fixture: ComponentFixture<ReactiveFormNestedFieldAgainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormNestedFieldAgainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormNestedFieldAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
