import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Employee } from './employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {
  private employeesurl = 'http://localhost:3000/employees';
  constructor( private http: HttpClient) {}


  /** GET heroes from the server */
getEmployees (): Observable<Employee[]> {

  return this.http.get<Employee[]>(this.employeesurl)
    .pipe(
      catchError(this.handleError('getEmployees', []))
    );
}

 /** POST: add a new hero to the server */
 addEmployee (emp: Employee): Observable<Employee> {
  return this.http.post<Employee>(this.employeesurl, emp, httpOptions)
  .pipe(
    tap((emp_one: Employee ) => this.log(`added Employee w/ id=${ emp_one.id}`)),
    catchError(this.handleError<Employee>('addEmployee'))
  );
}


 /** PUT: update the hero on the server */
 updateEmployee(emp: Employee): Observable<any> {
   console.log('Service ' + emp);
   const url = `${this.employeesurl}/${emp.id}`;
  return this.http.put(url, emp, httpOptions).pipe(
    tap(_ => this.log(`updated student id=${emp.id}`)),
    catchError(this.handleError<any>('updateemployee'))
  );
}

/** DELETE: delete the student from the server */
deleteEmployee (emp: Employee | number): Observable<Employee> {
  const id = typeof emp === 'number' ? emp : emp.id;
  const url = `${this.employeesurl}/${id}`;

  return this.http.delete<Employee>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted Employee id=${id}`)),
    catchError(this.handleError<Employee>('deleteEmployee'))
  );
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

private log(message: string) {
  // this.messageService.add('HeroService: ' + message);
 }
}
