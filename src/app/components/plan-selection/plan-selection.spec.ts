import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSelection } from './plan-selection';

describe('PlanSelection', () => {
  let component: PlanSelection;
  let fixture: ComponentFixture<PlanSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanSelection],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanSelection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
