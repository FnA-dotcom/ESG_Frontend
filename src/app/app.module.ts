import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import { NgxDocViewerModule } from 'ngx-doc-viewer';


import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze} from 'ngrx-store-freeze';

// Application Components
import {AppComponent} from './app.component';

import { environment } from 'src/environments/environment'; 
import { ComponentFactoryService } from './shared/services/factory-resolver';
import { TokenInterceptor } from './core/services/token.interceptor';
import { AuthGuardService } from './core/services/authGuard.service';
import { DynamicComponentDirective } from './shared/directives/dynamic-component.dorective';
// import { CollectPaymentsComponent } from './feature/payments/collect-payments/collect-payments.component';
import { metaReducers, reducers } from 'src/app/shared/login/store/store';
import { LoginEffects } from './shared/login/store/effects/login.effect';
// import { PaynowComponent } from './feature/payments/paynow/paynow.component';
import { PatientnameService } from './core/services/patientname.service';
import { RouteReuseStrategy } from '@angular/router';
import { CurtomRouteReuseStrategy } from './curtom-route-reuse-strategy.service';
import {BadgeModule} from 'primeng/badge';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { SignaturePadModule } from 'angular2-signaturepad';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



// export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
    declarations: [
        AppComponent,
        DynamicComponentDirective,
      
    ],
    imports: [
        BrowserModule,
        NgxDocViewerModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        BadgeModule,
        ProgressSpinnerModule,
        SignaturePadModule,
       // SharedModule,
    // CoreModule,
       StoreModule.forRoot({},{metaReducers}), 
       EffectsModule.forRoot([LoginEffects]),
        environment.development ? StoreDevtoolsModule.instrument() : [],
        // FontAwesomeModule,
        
    ],

    providers: [PatientnameService,
        { provide: LocationStrategy, useClass: HashLocationStrategy, }, 
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
          },
          AuthGuardService,
          ,
          {

            provide: RouteReuseStrategy,
           
            useClass: CurtomRouteReuseStrategy
           
            }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
