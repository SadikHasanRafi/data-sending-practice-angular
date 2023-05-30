import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2ChildComponent } from './page2-child.component';

describe('Page2ChildComponent', () => {
  let component: Page2ChildComponent;
  let fixture: ComponentFixture<Page2ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page2ChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
