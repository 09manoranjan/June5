import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute,Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  updateStudent = new FormGroup({
    name:new FormControl('',Validators.required),
    address:new FormControl(''),
    email:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
  })
  get name(){ return this.updateStudent.get('name')}
  get email(){ return this.updateStudent.get('email')}
  get phone(){ return this.updateStudent.get('phone')}
  constructor(private studentService:StudentService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.studentService.getCurrentStudentInfo(this.route.snapshot.params.id).subscribe((result)=>{
      console.log("result---------------->",result);
      this.updateStudent = new FormGroup({
        name:new FormControl(result['name'],[Validators.required,Validators.minLength(3)]),
        address:new FormControl(result['address']),
        email: new FormControl(result['email'],[Validators.required,Validators.email]),
        phone : new FormControl(result['phone'],[Validators.required,Validators.minLength(10)])
      })
    })
  }
  UpdateStudentData(){
    let formVal = this.updateStudent.controls;
    if(formVal.name.status =='INVALID' || formVal.email.status =='INVALID' || formVal.phone.status =='INVALID'){
      Swal.fire("Warning","Please Fill the Fields Correctly !","warning")
    }
    else{
    Swal.fire({
      title:"Are you sure you want to update the data ?",
      icon:"warning",
      showCancelButton:true,
      confirmButtonText:"Yes",
      cancelButtonText:"No"
    }).then((result)=>{
      if(result){
        this.studentService.updateStudentsInfo(this.route.snapshot.params.id,this.updateStudent.value).subscribe((result)=>{ 
          console.log("result------------->",result);
          Swal.fire("Success","Data Updated Successfully !","success");
          this.router.navigate(['/listStudents']);
        })
      }
    })
  }
  }
}
