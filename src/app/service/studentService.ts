import { HttpClient } from "@angular/common/http";
import { ManageCustomerComponent } from "../page/dashboard/manage-customer/manage-customer.component";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export default class StudentService {
    public id: string = "";




    constructor(private http: HttpClient) {


    }

    lodStudentData(): Observable<any> {
        return this.http.get("http://localhost:8080/api/Student/getAll");
    }

    SearchStudent(id: string): Observable<any> {
        return this.http.get(`http://localhost:8080/api/Student/SearchStudent/${id}`);
    }
}



