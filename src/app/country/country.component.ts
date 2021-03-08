import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { ICountry } from '../country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  public selectedCountry: ICountry;
  private countries: ICountry[];
  public filteredCountries: ICountry[];
  public selectedCountries: ICountry;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getData()
  }
  getData(): void {
    this.countryService.getData()
      .subscribe((data) => { this.countries = data.data });
  }
  filterCountry(event): void {
    let filtered: ICountry[] = [];
    let query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(country);
      }
    }
    this.filteredCountries = filtered;
  }
}