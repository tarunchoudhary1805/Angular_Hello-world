import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesLearnComponent } from './services-learn.component';

describe('ServicesLearnComponent', () => {
  let component: ServicesLearnComponent;
  let fixture: ComponentFixture<ServicesLearnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesLearnComponent]
    });
    fixture = TestBed.createComponent(ServicesLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
