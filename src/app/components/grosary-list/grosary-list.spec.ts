import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrosaryList } from './grosary-list';

describe('GrosaryList', () => {
  let component: GrosaryList;
  let fixture: ComponentFixture<GrosaryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrosaryList],
    }).compileComponents();

    fixture = TestBed.createComponent(GrosaryList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
