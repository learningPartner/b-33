import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-selection',
  imports: [NgClass],
  templateUrl: './plan-selection.html',
  styleUrl: './plan-selection.css',
})
export class PlanSelection {

  planList: any[] = [
    { planName: 'Mobile', icon: 'fa fa-mobile', planInfo: 'Free SIM, calls, and SMS with invaluable digital experiences.2000/month' },
    { planName: 'JioFiber', icon: 'fa fa-home', planInfo: 'Connected living experiences with superfast home internet. 2200/month' },
    { planName: 'Business', icon: 'fa fa-id-badge', planInfo: 'Enterprise-grade digital services to meet all your business needs.4000/month' },
    { planName: 'Studnet', icon: 'fa fa-id-badge', planInfo: 'Enterprise-grade digital services to meet all your business needs.500/month' }
  ];

  selectedPlan: any;

  onSlectPlan(plan: any) {
    this.selectedPlan = plan;
  }

}
