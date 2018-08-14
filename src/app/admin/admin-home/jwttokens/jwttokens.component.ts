import { Component, OnInit } from '@angular/core';
import {UserLoginService} from "../../../service/user-login.service";
import {Callback, CognitoUtil, LoggedInCallback} from "../../../service/cognito.service";
import {Router} from "@angular/router";

export class Stuff {
    public accessToken: string;
    public idToken: string;
}

@Component({
  selector: 'app-jwttokens',
  templateUrl: './jwttokens.component.html',
  styleUrls: ['./jwttokens.component.css']
})
export class JwtTokensComponent implements LoggedInCallback {
    
    public stuff: Stuff = new Stuff();
    
    constructor(public router: Router, public userService: UserLoginService, public cognitoUtil: CognitoUtil) {
        this.userService.isAuthenticated(this);
        console.log("in JwtTokensComponent");
        
    }
    
    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/home/login']);
        } else {
            this.cognitoUtil.getAccessToken(new AccessTokenCallback(this));
            this.cognitoUtil.getIdToken(new IdTokenCallback(this));
        }
    }
}

export class AccessTokenCallback implements Callback {
    constructor(public jwt: JwtTokensComponent) {
        
    }
    
    callback() {
        
    }
    
    callbackWithParam(result) {
        this.jwt.stuff.accessToken = result;
    }
}

export class IdTokenCallback implements Callback {
    constructor(public jwt: JwtTokensComponent) {
        
    }
    
    callback() {
        
    }
    
    callbackWithParam(result) {
        this.jwt.stuff.idToken = result;
    }
}
