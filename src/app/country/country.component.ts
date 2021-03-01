import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries: any[];
  selectedCountry: string[];
  filteredCountries: any[];
  
  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
  this.countryService.getData()
  .subscribe((data) => this.countries = data);
  }
  filterCountry(event) {
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < this.countries.length; i++) {
        let country = this.countries[i];
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }
    this.filteredCountries = filtered;
}
}
