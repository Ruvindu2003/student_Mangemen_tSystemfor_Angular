import { CommonModule } from '@angular/common';
import { HttpClient,  } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  public student: any = {
    name: "",
    email: "",
    gender: "" 
  };

  constructor(private http: HttpClient) {
    
   }


  public id:string = "1";

  addStudent() {
   
    this.http.post("http://localhost:8080/api/Student/addStudent", this.student, {
      headers: { 'Content-Type': 'application/json' } 
    }).subscribe({
      next: (res) => {
        console.log('Success:', res);
       
        this.student = { name: "",email: "" };
      },

      error: (err) => {
        console.error('Error:', err.error); 
      }

    });
  }

}

