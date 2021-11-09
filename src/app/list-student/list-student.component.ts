import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  studentsArr : any = [];
  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.studentService.getStudentsInfo().subscribe((result)=>{
      console.log("result------------------>",result);
      this.studentsArr = result;
      
    })
  }
  deleteStudent(StuVal){
    console.log("to delete ---------->",StuVal);
    Swal.fire({
      title:"Are you sure you want to delete this record ?",
      icon:'warning',
      text:'You wont be able to recover this data !',
      showCancelButton : true,
      cancelButtonText : "No",
      confirmButtonText : "Yes"
    }).then((result)=>{
      if(result.value){
        this.studentService.deleteStudentsInfo(StuVal.id).subscribe((result)=>{
          console.log("result------------>",result);
          Swal.fire("Success","Data deleted Successfully !","success");
          location.reload();
        })
        
      }
    })
    
  }

}
