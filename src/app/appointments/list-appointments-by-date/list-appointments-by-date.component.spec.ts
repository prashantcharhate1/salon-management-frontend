import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppointmentsByDateComponent } from './list-appointments-by-date.component';

describe('ListAppointmentsByDateComponent', () => {
  let component: ListAppointmentsByDateComponent;
  let fixture: ComponentFixture<ListAppointmentsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppointmentsByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppointmentsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
