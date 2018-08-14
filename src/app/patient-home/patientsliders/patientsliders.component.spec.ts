import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientslidersComponent } from './patientsliders.component';

describe('PatientslidersComponent', () => {
  let component: PatientslidersComponent;
  let fixture: ComponentFixture<PatientslidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientslidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientslidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
