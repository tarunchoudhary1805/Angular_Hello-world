import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {

  public employees: { id: number; name: string; age: number; }[] | undefined;

  constructor(private _employeeSerive:EmployeeService){}

  ngOnInit(){
    this.employees = this._employeeSerive.getEmployees();
  }
}
