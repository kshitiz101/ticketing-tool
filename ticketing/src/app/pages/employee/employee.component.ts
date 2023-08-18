import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  deptList: any={
    "firstName":"",
    "lastName":"",
    "email":"",
    "issue":"",
    "message":"",
  };

  constructor(private http: HttpClient){}
  ngOnInit(): void{}
  onSend()
  {
  }
}
