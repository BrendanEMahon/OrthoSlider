import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientcostsComponent } from './patientcosts.component';

describe('PatientcostsComponent', () => {
  let component: PatientcostsComponent;
  let fixture: ComponentFixture<PatientcostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientcostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientcostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
