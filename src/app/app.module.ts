import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {EmployeeService} from './employee.service';
import { OnChangesComponent } from './employee/emp-changes.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { TestFormComponent } from './test-form/test-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    OnChangesComponent,
    EmployeeFormComponent,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
