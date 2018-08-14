import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JwttokensComponent } from './jwttokens.component';

describe('JwttokensComponent', () => {
  let component: JwttokensComponent;
  let fixture: ComponentFixture<JwttokensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwttokensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwttokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
