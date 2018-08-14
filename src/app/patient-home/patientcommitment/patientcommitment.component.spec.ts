import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientcommitmentComponent } from './patientcommitment.component';

describe('PatientcommitmentComponent', () => {
  let component: PatientcommitmentComponent;
  let fixture: ComponentFixture<PatientcommitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientcommitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientcommitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
