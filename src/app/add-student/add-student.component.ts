import { Component, OnInit } from '@angular/core';
import { StudentService } from "../student.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { validate } from 'json-schema';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentService:StudentService) { }
  studentForm = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    address:new FormControl(''),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]) 
  })
  get name(){ return this.studentForm.get('name');}
  get phone(){ return this.studentForm.get('phone')}
  get email(){ return this.studentForm.get('email')}
  ngOnInit() {
    
  }
  addNewStudents(){
    console.log("add form data------------>",this.studentForm);
    let formVal = this.studentForm.controls;
    if(formVal.name.status == "INVALID" || formVal.email.status == "INVALID" || formVal.phone.status == "INVALID"){
      Swal.fire("Warning","Please Fill all Fields Correctly !!","warning")
    }else{
    console.log("form value-------------->",this.studentForm.value);
    this.studentService.addNewStudentInfo(this.studentForm.value).subscribe((result)=>{
      console.log("result------------->",result);
      Swal.fire("Success","Data Added Successfully !!","success")
      this.studentForm.reset();
    })
  }
  }
}
