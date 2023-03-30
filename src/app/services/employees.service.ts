import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  //api url
  baseApiUrl: string = 'https://localhost:7200';

  constructor(private http: HttpClient) { }

  //get all employees
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees');
  }

  //post employee
  addEmployee(employee: Employee): Observable<Employee> {
    employee.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.baseApiUrl + '/api/employees', employee);
  }

  //get employee
  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + '/api/employees/' + id);
  }

  //updating employee
  updateEmployee(id: string, updateEmployeeRequest: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + '/api/employees/' + id, updateEmployeeRequest);
  }

  //deleting employee
  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(this.baseApiUrl + '/api/employees/' + id);
  }
}
