import { Component, OnInit } from '@angular/core';
import { Patient } from '../../patient';

@Component({
  selector: 'app-patientoptions',
  templateUrl: './patientoptions.component.html',
  styleUrls: ['./patientoptions.component.css']
})
export class PatientoptionsComponent implements OnInit {

selectedPatient: Patient;

  constructor() { }

  ngOnInit() {
  }

}
