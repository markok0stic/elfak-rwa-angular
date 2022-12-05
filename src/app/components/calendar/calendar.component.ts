import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Calendar, CalendarOptions, EventApi, FullCalendarComponent} from "@fullcalendar/angular";
import { EventInput } from '@fullcalendar/angular';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, AfterViewInit {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  events: EventInput[] = [];
  calendar: Calendar | undefined;
  currentEvents: EventApi[] = [];
  TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
  END_STR = (new Date('2023-12-11')).toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
  calendarOptions!: CalendarOptions;
  eventGuid = 0;
  constructor() {

    this.events = [
      {
        id: this.createEventId(),
        title: 'All-day event',
        start: this.TODAY_STR,
        end: this.END_STR
      },
      {
        id: this.createEventId(),
        title: 'All-day event',
        start: this.TODAY_STR,
        end: this.END_STR
      },
      {
        id: this.createEventId(),
        title: 'All-day event',
        start: this.TODAY_STR,
        end: this.END_STR,
      },
      {
        id: this.createEventId(),
        title: 'All-day event',
        start: this.TODAY_STR,
        end: this.END_STR
      },
      {
        id: this.createEventId(),
        title: 'All-day event',
        start: this.TODAY_STR,
        end: this.END_STR
      },
      {
        id: this.createEventId(),
        title: 'Timed event',
        start: this.TODAY_STR + 'T00:00:00',
        end: this.TODAY_STR + 'T03:00:00'
      },
      {
        id: this.createEventId(),
        title: 'Timed event',
        start: this.TODAY_STR + 'T12:00:00',
        end: this.TODAY_STR + 'T15:00:00'
      }
    ];
  }

  onDateClick(res: {dateStr: string})
  {
    this.events = [
      {
        id: this.createEventId(),
        title: 'All-day event',
        start: this.TODAY_STR,
        end: this.END_STR
      }]
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      dateClick: this.onDateClick.bind(this),
      events: this.events,
      eventBackgroundColor: 'green',
      eventBorderColor: 'green',
      //initialDate: new Date('2023-05-05')
    };
    this.calendarComponent.getApi().render()
  }
  ngOnInit(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      dateClick: this.onDateClick.bind(this),
      events: this.events,
      eventBackgroundColor: 'red',
      eventBorderColor: 'green'
    };
  }
  ngAfterViewInit(){
  }
  createEventId()
  {
    return String(this.eventGuid++);
  }

  navigate(path: string) {

  }
}
