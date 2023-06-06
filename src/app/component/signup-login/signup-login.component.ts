import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/userServices/user.service';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.scss']
})
export class SignupLoginComponent implements OnInit{
  formcontainer!: FormGroup;
  Loginform!:FormGroup;

  hide:boolean = true;
  constructor(private formBuilder: FormBuilder,private _snackBar: MatSnackBar,private user:UserService,private router:Router){ }

  ngOnInit():void {
    this.formcontainer = this.formBuilder.group({
      firstname:['',[Validators.required,Validators.minLength(3)]],
      lastname:['',[Validators.required,Validators.minLength(3)]],
      email1:['',[Validators.required,Validators.email]],
      password1:['',[Validators.required,Validators.minLength(7)]],
    });
    this.Loginform = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(7)]],
    });
  }

    onSignup(){
      console.log('inside onSignup')
      if(this.formcontainer.valid){
        console.log("data is vaild",this.formcontainer.value)
        let signupData={
          firstname:this.formcontainer.value.firstname,
          lastname:this.formcontainer.value.lastname,
          email:this.formcontainer.value.email1,
          password:this.formcontainer.value.password1
        }
        //console.log('data in signup',signupData)
        this.user.signup(signupData).subscribe(
          (response) => {
            console.log("Sign-up successful", response);
            this._snackBar.open("Registered successfully", "ok", { duration: 3000 });
          },
          (error) => { 
            this._snackBar.open("Error " + error.status + " " + error.statusText, "try again", { duration: 3000 }); });
      }
      else {
        // console.log("Enter valid data");
        this._snackBar.open("Enter valid data", "ok", { duration: 3000 });
       }
      
    }

    onLogin(){
      console.log('inside onLogin')
      if(this.Loginform.valid){
        console.log("data is vaild",this.Loginform.value)
        let loginData={
          email:this.Loginform.value.email,
          password:this.Loginform.value.password
        }

        this.user.login(loginData).subscribe(
          (response:any) => {
            console.log("login successful", response);
            localStorage.setItem("LoginId",response.data)
            this.router.navigateByUrl('/dashboard')
            this._snackBar.open("Login successfully", "ok", { duration: 3000 });
          },
          (error) => { 
            this._snackBar.open("Error " + error.status + " " + error.statusText, "try again", { duration: 3000 }); });
      }
      else {
        this._snackBar.open("Enter valid data", "ok", { duration: 3000 });
        }
      
     }

}
