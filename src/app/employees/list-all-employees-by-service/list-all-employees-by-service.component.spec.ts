import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllEmployeesByServiceComponent } from './list-all-employees-by-service.component';

describe('ListAllEmployeesByServiceComponent', () => {
  let component: ListAllEmployeesByServiceComponent;
  let fixture: ComponentFixture<ListAllEmployeesByServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllEmployeesByServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllEmployeesByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
