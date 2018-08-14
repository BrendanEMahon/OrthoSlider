import { Component, OnInit } from '@angular/core';
import { Patient } from '../../patient';

@Component({
  selector: 'app-patientcosts',
  templateUrl: './patientcosts.component.html',
  styleUrls: ['./patientcosts.component.css']
})
export class PatientcostsComponent implements OnInit {

selectedPatient: Patient;

  constructor() { }

  ngOnInit() {
  }

}
