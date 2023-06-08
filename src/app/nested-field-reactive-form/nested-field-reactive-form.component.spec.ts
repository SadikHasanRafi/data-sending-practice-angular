import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFieldReactiveFormComponent } from './nested-field-reactive-form.component';

describe('NestedFieldReactiveFormComponent', () => {
  let component: NestedFieldReactiveFormComponent;
  let fixture: ComponentFixture<NestedFieldReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedFieldReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedFieldReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
