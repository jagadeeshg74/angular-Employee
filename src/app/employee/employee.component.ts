import { Component, OnInit } from '@angular/core';
import {EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) {
    ///////

   }




   employees = [];
   sampletext = 'test';
   //  create employee object
   emp = {} as Employee;
   editFlag  = false;


// life cyle hooks
  ngOnInit() {
    this.emp = {} as Employee;
    this.getEmployees();
    console.log(this.employees);

  }



  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }

  onSelect(employee: Employee) {
     const emp1 = {} as Employee ;

    emp1.email = employee.email;
    emp1.first_name = employee.first_name;
    emp1.last_name = employee.last_name;
    this.emp = emp1;

    this.editFlag = true;
   // console.log(employee);


  }

  onDelete(employee: Employee) {
    this.employeeService.deleteEmployee(employee)
    .subscribe(student => {
     // this.students.push(student);
     this.getEmployees();
    });

  }

  onUpdate() {

    console.log(this.emp);
    this.employeeService.updateEmployee(this.emp)
    .subscribe(student => {
      // this.students.push(student);
      this.getEmployees();
     });

  }

  onSubmit(employeeform) {


    console.log(employeeform);

    console.log(employeeform.invalid);

    if (employeeform.invalid) {
      console.log(employeeform.invalid);
      this.getFormErrors();

      return;
    }

    this.employeeService.addEmployee(employeeform.value)
      .subscribe(student => {
       // this.students.push(student);
       this.getEmployees();
      });
   // this.students.push();

    this.emp = {} as Employee;
    employeeform.reset();
   // employeeform.setPristine();
    // console.log(this.students);

  }


getFormErrors()  {


}

}
