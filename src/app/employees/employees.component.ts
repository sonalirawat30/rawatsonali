import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee, IEmployee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employees;
  
  public newEmp: IEmployee = new Employee('', 0);
  public updateEmp: IEmployee = new Employee('', 0);

  constructor(
    private empService: DataService, 
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getEmployess()
  }

  getEmployess() {
    this.empService.getEmployees()
      .subscribe((data) => this.employees = data);
  }

  create() {
    this.empService.createData(this.newEmp)
      .subscribe(_ => {
        this.getEmployess();
        this.newEmp = new Employee('', 0);
      })
  }

  deleteEmployee(id) {
    this.empService.deleteData(id)
      .subscribe(_ => this.getEmployess())
  }

  open(content, emp) {
    this.updateEmp = emp;
    this.modalService.open(content).result.then(_ => {
      this.empService.updateEmployee(this.updateEmp)
        .subscribe(_ => this.getEmployess());
    });
  }

}

