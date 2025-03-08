import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AddCustomerComponent } from './page/dashboard/add-customer/add-customer.component';
import { ManageCustomerComponent } from './page/dashboard/manage-customer/manage-customer.component';
import { UpdateStudentComponent } from './page/dashboard/manage-customer/update-student/update-student.component';

export const routes: Routes = [
    {
        path :"login",
        component :LoginComponent
    },
    {
        path:"",
        component :LoginComponent
    },
    {
        path:"dashbord",
        component :DashboardComponent,
       children: [
            {
                path :"add-Student",
                component :AddCustomerComponent

            },
            {
                path:"manage-Student",
                component:ManageCustomerComponent

            },
            {
                path:"update-student",
                component:UpdateStudentComponent
                
            }
        ]
    }
];
