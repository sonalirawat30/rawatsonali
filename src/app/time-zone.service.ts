import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeZoneService {
  public tenantTimeZone: string;

  constructor() { 
    this.tenantTimeZone = 'GMT';
  }
  
  public setTenantTimeZone(tenantTime: string) {
    this.tenantTimeZone = tenantTime;
  }
}
