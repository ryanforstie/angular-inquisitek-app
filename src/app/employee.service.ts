import { Injectable } from "@angular/core";
import { Employee } from "./employee";
import { EMPLOYEES } from "./mock-employees";
import { MessageService } from "./message.service";

import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private messageService: MessageService) {}

  getEmployees(): Observable<Employee[]> {
    // TODO: send the message _after_ fetching the employees
    this.messageService.add("EmployeeService: fetched employees");
    return of(EMPLOYEES);
  }
}
