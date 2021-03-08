import { Component, OnInit } from '@angular/core';
import { ICountry } from '../country';
import { ManageService } from '../shared/manage.service';
import { ErrorService } from '../shared/error.service'

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  public countries: ICountry[];
  public errorMsg
  constructor(private manage: ManageService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.manage.getData()
      .subscribe((data) => this.countries = data.data,
        (error) => alert(error))}
}

