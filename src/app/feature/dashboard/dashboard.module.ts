import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/services/authGuard.service';
import {ChartModule} from 'primeng/chart';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {KnobModule} from 'primeng/knob';
import { FormsModule } from '@angular/forms';
import {FieldsetModule} from 'primeng/fieldset';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import { MarketingDashboardComponent } from './marketing-dashboard/marketing-dashboard.component';
import { NgApexchartsModule } from "ng-apexcharts";



const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuardService],

    children: [
      { path: 'dashboard-1', component: Dashboard1Component },
      { path: 'dashboard-2', component: Dashboard2Component },
      { path: 'marketing-dashboard', component: MarketingDashboardComponent },
     

    ]
  }

];


@NgModule({
  declarations: [
    Dashboard1Component,
    Dashboard2Component,
    MarketingDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartModule,
    ScrollPanelModule,
    KnobModule,
    FormsModule,
    FieldsetModule,
    DropdownModule,
    CalendarModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
