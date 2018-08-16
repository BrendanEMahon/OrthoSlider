import { Component, OnInit } from '@angular/core';
import { Patient } from '../../patient';

@Component({
  selector: 'app-patientcosts',
  templateUrl: './patientcosts.component.html',
  styleUrls: ['./patientcosts.component.css']
})

export class selectedPatient {
    public selectedPatient: Patient;
}

export class PatientcostsComponent implements OnInit {

    public selectedPatient: Patient;

  constructor() { }

  ngOnInit() {
  }

}
