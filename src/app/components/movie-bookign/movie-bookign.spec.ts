import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBookign } from './movie-bookign';

describe('MovieBookign', () => {
  let component: MovieBookign;
  let fixture: ComponentFixture<MovieBookign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieBookign],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieBookign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
