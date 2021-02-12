import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllAppointmentComponent } from './list-all-appointment.component';

describe('ListAllAppointmentComponent', () => {
  let component: ListAllAppointmentComponent;
  let fixture: ComponentFixture<ListAllAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
