import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { ClaimdataService } from 'src/app/feature/claim/claimdata.service';
// import { PatientEditService } from 'src/app/feature/patient-services/patient/patient-edit.service';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  menuUpdate = new Subject();
  styleUpdate = new Subject();

  facilityType;

  model;

  facilityModel = [
    
    {
      label: 'Dashboard',icon: 'pi pi-home',expanded:true,
       items: [
           // {
               {label: 'Dashboard 1',icon:'pi pi-angle-double-right',
                routerLink: ['/esg/dashboard/dashboard-1'],
                expanded:true,
                allowedRoles: ['monica', 'victoria'],
                command: (event) => { this.handleModuleClick(event.item)},
                style:{background:'#588157'}
               },
               {label: 'Dashboard 2',icon:'pi pi-angle-double-right',
               routerLink: ['/esg/dashboard/dashboard-2'],
                allowedRoles: ['monica', 'victoria'],
                command: (event) => { this.handleModuleClick(event.item)},
                style:{}
               },
               {label: 'Dashboard 3',icon:'pi pi-angle-double-right',
               routerLink: ['/esg/dashboard/marketing-dashboard'],
                allowedRoles: ['monica', 'victoria'],
                command: (event) => { this.handleModuleClick(event.item)},
                style:{}
               },
          
                ]
   },

    {
       label: 'CRM Services',icon: 'pi pi-user',escape:false,
        items: [
            // {
                {label: 'CRM Services',icon:'pi pi-angle-double-right',
                //  routerLink: ['/rovermd/patient-service/patient-dashboard'],
                
                 allowedRoles: ['monica', 'victoria'],
                 command: (event) => { this.handleModuleClick(event.item)},
                 style:{}
                },
                // {label: 'Incomplete/Inactive',icon:'pi pi-angle-double-right',
                //  routerLink: ['/rovermd/patient-service/incomplete-deactive'],
                
                //  allowedRoles: ['monica', 'victoria'],
                //  command: (event) => { this.handleModuleClick(event.item)},
                //  style:{}
                // },
           
                 ]
    },
    // {
    //              label: 'Claims', icon: 'pi pi-copy',escape:false,
    //              items: [
    //                  {label: 'View Claims',icon:'pi pi-angle-double-right',
    //                  routerLink: ['/rovermd/Claim/View-Claim'], command: (event) => { this.handleModuleClick(event.item)},style:{} },
    //              ]
    //  },
    //  {
        
    //              label: 'Claim Payment', icon: 'pi pi-money-bill',
    //              items: [
    //                  {label: 'Post',icon:'pi pi-angle-double-right', routerLink:[ '/rovermd/Claim-Payment/Post-Claim'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
    //                  {label: 'View',icon:'pi pi-angle-double-right', routerLink:[ '/rovermd/Claim-Payment/View-Dashboard'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
    //                  {label: 'ERA',icon:'pi pi-angle-double-right',  routerLink:[ '/rovermd/Claim-Payment/ERA'],command: (event) => { this.handleModuleClick(event.item)},style:{}},
                    
    //              ]
        
    //  },
    // {
        
    //     label: 'Claim Master', icon: 'pi pi-file',
    //     items: [
    //         {label: 'CPT Master',icon:'pi pi-angle-double-right', routerLink:[ '/rovermd/claim-master/cpt-master'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
    //         {label: 'Revenue Master',icon:'pi pi-angle-double-right', routerLink:[ '/rovermd/claim-master/revenue-master'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
    //         {label: 'CPT to Revenue',icon:'pi pi-angle-double-right',  routerLink:[ '/rovermd/claim-master/cpt-to-revenue'],command: (event) => { this.handleModuleClick(event.item)},style:{}},
           
    //     ]

    // },
    //  {
    //              label: 'Other Services', icon: 'pi pi-plus-circle',
    //              items: [
    //                  {label: 'Upload Documents', routerLink: ['/rovermd/other-service/upload'],command: (event) => { this.handleModuleClick(event.item)},style:{}},
    //                  {label: 'View Documents', routerLink: ['/rovermd/other-service/view-documents'],command: (event) => { this.handleModuleClick(event.item)},style:{}},
    //                 //  {label: 'Eligibility Inquiry',routerLink: ['/rovermd/other-service/eligibility-inquiry'],command: (event) => { this.handleModuleClick(event.item)},style:{}},
    //                  {label: 'Eligibility (No Registration)', routerLink: ['/rovermd/other-service/eligibility-no-registration'],command: (event) => { this.handleModuleClick(event.item)},style:{}},
    //                  {label: 'Add Doctor', routerLink: ['/rovermd/other-service/add-doctor'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
    //                  {label: 'Add Allergy Info', routerLink: ['/rovermd/other-service/add-allergy-info'],command: (event) => { this.handleModuleClick(event.item)},style:{}  },
    //              ]    
    //  }, 
    //  {
    //              label: 'Payments', icon: 'pi pi-credit-card',
    //              items: [
    //                  {label: 'Create Invoice', routerLink: ['/rovermd/payments/create-invoice'],command: (event) => { this.handleModuleClick(event.item)},style:{}},
    //                  {label: 'Collect Payments', routerLink: ['/rovermd/payments/payment-collection'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
    //                  {label: 'Insurance Payment',routerLink: ['/rovermd/payments/insurance-payment'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
    //              ]
    //  },
    
    //  {
       
    //              label: 'Reports', icon: 'pi pi-copy',
    //              items: [
    //                 {label: 'Reports Dashboard', routerLink:['/rovermd/Reports/dashboard'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
                    
    //              ]
    //  },
    //  {
        
    //              label: 'User Management', icon: 'pi pi-user-plus',
    //              items: [
    //                  {label: 'Create User', routerLink: ['/rovermd/users-management/users'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
    //                  {label: 'Change Facility Info',routerLink: ['/rovermd/users-management/change-facility-info'], command: (event) => { this.handleModuleClick(event.item)},style:{} },
    //                  {label: 'Block/UnBlock IP', routerLink: ['/rovermd/users-management/block'],command: (event) => { this.handleModuleClick(event.item)},style:{}},
    //                  {label: 'Security Master', routerLink: ['/rovermd/users-management/security-master'],command: (event) => { this.handleModuleClick(event.item)},style:{}},
    //                  {label: 'Merge MRN', routerLink: ['/rovermd/users-management/merge-mrn'],command: (event) => { this.handleModuleClick(event.item)},style:{}}
    //              ]
    //  },
    //  {

    //              label: 'SMS Management', icon: 'pi pi-envelope',
    //              items: [
    //                  {label: 'Single SMS', routerLink: ['/rovermd/sms-management/single-sms'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
    //                  {label: 'Bulk SMS', routerLink: ['/rovermd/sms-management/bulk-sms'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
                    
    //              ]
    //  },
    
];

labModel=[
    
    { 
        label: 'Dashboard', icon: 'pi pi-home',expanded:true,
        items: [
            {label: 'General', routerLink: ['/roverlab/dashboard/general'],command: (event) => { this.handleModuleClick(event.item)},style:{background:'black'} },
            {label: 'Billing', routerLink: ['/roverlab/dashboard/billing'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
        ]
    },
    { 
        label: 'Lab Services', icon: 'pi pi-home',
        items: [
            {label: 'Registration', routerLink: ['/roverlab/lab-services/register'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
            {label: 'Orders', routerLink: ['/roverlab/lab-services/orders'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
            {label: 'Results', routerLink: ['/roverlab/lab-services/results'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
        ]
    },
    { 
        label: 'Manifests', icon: 'pi pi-home',
        items: [
            {label: 'Create Manifest', routerLink: ['/roverlab/manifests/create'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
            {label: 'View Manifest', routerLink: ['/roverlab/manifests/view'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
            {label: 'Manifest Retrieve', routerLink: ['/roverlab/manifests/retrieve'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
        ]
    },
    { 
        label: 'Reports', icon: 'pi pi-home',
        items: [
            {label: 'Reports Dashboard', routerLink: ['/roverlab/reports/dashboard'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
        ]
    },
    { 
        label: 'Master Definitions', icon: 'pi pi-home',
        items: [
            {label: 'Add Client', routerLink: ['/roverlab/master-definitions/add-client'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
            {label: 'Add Location', routerLink: ['/roverlab/master-definitions/add-location'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
            {label: 'Add Doctor', routerLink: ['/roverlab/master-definitions/add-doctor'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
            {label: 'Change Facility Info', routerLink: ['/roverlab/master-definitions/change-facility-info'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
            {label: 'Generate QR Forms', routerLink: ['/roverlab/master-definitions/generate-qr-forms'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
        ]
    },
    { 
        label: 'User Management', icon: 'pi pi-home',
        items: [
            {label: 'Create User', routerLink: ['/roverlab/user-management/create-user'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
            {label: 'Assign Rights', routerLink: ['/roverlab/user-management/assign-rights'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
            {label: 'Assign Location', routerLink: ['/roverlab/user-management/assign-location'],command: (event) => { this.handleModuleClick(event.item)},style:{} },
        ]
    },
]

  constructor(
            //   private patientService:PatientEditService,
            //   private claimService:ClaimdataService
    ) { 
        this.facilityType=localStorage.getItem('facilityType');

        if(this.facilityType==='facility')
        {
            this.model=this.facilityModel;
        }
        else if(this.facilityType==='lab')
        {
           this.model=this.labModel;
        }
        else
        {
            alert('error in assigning facility type')
        }

    // this.patientService.patientDashboardCounter.subscribe(count=>{
    //   let labelString;
    //   if(count>0)
    //   {
    //   labelString='Patient &nbsp; <b class="p-error2">'+count+'</b>';
  
  
    //   this.model[1].label=labelString;

    //   this.menuUpdate.next('update');
    //   }
    //   else if(count === 0)
    //   {
    //     labelString='Patient';
    //     this.model[1].label=labelString;

    //     this.menuUpdate.next('update');
    //   }
      
    //   })

    //   this.claimService.claimDashboardCounter.subscribe(count=>{
    //     let labelString;
    //     if(count>0)
    //     {
    //     labelString='Claims &nbsp; <b class="p-error2">'+count+'</b>';
        
    //     this.styleUpdate.next({label:'View Claims'});
    
    //     this.model[2].label=labelString;
  
    //     this.menuUpdate.next('update');
    //     }
    //     else if(count === 0)
    //     {
    //       labelString='Claims';
    //       this.model[2].label=labelString;
  
    //       this.menuUpdate.next('update');
    //     }
  
        
    
        
    //     })
  }

  


  handleModuleClick(data)
    {
    
        for(let i=0;i<this.model.length;i++)
        {
            for(let j=0;j<this.model[i].items.length;j++)
            {
                // console.log(this.model[i].items[j]);
                if(this.model[i].items[j].label === data.label)
                {
                    this.model[i].items[j].style={background:'#588157'};
                }
                else
                {
                    this.model[i].items[j].style={};
                }

            }
        }

    }
}
