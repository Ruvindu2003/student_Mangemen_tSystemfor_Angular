import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import './update-student.component.css'
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink,RouterOutlet],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent {
  public studentList: any[] = [];
  public id: string = "";
  public student: any = {
    name: "",
    email: "",
    gender: "",
  };

  constructor(private http: HttpClient) {}

  updateStudent(): void {
    if (!this.student.name || !this.student.email || !this.student.gender) {
      console.error('All fields are required.');
      return;
    }

    this.http.put("http://localhost:8080/api/Student/Update", this.student, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe({
      next: (res) => {
        console.log('Update successful', res);
        this.student={name :"",email:""}
      },
      error: (err) => {
        console.error('Update failed', err);
      }
    });
  }

  searchStudent(): void {
    if (!this.id.trim()) {
      console.error('Please enter a valid student ID.');
      return;
    }

    this.http.get(`http://localhost:8080/api/Student/SearchStudent/${this.id}`).subscribe({
      next: (res) => {
        this.student = res; 
      },
      error: (err) => {
        console.error('Search failed', err.error);
      }
    });
  }
}
