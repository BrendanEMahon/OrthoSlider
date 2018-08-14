import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientoutputComponent } from './patientoutput.component';

describe('PatientoutputComponent', () => {
  let component: PatientoutputComponent;
  let fixture: ComponentFixture<PatientoutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientoutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
