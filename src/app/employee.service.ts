import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  constructor() {}

  getEmployees() {
    return [
      { id: 1, name: 'Tarun Choudhary', age: 24 },
      { id: 2, name: 'Vinay Rathi', age: 21 },
      { id: 3, name: 'Rituraj Singh Tomar', age: 25 },
      { id: 4, name: 'Piyush Joshi', age: 22 },
      { id: 5, name: 'Mayank Jaiswal', age: 23 },
    ];
  }
}
