import { Component, OnInit } from '@angular/core';
import { MenuService } from './app.menu.service';
import { TopbarMenuService } from './app.topbarmenu.service';
import { PrimeNGConfig } from 'primeng/api';
import { AppComponent } from '../../app.component';
import { BnNgIdleService } from 'bn-ng-idle';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../login/store/store';
import { LoginService } from '../login/services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './app.main.component.html'
})
export class AppMainComponent implements OnInit {

    

    staticMenuDesktopInactive: boolean;

    staticMenuMobileActive: boolean;

    menuClick: boolean;

    topbarItemClick: boolean;

    menuHoverActive = false;

    topbarMenuActive = false;

    activeTopbarItem: Element;

    searchClick = false;

    search = false;

    configActive: boolean;

    configClick: boolean;

    topbarMenuClick = false;
    
    diplayTimeOutDialog:boolean=false;

    currentUsername=undefined;
    password=undefined;

    constructor(private menuService: MenuService, private topbarmenuService: TopbarMenuService,
                private primengConfig: PrimeNGConfig, public app: AppComponent,
                private store: Store<fromStore.LoginState>,
                private loginService: LoginService,
                private bnIdle:BnNgIdleService,
                private router:Router
                ) {
                   
                 }

    ngOnInit(): void {
        this.startWatchingTimeout();
        
//         this.store.select<any>('login').subscribe(state => {
//           console.log(state);
//      })
       
//    this.loginService.getToken().subscribe(token => {
//          console.log(token);
//      });
    }

    startWatchingTimeout()
    {
        let stopCounter=0;
        this.bnIdle.startWatching(600).subscribe((res: boolean) => {
            if (res) {
              this.diplayTimeOutDialog=true;
              stopCounter++;
              console.log('stopcounter=== '+stopCounter);
              this.bnIdle.stopTimer();
              this.triggerTimedOut();
            }

          });
    }

    triggerTimedOut()
    {
        this.currentUsername='CurrentUserName';
        this.password=undefined;
    }

    logout()
    {
        localStorage.clear();
        // this.router.navigate(['login']);

        this.router.navigate(['login'])
        .then(() => {
            window.location.reload();
        });
        
    }

    login()
    {
        if(this.password===undefined)
        {
            alert('Please Enter valid password to continue');
            return;
        }
        else if(this.password==='a')
        {
            alert('Welcome Back!');
            this.diplayTimeOutDialog=false;
            this.startWatchingTimeout();
        }
        else
        {
            alert('Wrong Password');
            return;
        }
    }

    onLayoutClick() {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }

        if (this.configActive && !this.configClick) {
            this.configActive = false;
        }

        if (!this.menuClick) {
            if (this.isSlim()) {
                this.menuService.reset();
            }

            this.menuHoverActive = false;
            this.staticMenuMobileActive = false;
        }

        if (this.topbarMenuClick) {
            if (this.isSlim()) {
                this.menuHoverActive = false;
            }
        }
        if (!this.topbarMenuClick) {
            this.topbarmenuService.reset();
        }

        if (!this.searchClick) {
            this.search = false;
        }

        this.searchClick = false;
        this.configClick = false;
        this.menuClick = false;
        this.topbarItemClick = false;
        this.topbarMenuClick = false;
    }

    onMenuButtonClick(event: Event) {
        this.menuClick = true;

        if (!this.isMobile()) {
            this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
        } else {
            this.staticMenuMobileActive = !this.staticMenuMobileActive;
        }

        event.preventDefault();
    }

    onMenuClick() {
        this.menuClick = true;
    }

    onTopbarMenuClick() {
        this.topbarMenuClick = true;
    }

    onTopbarItemClick(event: Event, item: Element) {
        this.topbarItemClick = true;

        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        } else {
            this.activeTopbarItem = item;
        }

        if (item.className === 'search-item') {
            this.search = !this.search;
            this.searchClick = !this.searchClick;
        }

        event.preventDefault();
    }

    onTopbarSubItemClick(event) {
        event.preventDefault();
    }

    onRippleChange(event) {
        this.app.ripple = event.checked;
        this.primengConfig = event.checked;
    }

    onConfigClick(event) {
        this.configClick = true;
    }

    isMobile() {
        return window.innerWidth < 1025;
    }

    isSlim() {
        return this.app.menuMode === 'slim';
    }

    isStatic() {
        return this.app.menuMode === 'static';
    }

    isTablet() {
        const width = window.innerWidth;
        return width <= 1024 && width > 640;
    }
}
