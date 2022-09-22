import {AfterContentInit, AfterViewInit, ApplicationRef, ChangeDetectorRef, Component, NgZone, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import { Store } from '@ngrx/store';
import {AppMainComponent} from './app.main.component';
import * as fromStore from '../login/store/store';
import { User } from '../login/models/user';
import {BadgeModule} from 'primeng/badge';
// import { PatientEditService } from 'src/app/feature/patient-services/patient/patient-edit.service';
import { MenuServiceService } from './menu-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    styleUrls: ['./app.menu.component.scss']
    
})
export class AppMenuComponent implements OnInit {

    check=true;

    model1=[];

    userData: User;

    count=12;
    name='Patient Service';

    value3;

    previoulsySelectedModule;
    selectedModeuleStyle;

    facilityType;

    facilityList=['floresville','schertz'];

    constructor(public app: AppMainComponent,
                 private store: Store<fromStore.LoginState>,
                //  private patientService:PatientEditService,
                 private menuService:MenuServiceService,
                 private router:Router,
                 private zone:NgZone
                 
                 ) {}

    // '<p>Patient Service &nbsp; <b class="p-error">(2)</b></p>',escape:false    

    ngOnInit() {

        this.facilityType=localStorage.getItem('facilityType');


        this.getModel();

        this.menuService.menuUpdate.subscribe(update=>{
            this.getModel();
        })

        this.menuService.styleUpdate.subscribe(data =>{
            this.handleModuleClick(data);
            this.model1[2].expanded=true;
        })
    

    }

    getModel()
    {


        this.model1=this.menuService.model;
        this.model1=[].concat(this.model1);
    }

    

    handleModuleClick(data)
    {
    
        for(let i=0;i<this.model1.length;i++)
        {
            for(let j=0;j<this.model1[i].items.length;j++)
            {
                // console.log(this.model1[i].items[j]);
                if(this.model1[i].items[j].label === data.label)
                {
                    this.model1[i].items[j].style={background:'black'};
                }
                else
                {
                    this.model1[i].items[j].style={};
                }

            }
        }


        // console.log(data.label);
        // console.log(this.model[0].items[0].label);
        // this.model[0].items[0].style={background:'#6d9cd3','border-radius':'7px'};
    }

    



    
}
