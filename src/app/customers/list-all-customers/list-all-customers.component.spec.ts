import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllCustomersComponent } from './list-all-customers.component';

describe('ListAllCustomersComponent', () => {
  let component: ListAllCustomersComponent;
  let fixture: ComponentFixture<ListAllCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
