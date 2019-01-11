import { Component, OnInit } from '@angular/core';
import { Employee} from '../employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor() { }

  // model = new Employee(18, 'Dr IQ', 'test', 'Chuck@gmail.com');
  // emp
  model: Employee = {} as Employee;

  submitted = false;

  onSubmit() { this.submitted = true; }

  newEmployee() {
    this.model = new Employee(42, '', '', '');
  }
  ngOnInit() {
  }

   // TODO: Remove this when we're done
   get diagnostic() { return JSON.stringify(this.model); }

}
