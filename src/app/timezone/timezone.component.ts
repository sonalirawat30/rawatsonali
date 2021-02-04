import { Component, OnInit } from '@angular/core';
import { TimeZoneService } from '../timezone.service';
// import * as moment from 'moment-timezone';

@Component({
selector: 'app-timezone',
templateUrl: './timezone.component.html',
styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
// time: any;
dataOfZone:any;
todayDate = { name: 'India Standard Time', date: 'short', timeZone: new Date() };

constructor(private timeZone:TimeZoneService) { }

ngOnInit(): void {
// this.time = [
// { name: 'India Standard Time', date: 'full', timeZone: new Date() },
// { name: 'China Standard Time', date: 'short', timeZone: new Date()},
// { name: 'us Time', date: 'short', timeZone: new Date() },
// { name: 'uk Standard Time', date: 'short', timeZone: new Date() }
// ]
// }

// public selectedValue(item){
//   this.todayDate = this.time.find((val)=>val.name === item);
//   }
// }
this.dataOfZone = this.timeZone.GetTimeZone();
}

 changeTimezone(item) { 
  console.log("🚀 ~ file: timezone.component.ts ~ line 34 ~ changeTimezone ~ item", item)
  let str = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  console.log(str);
} 
}
