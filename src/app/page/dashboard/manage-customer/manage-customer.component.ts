import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-customer',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], 
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css'] 
})
export class ManageCustomerComponent {
  public studentList: any = [];

  constructor(private http: HttpClient) {
    this.loadStudents(); 
  }

  loadStudents() {
    this.http.get("http://localhost:8080/api/Student/getAll").subscribe((data) => {
      console.log(data);
      this.studentList = data;
    });
  }
}
