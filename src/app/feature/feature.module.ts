import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AuthGuardService } from "../core/services/authGuard.service";
import { Effects } from "../core/store/effects/effects";
import { reducers } from "../core/store/store";
import { AppMainComponent } from "../shared/layout/app.main.component";
import { SharedModule } from "../shared/shared.module";
// import { ClaimdataService } from "./claim/claimdata.service";
import { CustomPreloadingStrategy } from "./custom-preloading-strategy.service";
// import { PatientComponent } from "./patient-services/patient/patient.component";





const routes: Routes = [
    {
        path: '',
        component: AppMainComponent,
        children: [
            { path: 'dashboard', loadChildren: () => import('../feature/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuardService] },
            // { path: 'patient-service', loadChildren: () => import('../feature/patient-services/patient-services.module').then(m => m.PatientServicesModule), canActivate: [AuthGuardService], data:{preload:true} },
        ]
    }
    
  ];
  
  @NgModule({
    imports: [
        // RouterModule.forRoot(routes,{preloadingStrategy:CustomPreloadingStrategy}),
        RouterModule.forChild(routes),
        StoreModule.forFeature('MainState', reducers),
        EffectsModule.forFeature([Effects]),
        SharedModule,
        

    ],
    exports: [RouterModule],
    declarations: [],   
  })
  export class FeatureModule { }