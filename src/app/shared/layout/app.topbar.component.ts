import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppComponent } from 'src/app/app.component';
import { LogOut, SelectedFacility, UpdateFacility } from '../login/store/actions/login.action';
import { LoginState } from '../login/store/store';
import {AppMainComponent} from './app.main.component';
import * as fromStore from '../login/store/store';
import { User } from '../login/models/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FacilityDetailsServiceService } from '../services/facility-details-service.service';
import { Router } from '@angular/router';
// import { SelectCustomerComponent } from '../component/select-customer/select-customer.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styles: [`.row{ cursor:pointer;}`]
})
export class AppTopBarComponent implements OnInit {
     strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");


     switchFacilityForm: FormGroup;
     customerType;
     recentFacilities;

     displayLoader:boolean=false;

    changePasswordForm:FormGroup;

    showPassword;


    currentName;
    passwordRule=true;
    longPassword=true;
    specialCharacter=true;
    numericPassword=true;
    upperAndLowerPassword=true;

    facilities1=[
        {facilityName:'floresville'},
        // {facilityName:'victoria'},
        // {facilityName:'marcos'},
        // {facilityName:'frontline'},
        // {facilityName:'dallas'},
        // {facilityName:'richmond'},
        {facilityName:'schertz'},
        // {facilityName:'floresville'},
        // {facilityName:'willowbrook'},
        // {facilityName:'summerwood'},
        // {facilityName:'heights'},
      ]



    menu: any[];

    userData: User;

    showSwitchCutomers: boolean = false;
    
    showSwitchCutomersOption: boolean = false;

    SelectedCustomerType: any;

    value12: any;

    showChangePassword:boolean=false;

    @ViewChild('input1') inputElement1: ElementRef;

    @ViewChild('input2') inputElement2: ElementRef;

    profileMenuItems=[{
        label: 'Options',
        items: [{
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                
            }
        }
        ]},
        {
            label: 'Navigate',
            items: [{
                label: 'Angular',
                icon: 'pi pi-external-link',
                url: 'http://angular.io'
            },
            {
                label: 'Router',
                icon: 'pi pi-upload',
                routerLink: '/fileupload'
            }
        ]}
    ];
    check: any;

    constructor(public app: AppComponent, public appMain: AppMainComponent,
        private store: Store<fromStore.LoginState>, private fb: FormBuilder,
        private facilityDataService:FacilityDetailsServiceService,
        private router:Router,
        ) {
    }

    ngOnInit() {


        this.switchFacilityForm = this.fb.group({
            facility: [, Validators.required],
          })

        this.customerType = [
            // {label: 'Customer', code: 'CU'},
            // {label: 'Patient',  code: 'PT'},
            // {label: 'Insured',code: 'IN'},
            // {label: 'Claim', code: 'CL'},
            // {label: 'Provider',  code: 'PR'},
            //{label: 'Practice', code: 'PC'}
            {label: 'Facility', code: 'FC'}
        ];

        this.recentFacilities=[
            {name:'schertz',status:'Active',date:'09/18/2022'},
            {name:'floresville',status:'Active',date:'09/19/2022'},
          ]

        this.changePasswordForm=this.fb.group({
            clientName:['',Validators.required],
            userName:['',Validators.required],
            currentPassword:['',Validators.required],
            newPassword:['',Validators.required],
            confirmNewPassword:['',Validators.required],
        })

        
        this.changePasswordForm.controls['userName'].disable();
        this.changePasswordForm.controls['clientName'].disable();
        

        // this.currentName=this.facilityDataService.facilityDetails;

        this.currentName=localStorage.getItem('facilityName');

        this.menu = [{
            label: 'Menu',
            items: [
                {
                    label: 'UI Kit', icon: 'pi pi-align-left',
                    items: [
                        {label: 'Form Layout', icon: 'pi pi-id-card', routerLink: ['/uikit/formlayout']},
                        {label: 'Input', icon: 'pi pi-check-square', routerLink: ['/uikit/input']},
                    ]
                },
                {
                    label: 'Hierarchy', icon: 'pi pi-align-left',
                    items: [
                        {
                            label: 'Submenu 1', icon: 'pi pi-align-left',
                            items: [
                                {label: 'Submenu 1.1', icon: 'pi pi-align-left'},
                                {label: 'Submenu 1.2', icon: 'pi pi-align-left'},
                            ]
                        },
                        {
                            label: 'Submenu 2', icon: 'pi pi-align-left',
                            items: [
                                {label: 'Submenu 2.1', icon: 'pi pi-align-left'},
                            ]
                        },
                    ]
                }
            ]
        }
        ];

        this.switchFacilityForm = this.fb.group({
            facility: new FormControl('', [Validators.required])
          });
    
        //   this.store.select<any>(fromStore.getFacilities).subscribe(
        //         state => {
        //         this.facilities = state;
        //   });

        // this.store.select<any>(fromStore.getUser).subscribe(
        //     state => {
        //     this.userData = state
            
            
        //     {
        //         "token": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJzb2Z0dGVrSldUIiwic3ViIjoic2hhaGVlciBhaG1hZCIsImF1dGhvcml0aWVzIjpbImFkbWluIl0sImlhdCI6MTY1MTAwNDE0NSwiZXhwIjoxNjUxMDA0NzQ1fQ.vfYjyRtW0a_hGhq630R6NIl-r52IOFmp_-P7tWGC4CnKMcaXuGbxf8PhylDqDmYjGhJK_IRU14ZRztj7me0YGQ",
        //         "id": 494,
        //         "userId": "FA009",
        //         "userName": "shaheer ahmad",
        //         "userType": "ADVOCATE_HEAD",
        //         "role": "admin",
        //         "roleId": 1,
        //         "head": 1,
        //         "changePasswordIndicator": false,
        //         "forgetPasswordIndicator": null
        //     };
        // });

        //console.log(this.userData);

        // this.customerType = [
        //     // {label: 'Customer', code: 'CU'},
        //     // {label: 'Patient',  code: 'PT'},
        //     // {label: 'Insured',code: 'IN'},
        //     // {label: 'Claim', code: 'CL'},
        //     // {label: 'Provider',  code: 'PR'},
        //     //{label: 'Practice', code: 'PC'}
        //     {label: 'Facility', code: 'FC'}
        // ];

        // if(this.userData.userType === 'FACILITY'){
        //     this.showSwitchCutomersOption = false;
        // }else{
        //     this.showSwitchCutomersOption = true;
        // }

       
    }

    searchFocus(event) {
        if (this.appMain.search) {
            setTimeout(() => {
                this.inputElement1.nativeElement.focus();
                this.inputElement2.nativeElement.focus();
            }, 100);
        }
    }

    showHideDialog(){
        this.showSwitchCutomers = !this.showSwitchCutomers;
    }

    // selectedCustomerType(e){
    //     this.switchCustomersPlaceHolder.filter( obj => obj.code === e.value.code).map(obj => this.placeholder = obj.label);
    //     if(e.value.code === 'CU' || e.value.code === 'PR' || e.value.code === 'PC'){
    //         this.checkBox1 = true;
    //         this.checkBox2 = false;
    //         this.checkBox3 = false;
    //         this.checkBox4 = false;
    //     }
    //     if(e.value.code === 'PT' || e.value.code === 'IN'){
    //         this.checkBox1 = true;
    //         this.checkBox2 = true;
    //         this.checkBox3 = true;
    //         this.checkBox4 = false;
    //     }
    //     if(e.value.code === 'CL'){
    //         this.checkBox1 = true;
    //         this.checkBox2 = false;
    //         this.checkBox3 = false;
    //         this.checkBox4 = true;
    //     }
    // }

    // logout(){
    //     this.store.dispatch(new LogOut);
    // }

    logout()
    {
        localStorage.clear();
        // this.router.navigate(['login']);

        this.router.navigate(['login'])
        .then(() => {
            window.location.reload();
        });
        
    }

    // ===== switch customer modal code =====

    submitted: boolean = false;

    selectedValues: any[];
  
    facilities: any;
  
    // switchFacilityForm: FormGroup;
  
//     filteredfacilities: any[];
  
//     customerType: any;
  
//     placeholder: string = 'Search by Facility Name';
  
//     switchCustomersPlaceHolder = [
//         {label: 'Search by Customer Name or Number', code: 'CU'},
//         {label: 'Search by Patient Name, Number, SSN, or Date of Birth',  code: 'PT'},
//         {label: 'Search by Insured Name, SSN, or Date of Birth',code: 'IN'},
//         {label: 'Search By Claim Number or TCN Number', code: 'CL'},
//         {label: 'Search By Provider Name, Number, or Submitter Number',  code: 'PR'},
//         {label: 'Search By Practice Name or Number', code: 'PC'}
//     ];
  
//     checkBox1: boolean = true;
//     checkBox2: boolean = false;
//     checkBox3: boolean = false;
//     checkBox4: boolean = false;
  
//     get fc() { return this.switchFacilityForm.controls; }

//   onSubmit() {
//     this.submitted = true;
    
//     if (this.switchFacilityForm.invalid) {
//       return;
//     }
//     const obj = this.switchFacilityForm.value.facility;
//     this.store.dispatch(new UpdateFacility(obj));
//     this.showSwitchCutomers = false;
//   }

//   public searchFacility = (event) => {
    
//          // in a real application, make a request to a remote url with the query and
//          // return filtered results, for demo we filter at client side
//          const filtered: any[] = [];
//          const query = event.query;
//          // tslint:disable-next-line:prefer-for-of
//          for (let i = 0; i < this.facilities.length; i++) {
//              const facility = this.facilities[i];
//              if (facility.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
//                  filtered.push(facility);
//              }
//          }
  
//          this.filteredfacilities = filtered;
//      }

    //  onSelectFacility(obj){
    //     this.store.dispatch(new UpdateFacility(obj));
    //     this.showSwitchCutomers = false;
    //  }


     changePassword()
     {
        this.changePasswordForm.controls['clientName'].setValue('Get Data from service');
        this.changePasswordForm.controls['userName'].setValue('Get Data from service');
        this.showChangePassword=true;
     }

     hideChangePassword()
     {
        this.showChangePassword=false;
        this.changePasswordForm.reset();
        this.showPassword=false;
     }

     passwordValidation(){
       
     let passwordValue= this.changePasswordForm.controls['newPassword'].value
     if(passwordValue!==''){
      if(this.strongRegex.test(passwordValue)){
        if(this.changePasswordForm.controls['newPassword'].value === this.changePasswordForm.controls['currentPassword'].value){
            alert('New Password must be different from current password')
            this.changePasswordForm.controls['newPassword'].setValue('')
        }
        

      }
    else{
        alert("password Criteria doesn't match")
        
    }
   
    }
     }

     confirmPassword(){
        if(this.changePasswordForm.controls['confirmNewPassword'].value !== ''){
        if(this.changePasswordForm.controls['newPassword'].value===''){
            alert("please Enter new password First")
            this.changePasswordForm.controls['confirmNewPassword'].setValue('')
            return
        }
        if(this.changePasswordForm.controls['newPassword'].value !== this.changePasswordForm.controls['confirmNewPassword'].value){
            alert("password MisMatch")
            this.changePasswordForm.controls['confirmNewPassword'].setValue('')
        }
    }
     }
     createUserConfirmation(){
        {
            if(!(this.strongRegex.test( this.changePasswordForm.controls["newPassword"]
            .value))){
              alert("new password criteria doesn't match")
              this.changePasswordForm.controls['confirmNewPassword'].setValue('')
              return (false)
        
            }
            else{
            alert('Password Changed Successfully, please login again with updated credentials');
            this.showChangePassword=false
            return (true)
            }
          }   
       
     
     
    }

    onSwithCustomerSubmit() {
        this.submitted = true;
        
        if (this.switchFacilityForm.invalid) {
          return;
        }

       
        this.facilityDataService.facilityDetails=this.switchFacilityForm.controls['facility'].value;
        //local storage for Development Purposes
        localStorage.setItem('facilityName',this.switchFacilityForm.controls['facility'].value.facilityName);
        //local storage for Development Purposes
        // const obj = this.switchFacilityForm.value.facility;
        // this.store.dispatch(new SelectedFacility(obj));
        

        

        this.showSwitchCutomers=false;

        this.displayLoader=true;
            setTimeout(()=>{
            this.displayLoader=false;
            this.currentName=this.switchFacilityForm.controls['facility'].value.facilityName;
            this.router.navigate(['/esg/dashboard/dashboard-1']).then(() => {
                window.location.reload();
            });
            this.switchFacilityForm.reset();
        },1500);

        
        
      }

      onSelectFacility(obj){

        console.log(obj)
        // this.facilityDataService.facilityDetails=obj.name;
        // //local storage for Development Purposes
        // localStorage.setItem('facilityName',obj.name);
        // //local storage for Development Purposes
        // const obj1 = this.switchFacilityForm.value.facility;
        // // this.store.dispatch(new SelectedFacility(obj));
        // this.router.navigate(['/esg/dashboard/dashboard-1'])
        this.facilityDataService.facilityDetails=obj.name;
        //local storage for Development Purposes
        localStorage.setItem('facilityName',obj.name);
        //local storage for Development Purposes
        // const obj = this.switchFacilityForm.value.facility;
        // this.store.dispatch(new SelectedFacility(obj));
        

        

        this.showSwitchCutomers=false;

        this.displayLoader=true;
            setTimeout(()=>{
            this.displayLoader=false;
            this.currentName=obj.name;
            this.router.navigate(['/esg/dashboard/dashboard-1']).then(() => {
                window.location.reload();
            });
        },1500);
        
     }
    

}
