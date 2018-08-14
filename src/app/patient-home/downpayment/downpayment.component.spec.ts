import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownpaymentComponent } from './downpayment.component';

describe('DownpaymentComponent', () => {
  let component: DownpaymentComponent;
  let fixture: ComponentFixture<DownpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
