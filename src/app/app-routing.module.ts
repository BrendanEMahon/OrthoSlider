import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {PatientHomeComponent} from "./patient-home/patient-home.component";
import {AdminComponent} from "./admin/admin.component";
import {ThankYouComponent} from "./patient-home/thank-you/thank-you.component";
import {AdminHomeComponent} from "./admin/admin-home/admin-home.component";
import {NewPatientComponent} from "./admin/new-patient/new-patient.component";
import {CurrentPatientComponent} from "./admin/current-patient/current-patient.component";
import {NotFoundComponent} from "./not-found/not-found.component";



const patientRoutes: Routes = [
    {
        path: '',
        redirectTo: '/patient',
        pathMatch: 'full'
    },
    {
        path: 'patient-home',
        component: PatientHomeComponent,
        children: [
            {path: '', component: PatientHomeComponent},
            {path: 'thankyou', component: ThankYouComponent}
        ]
    },
];

const adminRoutes: Routes = [
    {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {path: '', component: AdminHomeComponent},
            {path: 'newpatient', component: NewPatientComponent},
            {path: 'currentpatient', component: CurrentPatientComponent}
        ]
    }
];

const routes: Routes = [
    {
        path: '',
        children: [
                ...patientRoutes,
                ...adminRoutes,
                {path: '',    component: PatientHomeComponent},
                { path: '**',  component: NotFoundComponent }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
