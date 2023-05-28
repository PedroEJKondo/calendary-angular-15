import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
 

import { Calendar } from '@fullcalendar/core';
import adaptivePlugin from '@fullcalendar/adaptive';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

// If you use the default popups, use this. 

@Component({
  selector: 'app-calendary',
  templateUrl: './calendary.component.html',
  //   templateUrl: `<div>
  //           <h1>Demo App</h1>
  //           <full-calendar [options]="calendarOptions"></full-calendar>
  //   </div>
  // `,
  styleUrls: ['./calendary.component.css']
})
export class CalendaryComponent {
 

  // this.calendar.render();
  
  calendarOptionqs: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date() }
    ]
  };
  
  calendarOptions: CalendarOptions = {
    plugins: [ adaptivePlugin, interactionPlugin, dayGridPlugin, listPlugin, timeGridPlugin, resourceTimelinePlugin ],
    locale: 'pt-br',
    allDayText: '24 horas',
    buttonText: {
      today: 'Hoje',
      month: 'Mês',
      week: 'Semana',
      day: 'Hoje',
      days: 'Hoje',
      list: 'Lista'
    },
    schedulerLicenseKey: 'XXX',
    now: '2018-02-07',
    editable: true, // enable draggable events
    aspectRatio: 1.8,
    scrollTime: '00:00', // undo default 6am scrollTime
    headerToolbar: {
      left: 'today prev,next',
      center: 'title',
      right: 'resourceTimelineDay,resourceTimelineThreeDays,timeGridWeek,dayGridMonth,listWeek'
    },
    // initialView: 'resourceTimelineDay',
    initialView: 'dayGridMonth',
    views: {
      resourceTimelineThreeDays: {
        type: 'resourceTimeline',
        duration: { days: 3 },
        buttonText: '3 Dias'
      }
    },
    resourceAreaHeaderContent: 'Rooms',
    resources: [
      { id: 'a', title: 'Auditorium A' },
      { id: 'b', title: 'Auditorium B', eventColor: 'green' },
      { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
      { id: 'd', title: 'Auditorium D', children: [
        { id: 'd1', title: 'Room D1' },
        { id: 'd2', title: 'Room D2' }
      ] },
      { id: 'e', title: 'Auditorium E' },
      { id: 'f', title: 'Auditorium F', eventColor: 'red' },
      { id: 'g', title: 'Auditorium G' },
      { id: 'h', title: 'Auditorium H' },
      { id: 'i', title: 'Auditorium I' },
      { id: 'j', title: 'Auditorium J' },
      { id: 'k', title: 'Auditorium K' },
      { id: 'l', title: 'Auditorium L' },
      { id: 'm', title: 'Auditorium M' },
      { id: 'n', title: 'Auditorium N' },
      { id: 'o', title: 'Auditorium O' },
      { id: 'p', title: 'Auditorium P' },
      { id: 'q', title: 'Auditorium Q' },
      { id: 'r', title: 'Auditorium R' },
      { id: 's', title: 'Auditorium S' },
      { id: 't', title: 'Auditorium T' },
      { id: 'u', title: 'Auditorium U' },
      { id: 'v', title: 'Auditorium V' },
      { id: 'w', title: 'Auditorium W' },
      { id: 'x', title: 'Auditorium X' },
      { id: 'y', title: 'Auditorium Y' },
      { id: 'z', title: 'Auditorium Z' }
    ],
    events: [
      { id: '1', resourceId: 'b', start: '2018-02-07T02:00:00', end: '2018-02-07T07:00:00', title: 'event 1' },
      { id: '2', resourceId: 'c', start: '2018-02-07T05:00:00', end: '2018-02-07T22:00:00', title: 'event 2' },
      { id: '3', resourceId: 'd', start: '2018-02-06', end: '2018-02-08', title: 'event 3' },
      { id: '4', resourceId: 'e', start: '2018-02-07T03:00:00', end: '2018-02-07T08:00:00', title: 'event 4' },
      { id: '5', resourceId: 'f', start: '2018-02-07T00:30:00', end: '2018-02-07T02:30:00', title: 'event 5' }
    ]
  //   plugins: [dayGridPlugin],
  //   initialView: 'dayGridMonth',
  //   weekends: false,
  //   events: [
  //     { title: 'Meeting', start: new Date() }
  //   ]
  };

  constructor() {
    // this.calendar.createSchedules([
    //   {
    //     id: '1',
    //     calendarId: '1',
    //     title: 'my schedule',
    //     category: 'time',
    //     dueDateClass: '',
    //     start: '2023-05-18T22:30:00+09:00',
    //     end: '2023-05-19T02:30:00+09:00'
    //   },
    //   {
    //     id: '2',
    //     calendarId: '2',
    //     title: 'second schedule',
    //     category: 'time',
    //     dueDateClass: '',
    //     start: '2023-05-18T22:30:00+09:00',
    //     end: '2023-05-23T02:30:00+09:00',
    //     isReadOnly: true    // schedule is read-only
    //   }
    // ]);

    // this.calendar.on('clickMore', function (event:any) {
    //   console.log('clickMore', event.date, event.target);
    // });
  }
  // calendar.createSchedules([
  //   {
  //     id: '1',
  //     calendarId: '1',
  //     title: 'my schedule',
  //     category: 'time',
  //     dueDateClass: '',
  //     start: '2018-01-18T22:30:00+09:00',
  //     end: '2018-01-19T02:30:00+09:00'
  //   },
  //   {
  //     id: '2',
  //     calendarId: '1',
  //     title: 'second schedule',
  //     category: 'time',
  //     dueDateClass: '',
  //     start: '2018-01-18T17:30:00+09:00',
  //     end: '2018-01-19T17:31:00+09:00',
  //     isReadOnly: true    // schedule is read-only
  //   }
  // ]);

}
