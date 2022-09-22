import {Component, OnInit} from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    loadingRouteConfig: boolean;

    inputStyle = 'outlined';

    ripple: boolean;

    theme = 'indigo';

    layoutColor = 'white';

    colorScheme = 'light';

    menuMode = 'static';

    constructor(private primengConfig: PrimeNGConfig,
                private router:Router      
        ) {
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.ripple = true;

        window.addEventListener("keyup", disableF5);

        window.addEventListener("keydown", disableF5);
   
      
   
       function disableF5(e) {
   
          if ((e.which || e.keyCode) == 116) e.preventDefault(); 
   
       };


       this.router.events.subscribe(event => {
        if (event instanceof RouteConfigLoadStart) {
            this.loadingRouteConfig = true;
        } else if (event instanceof RouteConfigLoadEnd) {
            this.loadingRouteConfig = false;
        }
    });
    }
}
