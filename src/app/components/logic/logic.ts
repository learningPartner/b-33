import { Component } from '@angular/core';
import { PlanSelection } from "../plan-selection/plan-selection";
import { MovieBookign } from "../movie-bookign/movie-bookign";
import { GrosaryList } from '../grosary-list/grosary-list';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-logic',
  imports: [NgClass, PlanSelection, MovieBookign, GrosaryList],
  templateUrl: './logic.html',
  styleUrl: './logic.css',
})
export class Logic {

  tabName: string = 'Plan Selection';
  tabList: string[] = ['Plan Selection', 'Movie Booking', 'Grosary Shopping']


  setSelectedTab(tabName: string) {
    this.tabName = tabName;
  }
}
