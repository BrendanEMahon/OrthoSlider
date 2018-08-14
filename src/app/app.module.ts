import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserRegistrationService} from "./service/user-registration.service";
import {UserParametersService} from "./service/user-parameters.service";
import {UserLoginService} from "./service/user-login.service";
import {CognitoUtil} from "./service/cognito.service";
import {AwsUtil} from "./service/aws.service";

import {JwtTokensComponent} from "./admin/admin-home/jwttokens/jwttokens.component";
import {DynamoDBService} from "./service/ddb.service";
import {RegistrationComponent} from "./admin/admin-home/registration/registration.component";
import {LogoutComponent, ConfirmRegistrationComponent} from "./admin/admin-home/confirm-registration/confirm-registration.component";
import { ResendComponent } from "./admin/admin-home/resend/resend.component";
import {NewPasswordComponent} from "./admin/admin-home/newpassword/newpassword.component";
import { NavbarComponent } from "./navbar/navbar.component";

import { AppComponent } from './app.component';
import { PatientsComponent } from './admin/current-patient/patients/patients.component';
import { FormsModule } from '@angular/forms';
import { PatientcostsComponent } from './patient-home/patientcosts/patientcosts.component';
import { PatientoptionsComponent } from './patient-home/patientoptions/patientoptions.component';
import { PatientslidersComponent } from './patient-home/patientsliders/patientsliders.component';
import { PatientoutputComponent } from './patient-home/patientoutput/patientoutput.component';
import { PatientcommitmentComponent } from './patient-home/patientcommitment/patientcommitment.component';
import { DownpaymentComponent } from './patient-home/downpayment/downpayment.component';
import { MonthlypaymentComponent } from './patient-home/monthlypayment/monthlypayment.component';
import { AppRoutingModule } from './app-routing.module';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { ThankYouComponent } from './patient-home/thank-you/thank-you.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { NewPatientComponent } from './admin/new-patient/new-patient.component';
import { CurrentPatientComponent } from './admin/current-patient/current-patient.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Patient } from './patient';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { UserActivityComponent } from './admin/admin-home/user-activity/user-activity.component';
import { ForgotPasswordComponent } from './admin/admin-home/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientcostsComponent,
    PatientoptionsComponent,
    PatientslidersComponent,
    PatientoutputComponent,
    PatientcommitmentComponent,
    DownpaymentComponent,
    MonthlypaymentComponent,
    PatientHomeComponent,
    ThankYouComponent,
    AdminHomeComponent,
    NewPatientComponent,
    CurrentPatientComponent,
    NotFoundComponent,
    AdminComponent,
    UserActivityComponent,
    JwtTokensComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    ConfirmRegistrationComponent,
    ResendComponent,
    NewPasswordComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
	FormsModule,
	AppRoutingModule
  ],
  providers: [
    CognitoUtil,
    AwsUtil,
    DynamoDBService,
    UserRegistrationService,
    UserLoginService,
    UserParametersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
