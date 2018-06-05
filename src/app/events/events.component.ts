import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar/dist/gcal';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#calendar').fullCalendar({
      themeSystem: 'bootstrap4',
      header: {
        left: $(window).width() <= 576 ? null : 'prev,next today',
        center: 'title',
        right: $(window).width() <= 576 ? null : 'month,agendaWeek,agendaDay,listMonth'
      },
      defaultView: $(window).width() <= 576 ? 'listMonth' : 'month',
      googleCalendarApiKey: 'AIzaSyCeqQ8LRO6K9eFVZRmaLA5X6Fw8xixXyNg',
      events: 'waypointyouthcenter@gmail.com',
      eventLimit: true,
      eventClick: function (event) {
        window.open(event.url, 'gcalevent', 'width=700,height=600');
        return false;
      }
    });
  }

}
