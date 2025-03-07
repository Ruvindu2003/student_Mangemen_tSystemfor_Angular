import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  public student:any={
    name:"",
    email:"null",
    Gender:"null"
  }

  constructor(private http:HttpClient){
  }
  addStudent(){
    this.http.post("http://localhost:8081/api/Student/addStudent",this.student).subscribe(res=>{
      console.log(res);
      
    }

    )
    console.log();
    
  }

 

 

}
