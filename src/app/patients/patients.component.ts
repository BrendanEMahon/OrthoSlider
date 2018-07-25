import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PATIENTS } from '../mock-patients';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
	
	patients = PATIENTS;

	selectedPatient: Patient;	

  constructor() { }

  ngOnInit() {
  }

	onSelect(patient: Patient): void {
	  	this.selectedPatient = patient;	
	}

}
