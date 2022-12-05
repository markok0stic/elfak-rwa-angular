import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from "@fullcalendar/angular";
import {setToken} from "../../auth/user-context";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events = [];

  calendarOptions!: CalendarOptions;
  constructor() {}

  onDateClick(res: {dateStr: string})
  {
    console.log(res.dateStr)
  }
  ngOnInit(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      dateClick: this.onDateClick.bind(this),
      events: this.events
    }
  }


  navigate(path: string) {

  }
}
