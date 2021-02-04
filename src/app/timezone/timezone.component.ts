import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
selector: 'app-timezone',
templateUrl: './timezone.component.html',
styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
time: any;
todayDate = { name: 'India Standard Time', date: 'short', timeZone: new Date() };

constructor() { }

ngOnInit(): void {
this.time = [
{ name: 'India Standard Time', date: 'full', timeZone: new Date() },
{ name: 'China Standard Time', date: 'short', timeZone: new Date()},
{ name: 'us Time', date: 'short', timeZone: new Date() },
{ name: 'uk Standard Time', date: 'short', timeZone: new Date() }
]
}

public selectedValue(item){
  this.todayDate = this.time.find((val)=>val.name === item);
  }
}

