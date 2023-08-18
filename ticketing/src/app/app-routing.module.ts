import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DepartmentComponent } from './pages/department/department.component';
import { LeavesComponent } from './pages/leaves/leaves.component';
import { EmpLayoutComponent } from './pages/emp-layout/emp-layout.component';
import { DeptLayoutComponent } from './pages/dept-layout/dept-layout.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',component:LayoutComponent,
    children:[
      {
        path:'tickets',component:TicketsComponent
      },
      {
        path:'Employee',component:EmployeeComponent
      },
      {
        path:'department',component:DepartmentComponent
      },
      {
        path:'leaves',component:LeavesComponent
      },
    ]
  },
  {
    path:'',component:EmpLayoutComponent,
    children:[
      {
        path:'EmpTickets',component:TicketsComponent
      },
      {
        path:'EmpLeaves',component:LeavesComponent
      },
    ]
  },
  {
    path:'',component:DeptLayoutComponent,
    children:[
      {
        path:'DeptTickets',component:TicketsComponent
      },
      {
        path:'DeptLeaves',component:LeavesComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
