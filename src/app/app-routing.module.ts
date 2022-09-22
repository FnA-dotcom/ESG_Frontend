import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { CustomPreloadingStrategy } from './feature/custom-preloading-strategy.service';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'login', loadChildren: () => import('./shared/login/login.module').then(m => m.LoginModule) },
            { path: 'esg', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),data:{preload:true} },
            // { path: 'roverlab', loadChildren: () => import('./lab/roverlab.module').then(m => m.RoverlabModule)},
            // { path: 'facility', loadChildren: () => import('./shared/component/select-customer/select-customer.module').then(m => m.SelectCustomerModule) },

           
            
           
            // {path: 'error', component: AppMainComponent},
        // {path: 'access', component: AppMainComponent},
          //  {path: 'notfound', component: AppMainComponent},
            {path: '', redirectTo: '/login', pathMatch: 'full'},
            {path: '**', redirectTo: '/login'},
        ],
        {preloadingStrategy:CustomPreloadingStrategy},)
    ],
    exports: [RouterModule],
    providers:[CustomPreloadingStrategy],
})
export class AppRoutingModule {
}
