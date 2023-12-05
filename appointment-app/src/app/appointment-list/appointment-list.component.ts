import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';



@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  

  appointmentTitle : string = '';
  appointmentDate : Date = new Date();
  appointments : Appointment[] = [];

  ngOnInit(): void {
    this.appointments = JSON.parse(localStorage.getItem('appointments') || '[]'); // temporaty solution
  }

  addAppointment() {
    if(this.appointmentTitle.trim() === '') {
      alert('Please enter a title for your appointment.');
      return;
    }

    if(this.appointmentTitle.trim().length > 0 && this.appointmentDate) {
      this.appointments =[
        ...this.appointments,
        {
          id: this.appointments.length + 1,
          title: this.appointmentTitle,
          date: this.appointmentDate
        }
      ]
      this.appointmentTitle = '';
      this.appointmentDate = new Date();

      localStorage.setItem('appointments', JSON.stringify(this.appointments)); // temporaty solution
    }
}

deleteAppointment(appointmentId: number) {
  this.appointments = this.appointments.filter(appointment => appointment.id !== appointmentId);
  localStorage.setItem('appointments', JSON.stringify(this.appointments));
}

  
}
