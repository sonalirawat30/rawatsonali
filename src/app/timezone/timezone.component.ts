import { Component, OnInit } from '@angular/core';
import { TimeZoneService } from '../timezone.service';
// import * as moment from 'moment-timezone';

@Component({
selector: 'app-timezone',
templateUrl: './timezone.component.html',
styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {

dataOfZone:any;
 todayDate=new Date().toLocaleString('en-US', { timeZone: "Asia/Kolkata"});

constructor(private timeZone:TimeZoneService) { }

ngOnInit(): void {

this.dataOfZone = this.timeZone.GetTimeZone();
}

changeTimezone(item) {
this.todayDate = new Date().toLocaleString('en-US', { timeZone: item.target.value });
// console.log(str);
}
}