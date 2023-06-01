import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePracticesComponent } from './more-practices.component';

describe('MorePracticesComponent', () => {
  let component: MorePracticesComponent;
  let fixture: ComponentFixture<MorePracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorePracticesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorePracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
