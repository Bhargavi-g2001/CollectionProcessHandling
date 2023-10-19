import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customer1Component } from './customer1.component';

describe('Customer1Component', () => {
  let component: Customer1Component;
  let fixture: ComponentFixture<Customer1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Customer1Component]
    });
    fixture = TestBed.createComponent(Customer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
