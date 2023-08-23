import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchDirectiveComponent } from './ng-switch-directive.component';

describe('NgSwitchDirectiveComponent', () => {
  let component: NgSwitchDirectiveComponent;
  let fixture: ComponentFixture<NgSwitchDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgSwitchDirectiveComponent]
    });
    fixture = TestBed.createComponent(NgSwitchDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
