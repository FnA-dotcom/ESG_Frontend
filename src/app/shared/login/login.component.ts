import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as fromStore from '../login/store/store'
import { Store } from '@ngrx/store';
import { Login, UpdateLoginFailState } from './store/actions/login.action';
import { LoginState } from './store/store';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LoginServiceService } from './services/login-service.service';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})

export class LoginComponent implements OnInit {
  strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  loginForm: FormGroup;
  changePasswordForm:FormGroup;
  forgetPasswordNewPasswordForm:FormGroup;
  forgetEmailForm:FormGroup;
  submitted: boolean = false;
  userNameIncorrect:boolean=false;
  passwordIncorrect:boolean=false;

  showChangePassword:boolean=false;

  showPasswordCheckbox:boolean=false;

  verificationCode:string;

  verificationStatus:string;
  verificationMessage:string;


  showForgetPassword:boolean=false;
  forgetPasswordEmail:string;
  forgetPasswordEmailVerificationStatus:string;
  forgetPasswordEmailMessage:string;

  showEmailCodeVerificationFields=true;

  forgetPasswordVerificationCode:string;
  forgetPasswordVerificationStatus:string;
  forgetPasswordVerificationMessage:string;



  constructor(
    private fb: FormBuilder,
    // private store: Store<LoginState>,
    // private state: Store<fromStore.LoginState>,
    private messageService: MessageService,
    private loginService:LoginServiceService,
    private loginService2:LoginService,
    private router:Router,
    private http:HttpClient
    ) { }

  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    
    

  
  }

  get fc() {return this.loginForm.controls}
  

  public submit(){

    let url='http://appx.rovermd.com:8081/user/getUser';

    const payload = {
      userName: this.loginForm.value.userName,
      password: this.loginForm.value.password
    }

    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   // 'Accept': 'application/json',
    //   'X-TenantID': 'md'
    //    });
    
    // let options = { headers: headers };

    // this.http.post<any>(url,payload,options).subscribe(res=>{
    //   console.log(res);
    // })
  
   
    this.submitted = true;
    if(this.loginForm.invalid){
      return
    }

  

    let user=this.loginService.login(payload);

    if(user === 'admin')
    {
      
      this.router.navigate(['/esg/dashboard/dashboard-1']);
      localStorage.setItem('facilityName','Schertz');
      
    }
    else if(user === 'lab')
    { 
      this.router.navigate(['/roverlab/dashboard/general'])
      
    }
    else if(user === 'frontdesk')
    {
      alert('Login Successfull');
      this.router.navigate(['/esg/dashboard/dashboard-1'])
      
    }
    else if(user === 'firstLogin')
    {
      this.showChangePasswordForm();
    }
    else
    {
      
      // this.userNameIncorrect=true;
      // this.passwordIncorrect=true;
      this.showError('Invalid Credentials, Please try again');
    }
   
  }

  showError(msg) {

    this.messageService.add({severity:'error', summary: 'Error', detail: msg});
    }

  showChangePasswordForm()
  {
    this.changePasswordForm=this.fb.group({
      changePWcurrentPassword:['',Validators.required],
      changePWNewPassword:['',Validators.required],
      changePWConfirmNewPassword:['',Validators.required],
    })

    this.changePasswordForm.controls['changePWcurrentPassword'].disable();
    this.changePasswordForm.controls['changePWNewPassword'].disable();
    this.changePasswordForm.controls['changePWConfirmNewPassword'].disable();

    this.showChangePassword=true;
    
  }

  submitPasswordChange()
  {
    if(!(this.strongRegex.test( this.changePasswordForm.controls["changePWNewPassword"].value))){
      alert("New Password Criteria doesn't match")
      this.changePasswordForm.controls['changePWConfirmNewPassword'].setValue('')
      return (false)


    }
    else{
    alert('Password Changed Successfully, please login again with updated credentials');
    this.changePasswordForm.reset();
    this.loginForm.reset();
    this.verificationCode='';
    this.verificationMessage='';
    this.verificationStatus=undefined;
    this.showChangePassword=false;
  return (true)  
  }
  }

  verifyCode()
  {
    //verify code using API

    if(this.verificationCode==='ASD123')
    {
    this.verificationStatus='Successfull';
    this.verificationMessage='Verification Successfull';
    }
    else
    {
    this.verificationStatus='Unsuccessfull';
    this.verificationMessage='Verification Unsuccessfull';
    }

    if(this.verificationStatus==='Successfull')
    {
    this.changePasswordForm.controls['changePWcurrentPassword'].enable();
    this.changePasswordForm.controls['changePWNewPassword'].enable();
    this.changePasswordForm.controls['changePWConfirmNewPassword'].enable();
    }

  }


  onResendVerificationCode()
  {
    alert('Code has been sent to your registered Email');
  }

  
  forgetPassword()
  {
    this.showForgetPassword=true;
    this.forgetEmailForm=this.fb.group({
        primaryEmail:['',[Validators.required,Validators.email]]
      
    })
  
}

  verifyForgetPasswordEmail()
  {

    if(this.forgetEmailForm.controls['primaryEmail'].value==='abc@xyz.com')
    {
    this.forgetPasswordEmailVerificationStatus='Successfull';
    this.forgetPasswordEmailMessage='A Verification Code has been sent to your email address, please enter the code below to proceed';
    }
    else
    {
    this.forgetPasswordEmailVerificationStatus='Unsuccessfull';
    this.forgetPasswordEmailMessage='We were unable to find a matching registerd address, please try again or contact an Administrator';
    }

  }

  verifyForgetPWVerificationCode()
  {
    if(this.forgetPasswordVerificationCode==='QWE123')
    {
    this.forgetPasswordVerificationStatus='Successfull';
    this.forgetPasswordVerificationMessage='Verification Successfull, Please enter new credentials';
    this.showEmailCodeVerificationFields=false;
    this.forgetPasswordGenerateNewPasswordForm();
    }
    else
    {
    this.forgetPasswordVerificationStatus='Unsuccessfull';
    this.forgetPasswordVerificationMessage='Verification Unsuccessfull';
    }
  }

  forgetPasswordGenerateNewPasswordForm()
  {
    this.forgetPasswordNewPasswordForm=this.fb.group({
      forgetPWNewPassword:['',Validators.required],
      forgetPWConfirmNewPassword:['',Validators.required],
    })
  }

  submitForgetPasswordChange()
  {
    if(!(this.strongRegex.test( this.forgetPasswordNewPasswordForm.controls["forgetPWNewPassword"]
    .value))){
      alert("new password criteria doesn't match")
      this.forgetPasswordNewPasswordForm.controls['forgetPWConfirmNewPassword'].setValue('')
      return (false)

    }
    else{
    alert('Password Changed Successfully, please login again with updated credentials');
    this.showForgetPassword=false;
    this.forgetPasswordNewPasswordForm.reset();
    this.forgetPasswordEmail=undefined;
    this.forgetPasswordEmailVerificationStatus=undefined;
    this.forgetPasswordEmailMessage=undefined;
    this.forgetPasswordVerificationCode=undefined;
    this.forgetPasswordVerificationStatus=undefined;
    this.forgetPasswordVerificationMessage=undefined;
    this.showEmailCodeVerificationFields=true;
    return (true)
    }
  }

  resetForgetPassword()
  {
    this.showForgetPassword=false;
    this.forgetPasswordNewPasswordForm.reset();
    this.forgetPasswordEmail=undefined;
    this.forgetPasswordEmailVerificationStatus=undefined;
    this.forgetPasswordEmailMessage=undefined;
    this.forgetPasswordVerificationCode=undefined;
    this.forgetPasswordVerificationStatus=undefined;
    this.forgetPasswordVerificationMessage=undefined;
    this.showEmailCodeVerificationFields=true;
  }
  passwordValidation() {
    let passwordValue =
        this.forgetPasswordNewPasswordForm.controls["forgetPWNewPassword"]
            .value;
         

    if (passwordValue !== "") {
      
        if (this.strongRegex.test(passwordValue)) {
        } else {
            alert("password Criteria doesn't match");
           
        }
    }
}

confirmNewPassword(){
 
  if(this.forgetPasswordNewPasswordForm.controls['forgetPWConfirmNewPassword'].value !== ''){
    if(this.forgetPasswordNewPasswordForm.controls['forgetPWNewPassword'].value === ''){
      alert('Please Enter New Password First!')
      this.forgetPasswordNewPasswordForm.controls['forgetPWConfirmNewPassword'].setValue('')
    }

   else if(this.forgetPasswordNewPasswordForm.controls['forgetPWConfirmNewPassword'].value !== this.forgetPasswordNewPasswordForm.controls['forgetPWNewPassword'].value){
    alert("Password Mismatch")
    this.forgetPasswordNewPasswordForm.controls['forgetPWConfirmNewPassword'].setValue('')
   }
  }
}
ftPasswordValidation(){
    
    let ftpasswordValue =
    this.changePasswordForm.controls["changePWNewPassword"]
        .value;
     

if (ftpasswordValue !== "") {
  
    if (this.strongRegex.test(ftpasswordValue)) {
        if(this.changePasswordForm.controls['changePWcurrentPassword'].value === this.changePasswordForm.controls['changePWNewPassword'].value){
        alert("new password must be different from current password")
        this.changePasswordForm.controls['changePWNewPassword'].setValue('')
        }
    } 
    else {
        alert("password Criteria doesn't match");
       
    }
}
}
ftconfirmNewPassword(){
  
 
    if(this.changePasswordForm.controls['changePWConfirmNewPassword'].value !== ''){
      if(this.changePasswordForm.controls['changePWNewPassword'].value === ''){
        alert('Please Enter New Password First!')
        this.changePasswordForm.controls['changePWConfirmNewPassword'].setValue('')
      }
  
     else if(this.changePasswordForm.controls['changePWConfirmNewPassword'].value !== this.changePasswordForm.controls['changePWNewPassword'].value){
      alert("Password Mismatch")
      this.changePasswordForm.controls['changePWConfirmNewPassword'].setValue('')
     }
    }
  }
  
    
  }

