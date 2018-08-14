import { Component, OnInit } from '@angular/core';
import {UserRegistrationService} from "../../../service/user-registration.service";
import {CognitoCallback} from "../../../service/cognito.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-resend',
  templateUrl: './resend.component.html',
  styleUrls: ['./resend.component.css']
})
export class ResendComponent implements CognitoCallback {

email: string;
errorMessage: string;
    
    constructor(public registrationService: UserRegistrationService, public router: Router) {
        
    }
    
    resendCode() {
        this.registrationService.resendCode(this.email, this);
    }
    
    cognitoCallback(error: any, result: any) {
        if (error != null) {
            this.errorMessage = "Something went wrong...please try again";
        } else {
            this.router.navigate(['./confirm-registration', this.email]);
        }
    }

}