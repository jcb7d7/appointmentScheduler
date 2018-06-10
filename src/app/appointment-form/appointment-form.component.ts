import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {

  constructor() { }

  model = new Appointment(18, "2015-03-25T12:00:00Z", "2015-03-25T13:00:00Z", 'Colonoscopy');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

}
