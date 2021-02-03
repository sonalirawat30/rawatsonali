import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
  time: any;

  constructor() { }

  ngOnInit(): void {
    this.time = [
      { name: 'India Standard Time', date: 'short', timeZone: 'UTC +4' },
      { name: 'China Standard Time', date: 'short', timeZone: 'UTC +8' }
    ]
  }

  todayDate: Date = new Date();
}
