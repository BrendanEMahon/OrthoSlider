import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserLoginService} from "../../../service/user-login.service";
import {CognitoCallback} from "../../../service/cognito.service";
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements CognitoCallback {
    
email: string;
errorMessage: string;
    
    constructor(public router: Router,
                public userService: UserLoginService) {
        this.errorMessage = null;
    }
    

    onNext() {
        this.errorMessage = null;
        this.userService.forgotPassword(this.email, this);
    }
    
    cognitoCallback(message: string, result: any) {
        if (message == null && result == null) { //error
            this.router.navigate(['/home/forgotPassword', this.email]);
        } else { //success
            this.errorMessage = message;
        }
    }
    
}

