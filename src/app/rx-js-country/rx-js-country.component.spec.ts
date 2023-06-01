import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsCountryComponent } from './rx-js-country.component';

describe('RxJsCountryComponent', () => {
  let component: RxJsCountryComponent;
  let fixture: ComponentFixture<RxJsCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJsCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
