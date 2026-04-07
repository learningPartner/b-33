import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideShowNgIf } from './hide-show-ng-if';

describe('HideShowNgIf', () => {
  let component: HideShowNgIf;
  let fixture: ComponentFixture<HideShowNgIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HideShowNgIf],
    }).compileComponents();

    fixture = TestBed.createComponent(HideShowNgIf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
