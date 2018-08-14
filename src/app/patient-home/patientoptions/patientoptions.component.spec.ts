import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientoptionsComponent } from './patientoptions.component';

describe('PatientoptionsComponent', () => {
  let component: PatientoptionsComponent;
  let fixture: ComponentFixture<PatientoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
