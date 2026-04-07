import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForLoop } from './ng-for-loop';

describe('NgForLoop', () => {
  let component: NgForLoop;
  let fixture: ComponentFixture<NgForLoop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgForLoop],
    }).compileComponents();

    fixture = TestBed.createComponent(NgForLoop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
