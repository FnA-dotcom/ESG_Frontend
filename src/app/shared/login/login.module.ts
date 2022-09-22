import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { metaReducers, reducers } from 'src/app/shared/login/store/store';
import { ToastErrorsComponent } from '../component/toast-errors/toast-errors.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginEffects } from './store/effects/login.effect';
import {ImageModule} from 'primeng/image';
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from 'primeng/checkbox';




@NgModule({
  declarations: [
    LoginComponent,
    ToastErrorsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    ButtonModule,
    CardModule,
    ToastModule,
    InputTextModule,
    DialogModule,
    ImageModule,
    CheckboxModule
    // StoreModule.forFeature('authState', reducers),
    // EffectsModule.forFeature([LoginEffects]),
    //StoreModule.forRoot(reducers, {}), 
     //   EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [
  ]
})
export class LoginModule { }
