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
  public id: string = "1";

  constructor(private http: HttpClient) {
    this.loadStudents(); 
  }

  loadStudents() {
    this.http.get("http://localhost:8080/api/Student/getAll").subscribe((data) => {
      this.studentList = data;
    });
  }

  SearchStudent() {
    this.http.get(`http://localhost:8080/api/Student/SearchStudent/${this.id}`).subscribe({
      next: (res) => {
        this.studentList = [res];
        
      },
      error: (err) => {
        console.error('error', err.error);
      }
    });
  }

  Delete(studentId: string) {
    this.http.delete(`http://localhost:8080/api/Student/DeleteByID/${studentId}`).subscribe({
      next: (res) => {
       
        this.loadStudents();
      },
      error: (err) => {
        console.error('Error deleting student', err.error);
      }
    });
  }
}