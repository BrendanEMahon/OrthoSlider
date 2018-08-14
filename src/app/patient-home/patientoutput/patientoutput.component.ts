import { Component, OnInit } from '@angular/core';
import { Patient } from '../../patient';

@Component({
  selector: 'app-patientoutput',
  templateUrl: './patientoutput.component.html',
  styleUrls: ['./patientoutput.component.css']
})
export class PatientoutputComponent implements OnInit {

selectedPatient: Patient;
    
  constructor() { }

  ngOnInit() {
  }

}
