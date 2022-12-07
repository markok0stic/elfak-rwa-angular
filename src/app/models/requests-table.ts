import {DateRange} from "@fullcalendar/angular";

export interface PeriodicElement {
  description: string;
  position: number;
  period: DateRange;
  status: string;
}
export const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, description: 'Hydrogen', period: {start: new Date('2022-10-10'), end: new Date('2022-12-12')}, status: 'H'}
];
